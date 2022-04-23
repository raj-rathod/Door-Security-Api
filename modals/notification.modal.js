var mongoose = require('mongoose');
  
var  notification = new mongoose.Schema({
    id: Schema.ObjectId,
    userId: String,
    name: String | undefined,
    image:{
        data: Buffer,
    },
    date: Date,
    yourAction: Boolean,
    isReaded: Boolean
});
module.exports = new mongoose.model('member', member);