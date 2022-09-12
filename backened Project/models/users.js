const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
    
   
  },
  lastName: {
    type: String
    
   
  },
  email: {
    type: String
   
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
  //  role:{
  //   enum {
  //   admin="admin",
  //   user="user"}
  //  }
  
 
})
 // encrypting password before saving


const UserModel = mongoose.model('Users2', userSchema)
module.exports = UserModel