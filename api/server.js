const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const { sequelize } = require('./models');
const { storesRouter, productsRouter, categoriesRouter } = require('./routes');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(
  '/uploads/stores',
  express.static(path.join(__dirname, '/uploads/stores'))
);
app.use(
  '/uploads/categories',
  express.static(path.join(__dirname, '/uploads/categories'))
);
app.use(
  '/uploads/products',
  express.static(path.join(__dirname, '/uploads/products'))
);

app.use('/api/stores', storesRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

const PORT = process.env.PORT || 5000;
app
  .listen(PORT, async () => {
    console.log(`
     Server listening on port: ${PORT}
   +--------------------------------+
`);
    await sequelize.authenticate();
    console.log('Database Connected!');
  })
  .on('error', (err) => {
    console.log(err);
    process.exit(1);
  });
