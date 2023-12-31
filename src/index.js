// require('dotenv').configDotenv()  it also works but it is older way and it disruped the flow of the code

import dotenv from "dotenv"; // remember every time we have to execute the env file first so all the app can acces it 
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
    app.on("error" , (err)=>{
        console.log("Error durign listing the app" , err);
        throw err;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`The server is running on PORT : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed" , err);
})


// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";

// import express from "express";
// const app = express();

// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error" , (error)=>{
//         console.log("Eror: " , error );
//         throw error

//     })
//     app.listen(process.env.PORT , ()=>{
//         console.log("The app is running on " , `${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.log("Error : ", error);
//     throw error;
//   }
// })();
// This is one way to connect DataBase from the indexe.js file but it is not professional
