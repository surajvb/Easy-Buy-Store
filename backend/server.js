const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');
const connectDB = require('./config/db');
const colors = require('colors'); // need tpackage to show different colors underlines for logs
const productRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middlewares/errorMiddlewares');
dotenv.config();

const app = express();
connectDB(); // wil be run on launch to connect to DB

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api/products', productRoutes);
app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application is running in ${process.env.NODE_ENV} mode at ${PORT} port`.yellow.bold);
});
