const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

//getting article model
let Article = require('../models/article');

//index routes
router.get('/',(req,res,next)=>{
  Article.find({},(err, articles)=>{
    if(err){
      console.log("article not found");
    }
    else{
      res.render('index',{
        title: "Articles",
        articles: articles
      });
    }
  });
});


//exporting module router
module.exports = router;
