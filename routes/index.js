const express = require('express');
const router = express.Router();
const Shop = require('../models/shop');
const Bill = require('../models/bill');
const Receipt = require('../models/receipt');
const pdf = require('html-pdf');
const ejs = require('ejs');
const path = require('path');


router.get('/', async (req, res) => {
    try {
        const shops = await Shop.find({});
        res.render('index', { shops });
    } catch (err) {
        res.status(500).send(err);
    }
});
router.get('/shop/:id', async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.id);
        const bills = await Bill.find({ shopName: shop._id }).sort('date');
        const receipts = await Receipt.find({ shopName: shop._id }).sort('date');

        // Combine bills and receipts into a single transactions array
        const transactions = [
            ...bills.map(bill => ({ 
                type: 'bill', 
                no: bill.billNo, 
                amount: bill.amount, 
                date: bill.date,
                _id: bill._id 
            })),
            ...receipts.map(receipt => ({ 
                type: 'receipt', 
                no: receipt.receiptNo, 
                amount: receipt.amount, 
                date: receipt.date,
                _id: receipt._id 
            }))
        ].sort((a, b) => a.date - b.date);

        // Calculate the running balance
        let netBalance = 0;
        const transactionsWithBalance = transactions.map(transaction => {
            if (transaction.type === 'bill') {
                netBalance -= transaction.amount;
            } else {
                netBalance += transaction.amount;
            }
            return { ...transaction, netBalance };
        });

        res.render('shop', { shop, transactions: transactionsWithBalance, netBalance });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/shop/:id/transactions/pdf', async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.id);
        const bills = await Bill.find({ shopName: shop._id }).lean();
        const receipts = await Receipt.find({ shopName: shop._id }).lean();

        const transactions = [...bills, ...receipts].sort((a, b) => new Date(a.date) - new Date(b.date)).map(transaction => {
            return {
                ...transaction,
                type: transaction.billNo ? 'bill' : 'receipt',
                no: transaction.billNo || transaction.receiptNo
            };
        });

        let netBalance = 0;
        transactions.forEach(transaction => {
            netBalance += transaction.type === 'bill' ? -transaction.amount : transaction.amount;
            transaction.netBalance = netBalance;
        });

        ejs.renderFile(path.join(__dirname, '../views/pdfTemplate.ejs'), { transactions }, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                const options = { format: 'Letter' };

                pdf.create(data, options).toStream((err, stream) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.setHeader('Content-Type', 'application/pdf');
                        stream.pipe(res);
                    }
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/transaction/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Bill.findByIdAndDelete(id);
        await Receipt.findByIdAndDelete(id);
        res.redirect('back');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
