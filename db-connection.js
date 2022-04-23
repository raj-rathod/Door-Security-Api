var mongoose = require('mongoose');

require('dotenv/config');

const connection = () =>{
    console.log('Connecting ....');
    mongoose.connect(process.env.DB_URL, 
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
      
}

module.exports = { connection};