//var shortid = require('short-id');
var Transfer= require('../models/transfer.model')
var User =require('../models/user.model')
module.exports.transfer= async (req,res,next)=>{
    // res.render('transfer/create',{  
    //     csrfToken: req.csrfToken() // tạo ra 1 tooken,đúng tooken mới chuyển tiền được
    // });
    var user= await Transfer.find({userId:req.signedCookies.userId})
    res.render('users/transfer',{
        users:user
    })
    //res.send(req.csrfToken());
}
module.exports.postTransfer= async(req,res,next)=>{
    var value= await User.findOne({_id:req.signedCookies.userId})
    // console.log('userId.....',req.signedCookies.userId);
    // console.log('cash....',cash);
    console.log('cash....',value.cash);
    
    var data={
        amount:parseInt(req.body.amount),      //so tien
        account:req.body.account,
        userId:req.signedCookies.userId,  // người dang chuyển khoản
        cash:value.cash
    }// tạo Id ngẫu nhiên lưu trên db
    Transfer.create(data);
    res.redirect('/index/transfer');
}
module.exports.delete = async(req,res) =>{
    var id=req.params.id;
    console.log(id);
    await Transfer.remove({_id:id});     //xóa dữ liệu
    res.redirect('/index/transfer');
    // res.render('users/transfer')
}
