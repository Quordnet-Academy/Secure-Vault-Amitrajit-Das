import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
// import userRouter from './routes/userRouter.js'
import homeRouter from './routes/homeRouter.js'
import userCareerRoutes from './routes/userCareerRouter.js'
import userDetailRoutes from './routes/userDetailRouter.js'
import userDocumentRoutes from './routes/userDocumentRouter.js'
import userEducationRoutes from './routes/userEducationRouter.js'
import userFinanceRoutes from './routes/userFinanceRouter.js'
import userMedicalRoutes from './routes/userMedicalRouter.js'
import userRouter from './routes/userRouter.js'
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
app.use(userCareerRoutes);
app.use(userDetailRoutes);
app.use(userDocumentRoutes);
app.use(userEducationRoutes);
app.use(userFinanceRoutes);
app.use(userMedicalRoutes);
app.use(userRouter);
// app.use('/user', userRouter);





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


