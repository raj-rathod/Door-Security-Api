const express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var fs = require('fs');
var path = require('path');

const uri = require('./db_connection_url');
const user = require('./apis');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.get('/user', user.getUser);
app.post('/user', user.createUser);

mongoose.connect(uri.url
  , 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true     
  }
);

const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");
});

const port = 3000

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})