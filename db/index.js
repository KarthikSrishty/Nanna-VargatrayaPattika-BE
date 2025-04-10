const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  gothram: String,
  number: Number,
  address: String,
  paymentStatus:String,
  data: [{
      vargatrayam: String,
      gothramFirstName: String,
      gothramLastName:String,
      nameFirstName: String,
      nameLastName:String,
      rupam:String
  }]
});

const User = new mongoose.model('User', userSchema);
    
module.exports = {User}