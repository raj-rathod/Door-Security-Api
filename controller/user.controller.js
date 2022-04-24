const userModal = require('../modals/user.modal');

const userLogin = (req, res) => {
    userModal.findOne({email: req.query.username, password: req.query.password}).exec((err, data) => {
       if(err){
           res.status(500).send("something went wrong");
       }else{
           if(data){
               res.status(200).send(data);
           }else{
               res.status(404).send("User not found");
           }
       }
    });
}

const user = (req, res) => {
   userModal.findOne({_id: req.query.id}, (err, data) =>{
      if(err){
        res.status(500).send('Something went wrong');
      }else{
          res.status(200).send(data);
      }
   });
}
const userCreate = (req, res) =>{
    const userObj = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        image: 'http://localhost:3000/images/' + req.file.filename,
    };
    const user = new userModal(userObj);
    user.save((err, data) => {
        res.status(200).send(data);
    })
}

module.exports = { userLogin, user, userCreate };