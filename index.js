const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const username = "Rajesh";
const password = "mXVs0kYbPhtBTshw";
const cluster = "cluster0.5gpsd";
const dbname = "DoorSecurityDB";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
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
  console.log(`App listening on port ${port}`)
})