const express = require("express");
var bodyParser = require('body-parser');
require('dotenv/config');

const user = require('./apis/user');

const dbConnection = require('./db-connection');

const app = express();

dbConnection.connection();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.json());

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong')
})

app.use('/user', user);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
})