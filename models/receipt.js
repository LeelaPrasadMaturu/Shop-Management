const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
    receiptNo: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    shopName: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true }
});

module.exports = mongoose.model('Receipt', receiptSchema);
