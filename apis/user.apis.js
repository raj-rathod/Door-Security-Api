const express = require('express');
const fileUpload = require('../controller/file.upload');
const router = express.Router();

const user = require('../controller/user.controller');

router.use((req, res, next) => {
    next()
})

// define user for login
router.get('/login', user.userLogin);

router.get('/', user.user);

// define user create
router.post('/', fileUpload.upload.single('image') , user.userCreate);
  
module.exports = router