const express = require('express')
const router = express.Router()
const fileUpload = require('../controller/file.upload');

const notification = require('../controller/notification.controller')

router.use((req, res, next) => {
    next()
})

// get all notification for user 
router.get('/', notification.notifications)

//get notification details for user
router.get('/notification-detail', notification.notificationDetail)

// notification action 
router.patch('/', notification.notificationUpdate)

// notification delete
router.delete('/', notification.notificationDelete)

// create notification
router.post('/', fileUpload.upload.single('image'), notification.notificationCreate)

  
module.exports = router