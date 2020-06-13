var Transfer=require('../models/transfer.model')

module.exports.index= async(req,res) =>{
    res.render('users/index')
}
module.exports.user = async (req,res) =>{
    res.render('users/index')
}

module.exports.csrf = async(req,res) =>{
    res.render('users/csrf')
}