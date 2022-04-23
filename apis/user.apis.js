const express = require('express')
const router = express.Router()

const user = require('../controller/user.controller')

router.use((req, res, next) => {
    next()
})

// define user for login
router.get('/', user.user)

// define user create
router.post('/', user.userCreate)
  
module.exports = router