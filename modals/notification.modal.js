var mongoose = require('mongoose');
const Schema = require('mongoose').Schema
  
var  notification = new mongoose.Schema({
    id: Schema.ObjectId,
    userId: String,
    name: String | undefined,
    image: String,
    date: Date,
    yourAction: Boolean,
    isReaded: Boolean
});
module.exports = new mongoose.model('member', member);