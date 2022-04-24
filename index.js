const express = require("express");
const cors = require('cors'); 
var bodyParser = require('body-parser');
require('dotenv/config');

const user = require('./apis/user.apis');
const member = require('./apis/member.apis');
const notification = require('./apis/notification.apis'); 

const dbConnection = require('./db-connection');

const app = express();

dbConnection.connection();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong')
})

app.use('/user', user);
app.use('/member', member);
app.use('/notification', notification);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
})