const notificationModal = require('../modals/notification.modal');
const path = require('path');
const fs = require('fs');

const notificationCreate = (req, res) => {
    const notificationObj = {
      name: req.body.name,
      userId: req.body.userId,
      image: path.join(__dirname, '../uploads/'+ req.file.filename),
      yourAction: req.body.yourAction,
      isReaded: req.body.isReaded,
      date: new Date()
    };
    const notification = new notificationModal(notificationObj);
    notification.save((err, data) => {
        if(err){
            res.status(500).send('Something went wrong');
        }else{
            res.status(200).send(data);
        }
    });

}

const notifications = (req, res) => {
    notificationModal.find({userId: req.query.userId}, (err, data) =>{
      if(err) {
          res.status(500).send('Something went wrong');
      }else{
          res.status(200).send(data);
      }
    }).sort({date: -1});
}

const notificationDetail = (req, res) => {
    notificationModal.findOne({_id: req.query.id}, (err, data) =>{
        if(err) {
            res.status(500).send('Something went wrong');
        }else{
            res.status(200).send(data);
        }
    });
}

const notificationUpdate = (req, res) => {
    notificationModal.findByIdAndUpdate(req.body.id, req.body.update, (err, data) => {
      if(err) {
          res.status(500).send('Something went wrong');
      }else{
          res.status(200).send(data);
      }
    });
}

const notificationDelete = (req, res) => {
    let  imagePath = '';
    notificationModal.findOne({_id: req.query.id}, (err, data) =>{
        if(err) {
            res.status(500).send('Something went wrong');
        }else{
            imagePath = data?.image
            notificationModal.deleteOne({_id: req.query.id}, (err, data)=>{
                if(err){
                    res.status(500).send('Something went wrong');
                }else{
                    deleteUploadFile(imagePath);
                    res.status(200).send(data);
                }
            });
        }
    });
}

const deleteUploadFile = (filePath) =>{
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
    }
}


module.exports = { 
    notifications,  
    notificationDetail, 
    notificationUpdate, 
    notificationDelete, 
    notificationCreate 
};