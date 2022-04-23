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
    familyMembers:[
        {
           name: String,
           relation: String,
           permissions: Boolean,
           image: {
              data: Buffer,
           }

        },
    ],
    notifications:[
        {
            name: String | undefined,
            image:{
                data: Buffer,
            },
            date: Date,
            yourAction: Number,
            isReaded: Boolean
        }
    ]
});
    
module.exports = new mongoose.model('User', user);