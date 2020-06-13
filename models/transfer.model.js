var mongoose=require('mongoose');

var transferSchema= new mongoose.Schema({
    amount: Number,
    account: String,
    userId: String,
    cash:Number
});
 var Transfer=mongoose.model('Transfer',transferSchema,'transfers');
 module.exports=Transfer;