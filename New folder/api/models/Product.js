const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
 
 imgUrl:{
  type:String
 },
 title:{
    type:String
   },
   price:{
    type:Number
   },
   type:{
    type:String
   }
},{ timestamps: true })
module.exports = mongoose.model("product2", productSchema);