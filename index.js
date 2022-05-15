const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(
  express.urlencoded({
    extended: true,
  })
);

const createRoute = require('./routes/createRoute');
const readRoute = require('./routes/readRoute');
const editRoute = require('./routes/editRoute');
const deleteRoute = require('./routes/deleteRoute');
const undoRoute = require('./routes/undoRoute');

app.use('/', createRoute);
app.use('/', readRoute);
app.use('/', editRoute);
app.use('/', deleteRoute);
app.use('/', undoRoute);

app.get('*', function (req, res) {
  return res.status(400).send('Something went wrong!');
});

app.listen(3000, function () {
  console.log('App server is running on port 3000');
});
