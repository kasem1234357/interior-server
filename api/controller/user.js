const User = require('../models/user')
const cloudinaryUpload = require('../utils/cloudinaryUpload')
const cloudinaryDelete = require('../utils/cloudinaryDelete')
const Product = require('../models/Product')
const addVisit = async(req,res)=>{
    try {
      const user =await User.find()
      console.log(user);
      const dt = {
        visits:user[0].visits +1,
        totalSalery:user[0].totalSalery ,
        totalCustomers:user[0].totalCustomers 
      }
        await user[0].updateOne({$set:dt})
        res.status(200).json('visits haS been updated')
      } catch (error) {
       res.status(500).json(error)
       
      }
}
const addsalery = async(req,res)=>{
    try {
        const user = await user.find()
        const data = {
            ...user._doc,
            totalSalery :user.totalSalery +req.body.salery
        }
        await visits.updateOne({$set:data})
        res.status(200).json('salery haS been updated')
      } catch (error) {
       res.status(500).json(error)
       
      }
}
const addcustomer = async(req,res)=>{
    try {
        const user = await user.find()
        const data = {
            ...user._doc,
            totalCustomers :user.totalCustomers + 1
        }
        await visits.updateOne({$set:data})
        res.status(200).json('salery haS been updated')
      } catch (error) {
       res.status(500).json(error)
       
      }
}
const get = async (req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
}
const getProducts = async (req, res) => {
    try {
      // sort should look like this: { "field": "userId", "sort": "desc"}
      const { page = 0, pageSize = 20, sort = null, search = "" } = req.query;
  
      // formatted sort should look like { userId: -1 }
      const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };
  
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generateSort() : {};
      const products = await Product.find()
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);
      
      const total = await Product.countDocuments({
        name: { $regex: search, $options: "i" },
      });
      res.status(200).json({ products, total });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  const postProductImages = async (req, res) => {
    const { imgData} = req.body;
    try {
      
      let imgUrl = await cloudinaryUpload(imgData,galleryName='interior');
      res.status(200).json({
        url: imgUrl.secure_url,
        public_id:imgUrl.public_id,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    console.log("the line is 33", newProduct);
    //
    try {
      const savedProduct = await newProduct.save();
      console.log(savedProduct);
      const user =await User.find()
      console.log(user);
      const dt = {
        visits:user[0].visits,
        totalSalery:user[0].totalSalery + parseInt(req.body.price),
        totalCustomers:user[0].totalCustomers + 1
      }
      await user[0].updateOne({$set:dt})
      res.status(200).json("savedProduct");
    } catch (error) {
      res.status(500).json({ massege: error });
    }
  }
  const updateProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("the product has been updated");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  const deleteProduct = async (req, res) => {
    try {
      const {images}= req.body
      const test =await cloudinaryDelete(images)
      console.log(test);
      const product = await Product.findById(req.params.id);
      await product.deleteOne();
      res.status(200).json("the product has been deleted ");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  const add =async(req,res)=>{
    const newUser = new User(req.body);
    try {
      const savedProduct = await newUser.save();
      res.status(200).json(savedProduct)
    } catch (error) {
      res.status(500).json('error')
    }
  }
module.exports = {
    addVisit,addcustomer,get,addsalery,getProducts,deleteProduct,updateProduct,postProductImages,createProduct,add
}