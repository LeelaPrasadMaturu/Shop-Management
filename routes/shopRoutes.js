const express = require('express');
const router = express.Router();
const Shop = require('../models/shop');

// Add a new shop
router.post('/add', async (req, res) => {
    try {
        const shop = new Shop({ name: req.body.name });
        await shop.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
