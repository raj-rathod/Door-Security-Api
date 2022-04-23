const express = require('express')
const fileUpload = require('../controller/file.upload');
const router = express.Router()

const member = require('../controller/member.controller');

router.use((req, res, next) => {
    next()
})

// get all members for user
router.get('/', member.members)

// create a member for user
router.post('/', fileUpload.upload.single('image'), member.memberCreate)

// member permission update
router.patch('/', member.memberPermissionUpdate)

// member delete
router.delete('/', member.memberDelete)
  
module.exports = router