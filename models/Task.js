const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:
    {
        type : String,
        required: [true, "Please Enter a title "],
    },
    isCompleted: 
    {
        type : Boolean,
        // Automatically false (User doesn't send it)
        default: false,
    },
    email: 
    {
        type: String,
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true,
    },
    user: 
    {
          // ده نوع خاص في MongoDB بيخزن الـ ID الخاص بدوكيومنت تاني

        type: mongoose.Schema.Types.ObjectId,
        // بيربط الحقل ده بموديل اسمه "User"
        // وده بيسمحلي أستخدم populate عشان أجيب بيانات اليوزر المرتبط بالتاسك
        ref: "User",
    },
    createdAt:
    {
        type: Date,
       // MongoDB هتحط التاريخ والوقت الحالي تلقائيًا
        default: Date.now,
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;