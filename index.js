const express = require('express');
const path = require('path');
// const cors = require('cors');
const ejs = require('ejs');
// const bodyParser = require('body-parser');

const app = express();
// app.use(cors());
app.set('view engine', 'ejs');

// // Body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  express.urlencoded({
    extended: true,
  })
);

const database = require('./persistence/database.js');

// database.setKey('items', [
//   { id: 1, status: 'active', name: 'iPhone13', description: 'A New iPhone13' },
//   { id: 2, status: 'active', name: 'iPhone12', description: 'A New iPhone12' },
// ]);

// database.getKey('items').then((value) => {
//   res.render(__dirname + './templates/index.ejs', { items: value });
// });

const createRoute = require('./routes/createRoute');
const deleteRoute = require('./routes/deleteRoute');
const editRoute = require('./routes/editRoute');

app.use('/', createRoute);
app.use('/', deleteRoute);
app.use('/', editRoute);

app.get('/', async function (req, res) {
  res.render(__dirname + '/views/read.ejs', {
    items: [
      {
        id: 1,
        status: 'active',
        name: 'iPhone13',
        description: 'A New iPhone13',
      },
      {
        id: 2,
        status: 'active',
        name: 'iPhone12',
        description: 'A New iPhone12',
      },
    ],
  });
});

app.get('*', function (req, res) {
  return res.status(404).send('Route not defined');
});

let server = app.listen(3000, function () {
  console.log('App server is running on port 3000');
});
