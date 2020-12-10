const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const {
  indexRouter,
  storesRouter,
  productsRouter,
  categoriesRouter,
} = require('./routes');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/stores', storesRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

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
