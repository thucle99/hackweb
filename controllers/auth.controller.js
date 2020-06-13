var User=require('../models/user.model')

module.exports.create =async (req,res) =>{
    res.render('users/create')
}
module.exports.postCreate = async(req,res) =>{
    if(req.body.password!=req.body.checkpassword){
        res.render('users/create',{
            errors:[
                'The password is not the same'
            ],
            values:req.body
        })
        return;
    }
    var data={
        ...req.body,
        cash:10000000
    }
    await User.create(data);
    res.redirect('/auth/login')
}
//===============================

module.exports.login = async (req,res) =>{
    res.render('users/login')
}
module.exports.postLogin= async (req,res) =>{
    var name=req.body.name;
    var password=req.body.password;
    var user= await User.findOne({name:name});
    if(!user){
        res.render('users/login',{
            errors:[
                'User does not exits'
            ],
            values:req.body  // nhap sai gtri k bi mat di
        })
        return;
    }
    if(user.password !== password){  // đùng mk thì đăng nhập  //password
        res.render('users/login',{
            errors:[
                'Wrong password'
            ],
            values:req.body
        })
        return;
    }
    res.cookie('userId',user.id,{  // tạo ra 1 cookie trước khi đăng nhập
        signed: true    // dùng signedCookies
    });
    res.redirect('/index/user');  
}