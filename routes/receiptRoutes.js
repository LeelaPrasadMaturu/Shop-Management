const express = require('express');
const router = express.Router();
const Receipt = require('../models/receipt');

router.post('/add', async (req, res) => {
    const { shopName, receiptNo, amount, date } = req.body;
    try {
        const newReceipt = new Receipt({ shopName, receiptNo, amount, date });
        await newReceipt.save();
        res.redirect(`/shop/${shopName}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/edit/:id', async (req, res) => {
    const { shopName, receiptNo, amount, date } = req.body;
    try {
        await Receipt.findByIdAndUpdate(req.params.id, { receiptNo, amount, date });
        res.redirect(`/shop/${shopName}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const receipt = await Receipt.findById(req.params.id);
        await receipt.remove();
        res.redirect(`/shop/${req.body.shopName}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
