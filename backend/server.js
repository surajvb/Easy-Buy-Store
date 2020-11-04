const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
connectDB(); // wil be run on launch to connect to DB

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application is running in ${process.env.NODE_ENV} mode at ${PORT} port`);
});
