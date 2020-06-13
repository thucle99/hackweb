require('dotenv').config();
var express = require('express')
var app = express()
var port = 3000

var  bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser')

var userRouter = require('./routers/user.router')
var authRouter = require('./routers/auth.router')
var check=require('./middlewares/user.check')
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,useUnifiedTopology: true});
app.set('view engine', 'ejs')
// app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))

app.use(express.static('public'))

app.use('/index',userRouter);
app.use('/auth',authRouter);
//app.get('/', (req, res) => res.render('layout/common'))

app.listen(process.env.PORT || port, () => console.log(`Example app listening at ${port}`))