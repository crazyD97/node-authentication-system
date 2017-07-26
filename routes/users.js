const express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//const dbconfig = require('../config/dbconfig.js');
//const mongoose = require('mongoose');
//setting up mongoDB
//mongoose.connect(dbconfig.db);
//var db = mongoose.connection;

//checking connection
//db.once('open',()=>{
//
//});

//checking for db errors
//db.on('error',(err)=>{
//  console.log("error in connection " + err);
//});

//getting our user model here
var User = require('../models/user');

//login routes
router.get('/login',(req, res, next)=>{
  res.render('userlogin', {title: "Login"})
});

//Register routes
router.get('/register',(req, res, next)=>{
  res.render('userReg');
});

//logout router
router.get('/logout',(req, res, next)=>{
  req.logout();
  req.flash('success', "Succesfully Logged out");
  res.redirect('/users/login');
});

//login and registers
router.post('/login',(req, res, next)=>{
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});
router.post('/register',(req, res, next)=>{
  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.password;
  const cpass = req.body.cpassword;

  let newUser = new User({
    username:username,
    email:email,
    password:pass
  });
  //checking in db for same username
  //let count = 0;
  //db.collection('user').find().toArray((err,users)=>{
  //  JSON.stringify(users);
  //  for (var i = 0; i < users.length; i++) {
  //    if(newUser.username == users[i].username){
  //      count = 1;
  //    }
  //  }
  //});

  //psssword hashing and saving the user to database
  //if(count==1){
  //  res.render('userReg',{picked:'username already picked!'});
  //}else if(count==0){
    bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(newUser.password, salt, (err,hash)=>{
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save((err)=>{
          if(err){
            req.flash('fail',"Already have a account!");
            res.redirect('/users/register');
          }else{
            req.flash('success','Successfully Registered!');
            res.redirect('/users/login');
          }
        });
      })
    });
  //}
});

module.exports = router;
