const memberModal = require('../modals/member.modal');
const path = require('path');

const memberCreate = (req, res) => {
    const memberObj = {
       userId: req.body.userId,
       name: req.body.name,
       relation: req.body.relation,
       permissions: req.body.permission,
       image: path.join(__dirname, '../uploads/'+ req.file.filename)
    }
    const member = new memberModal(memberObj);
    member.save((err, data) => {
        res.status(200).send(data);
    })
}

const members = (req, res) => {
   memberModal.find({userId: req.query.userId}, (err, data)=>{
       if(err){
           res.status(500).send('Something went wrong');
       }else{
           res.status(200).send(data);
       }
   });
}

const memberPermissionUpdate = (req, res) => {
    memberModal.findByIdAndUpdate(req.body.id, { permissions: req.body.permission}, (err, data) => {
       if(err){
           res.status(500).send('Something went wrong');
       }else{
           res.status(200).send(data);
       }
    });
}

const memberDelete = (req, res) => {
    memberModal.deleteOne({_id: req.query.id}, (err, data)=>{
      if(err){
          res.status(500).send('Something went wrong');
      }else{
          res.status(200).send(data);
      }
    });
}

module.exports = { 
    members, 
    memberCreate,
    memberPermissionUpdate,
    memberDelete
};