const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Shop', shopSchema);
