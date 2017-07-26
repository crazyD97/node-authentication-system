//☕
//includes modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//router from routes folder
var index = require('./routes/index');
var users = require('./routes/users');
//config files
const dbconfig = require('./config/dbconfig');

//setting up mongoDB
mongoose.connect(dbconfig.db);
var db = mongoose.connection;

//checking connection
db.once('open',()=>{
  console.log("connected to mongoDB");
});

//checking for db errors
db.on('error',(err)=>{
  console.log("error in connection " + err);
});

//express app
var app = express();

app.use(cookieParser());
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//bodyParser for urls
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//pug template engine
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','pug');

//set middleware for static files, it's like client folder
app.use(express.static(__dirname+'/public'));

//expressValidator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//passport configration
require('./config/passport.conf')(passport);
app.use(passport.initialize());
app.use(passport.session());

//setting global varibale for user id logged in
app.get('*',(req, res, next)=>{
  res.locals.user = req.user || null;
  next();
})

//routes
app.use('/',index);
app.use('/users',users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//exporting app to use in bin/www
module.exports = app;
