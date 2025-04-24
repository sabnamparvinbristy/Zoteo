import express from 'express';
import mongoose, { skipMiddlewareFunction } from 'mongoose';

import dotenv from 'dotenv';

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.use(express.json());


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// MIDDLE WARE
// create middleware
// err-is err from skip Middleware 
// req-data from browser
// resresponse from server to client
// next-nest to Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;  // Get status code or default to 500
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false, 
        statusCode,
        message,
    });
});


