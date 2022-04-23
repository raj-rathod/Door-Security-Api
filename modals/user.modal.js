var mongoose = require('mongoose');
const Schema = require('mongoose').Schema
  
var user = new mongoose.Schema({
    id: Schema.ObjectId,
    password:String,
    name: String,
    phone: String,
    email: String,
    address: String,
    image: String
});
    
module.exports = new mongoose.model('Users', user);