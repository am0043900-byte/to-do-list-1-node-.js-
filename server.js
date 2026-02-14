//Require ENV
require('dotenv').config();

//require mongoose
const mongoose = require('mongoose');
//require express 
const express = require('express');
//create server App By express
const app = express();
app.use(express.json());

//import routes/taskRoutes.js
const TaskRoute = require('./routes/taskRoutes');

//use taskRoutes

app.use("/api/tasks", TaskRoute)





//Mongoose connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log ("The database is connected to mongoDB");
    }catch (error){
        console.log("ERROR connecting to MongoDB: ", error.message);
        process.exit(1);

    }
}

connectDB();

// Start server vby crete port & listen to it
const PORT =  process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port is: ${PORT}`);
});





