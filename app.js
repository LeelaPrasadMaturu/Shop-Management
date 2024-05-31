const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const shopRoutes = require('./routes/shopRoutes');
const billRoutes = require('./routes/billRoutes');
const receiptRoutes = require('./routes/receiptRoutes');
const indexRoutes = require('./routes/index');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRoutes);
app.use('/shop', shopRoutes);
app.use('/bill', billRoutes);
app.use('/receipt', receiptRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
