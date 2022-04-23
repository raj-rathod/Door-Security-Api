const notificationCreate = (req, res) => {
    res.send('notification created');
}

const notifications = (req, res) => {
    res.send(req.query.username)
}

const notificationDetail = (req, res) => {
    res.send(req.query.username)
}

const notificationUpdate = (req, res) => {
    res.send('notification update')
}

const notificationDelete = (req, res) => {
    res.send('notification deleted')
}


module.exports = { 
    notifications,  
    notificationDetail, 
    notificationUpdate, 
    notificationDelete, 
    notificationCreate 
};