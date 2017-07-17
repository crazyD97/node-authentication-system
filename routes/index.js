const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var router = express.Router();
//getting our user model here
var User = require('../models/user');
router.use(bodyParser.json());

router.get('/',(req,res,next)=>{
  res.render('index',{title: "auth-sys",message: "this is index file."})
});

router.get('/userlogin',(req, res, next)=>{
  res.render('userlogin', {title: "Login"})
});

router.get('/userReg',(req, res, next)=>{
  User.find({}, (err, users)=>{
    if(err){
      console.log(err);
    }else{
      res.render('userReg', {
        title: "Register",
        users: users
      });
    }
  });
});

module.exports = router;
