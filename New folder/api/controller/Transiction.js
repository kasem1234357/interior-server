const Transiction = require('../models/Transiction');
const getAll = async(req,res)=>{
    try {
        const allTasks = await Transiction.find()
        res.status(200).json(allTasks)
    } catch (error) {
      res.status(500).json(error)
    }
}
const Add = async(req,res)=>{
    const newTransiction = new Transiction(req.body)
    try {
        const savedTransiction = await newTransiction.save()
        res.status(200).json(savedTransiction)
       } catch (error) {
        res.status(500).json(error)
       }
}
module.exports = {
    Add,
    getAll
}