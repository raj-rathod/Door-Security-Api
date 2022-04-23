var mongoose = require('mongoose');
  
var user = new mongoose.Schema({
    id: Schema.ObjectId,
    password:String,
    name: String,
    phone: String,
    email: String,
    address: String,
    image:
    {
        data: Buffer,
    },
});
    
module.exports = new mongoose.model('user', user);