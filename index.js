import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import userRouter from './routes/userRouter.js'
import homeRouter from './routes/homeRouter.js'
import dotenv from 'dotenv'

// express
const app = express();
app.use(express.json());

//  Loads .env file contents into | process.env
dotenv.config();


//middleware

app.use(morgan());

// routes

app.use('/', homeRouter);
app.use('/user', userRouter);

// server port 
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);
 

// mongodb connection


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("connection error:", err);
    } else {
        console.log("MongoDB connection successful");
    }
});


