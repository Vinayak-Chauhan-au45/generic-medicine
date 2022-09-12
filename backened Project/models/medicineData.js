const mongoose = require('mongoose')


const medicinesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    // lowercase: true,
    maxLength: 50
  },
  salt: {
    type: String,
    required :true,
    maxLength:60
  }
  
  
})

//collectionName, Schema
const medicineModel = mongoose.model('Medicines', medicinesSchema)

module.exports = medicineModel