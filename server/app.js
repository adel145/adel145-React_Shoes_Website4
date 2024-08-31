const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes'); 

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', orderRoutes); 

module.exports = app;
