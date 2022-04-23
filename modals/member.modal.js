var mongoose = require('mongoose');
  
var  member = new mongoose.Schema({
    id: Schema.ObjectId,
    userId: String,
    name: String,
    relation: String,
    permissions: Boolean,
    image: {
        data: Buffer,
    }
});
module.exports = new mongoose.model('member', member);