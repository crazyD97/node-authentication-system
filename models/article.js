let mongoose = require('mongoose');

//creating article schema
let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  }
},{collection:'article'});

//exporting
let article = module.exports = mongoose.model('article', articleSchema);
