var mongoose = require('mongoose');
const Schema = require('mongoose').Schema
  
var  member = new mongoose.Schema({
    id: Schema.ObjectId,
    userId: String,
    name: String,
    relation: String,
    permissions: Boolean,
    image: String,
});
module.exports = new mongoose.model('member', member);