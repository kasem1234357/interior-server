const { getAll, Add } = require("../controller/Transiction");

const router = require("express").Router();
router.get('/',getAll)
router.post('/',Add)
module.exports =router