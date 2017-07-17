let mongoose = require('mongoose');

//creating mongoose schema
let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{collection:'user'});

//exporting this module to use in other files
let user = module.exports = mongoose.model('user',userSchema);
