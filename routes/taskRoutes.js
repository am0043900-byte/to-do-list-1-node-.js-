const express = require('express');

const Task = require('../models/Task');

const router = express.Router();



router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({
            success: true,
            data: task
        });

    }catch (error) {
            // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }
        res.status(400).json({
            success: false,
            message: error.message});
       

    }
})


router.get ("/", async (req, res) => {
    try {
        const  tasks =  await Task.find().populate("user", "name email"); 
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks,
        });

    }catch (error) 
    {
        res.status(400).json({
            success: false,
            message: error.message});

    }
});



router.delete("/:id" , async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

         res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });

    } catch (error)
    {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

module.exports = router;





