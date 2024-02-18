const Tasks = require('../models/Tasks');
const getAllTasks = async(req,res)=>{
    try {
        const allTasks = await Tasks.find()
        res.status(200).json(allTasks)
    } catch (error) {
      res.status(500).json(error)
    }
   }
const getTask = async(req,res)=>{
    try {
        const task = await Tasks.findById(req.params.id)
        res.status(200).json(task)
    } catch (error) {
     res.status(500).json(error)
    }
   }
const updateTask = async(req,res)=>{
    try {
      const task = await Tasks.findById(req.params.id)
      await task.updateOne({$set:req.body})
      res.status(200).json('task haS been updated')
    } catch (error) {
     res.status(500).json(error)
     
    }
   }
const createTask = async(req,res)=>{
    const newTask = new Tasks(req.body)
    try {
     const savedTask = await newTask.save()
     res.status(200).json(savedTask)
    } catch (error) {
     res.status(500).json(error)
    }
   }
const deleteTask = async(req,res)=>{
    try {
     await Tasks.findByIdAndDelete(req.params.id)
     res.status(200).json('the task has been deleted')
    } catch (error) {
      res.status(500).json(error)
    }
 }
const getTasksWithReminder = async(req,res)=>{
    try {
      const tasks = await Tasks.find({remainder:true})
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json(error)
    }
  }
module.exports = {
    getAllTasks,getTask,updateTask,deleteTask,getTasksWithReminder,createTask
}