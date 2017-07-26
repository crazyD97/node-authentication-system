const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

//index routes
router.get('/',(req,res,next)=>{
  res.render('index',{title: "auth-sys",message: "this is index file."})
});


//exporting module router
module.exports = router;
