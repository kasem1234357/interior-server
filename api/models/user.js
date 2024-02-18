const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
 
 visits:{
  type:Number
 },
 totalCustomers:{
    type:Number
   },
   totalSalery:{
    type:Number
   }
},{ timestamps: true })
module.exports = mongoose.model("user2", userSchema);