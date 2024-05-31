const express = require('express');
const router = express.Router();
const Bill = require('../models/bill');

router.post('/add', async (req, res) => {
    const { shopName, billNo, amount, date } = req.body;
    try {
        const newBill = new Bill({ shopName, billNo, amount, date });
        await newBill.save();
        res.redirect(`/shop/${shopName}`);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/edit/:id', async (req, res) => {
    const { shopName, billNo, amount, date } = req.body;
    try {
        await Bill.findByIdAndUpdate(req.params.id, { billNo, amount, date });
        res.redirect(`/shop/${shopName}`);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/delete/:id', async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id);
        await bill.remove();
        res.redirect(`/shop/${req.body.shopName}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
