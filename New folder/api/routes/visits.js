const {  get, postProductImages,addVisit, createProduct, getProducts, add, } = require("../controller/user");

const router = require("express").Router();

router.get('/',get)
router.post('/',addVisit)
router.post("/images", postProductImages);
router.post('/post',createProduct)
router.get('/post',getProducts)
router.post('/user',add)
module.exports =router