var express = require('express')
var router=express.Router();

var controller=require('../controllers/auth.controller')

router.get('/login',controller.login)  //  dang nhap
router.post('/login',controller.postLogin)

router.get('/create',controller.create);
router.post('/create',controller.postCreate)

module.exports = router 