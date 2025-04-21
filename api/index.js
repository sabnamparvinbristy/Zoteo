import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

import userRouter from './routes/user.route.js'

dotenv.config();

// mongoose.connect(""mongodb+srv://zoteo:ptesqA2SKlHaMwMn@cluster0.qirmdd0.mongodb.net/"");
// password->ptesqA2SKlHaMwMn   ,username:zoteo

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongo');
}).catch((err)=> {
    console.log(err);

})

// password->ptesqA2SKlHaMwMn   ,username:zoteo

const app= express();
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);

app.use("/api/user", userRouter);