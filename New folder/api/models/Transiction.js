const mongoose = require("mongoose");
const TransictionSchema = mongoose.Schema({
 customerName:{
  type:String,
  max:100
 },
 number:{
  type:Number
 },
 salery:{
  type:Number,
  require:true
 },
 type:{
    type:String
 }
 
 
},{ timestamps: true })
module.exports = mongoose.model("Transiction2", TransictionSchema);