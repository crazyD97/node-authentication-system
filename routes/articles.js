const express = require('express');
var router = express.Router();

//getting article model
let Article = require('../models/article');

//routes
router.get('/add',(req, res, next)=>{
  res.render('addArticle');
});

router.post('/add',(req, res, next)=>{
  let article = new Article();
  article.title = req.body.title;
  article.body = req.body.body;
  article.author = req.body.author;
  article.save((err)=>{
    if(err){
      req.flash('fail','Article not submitted!');
      res.redirect('/articles/add');
    }
    else{
      req.flash('success','Article Submitted');
      res.redirect('/');
    }
  });
});

//route for specific article
router.get('/:id',(req, res, next)=>{
    Article.findById(req.params.id, (err, article)=>{
      res.render('article',{
         article:article
      });
    });
});

module.exports = router;
