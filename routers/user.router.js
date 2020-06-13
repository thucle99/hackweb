var express = require('express')
var router=express.Router();

var controller=require('../controllers/index.controller')
var controllerTransfer=require('../controllers/transfer.controller')
var userMiddleware=require('../middlewares/user.check')

router.get('/',controller.index) // trang chủ
//userMiddleware.loginCheck
router.get('/user',userMiddleware.loginCheck,controller.user)   // dnhap xong

router.get('/transfer',userMiddleware.loginCheck,controllerTransfer.transfer);
router.post('/transfer',controllerTransfer.postTransfer);


router.get('/csrf',controller.csrf);
router.get('/:id',controllerTransfer.delete);
module.exports = router 