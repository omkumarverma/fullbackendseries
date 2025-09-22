// require ("dotenv").config({path:'../env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:'./env'});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(` server is running  at port : ${process.env.PORT}`)

    })
})
.catch((error)=>{
console.log(" mongoDB connection failed !!! ", error)
})





















/*  this is 1st approch according to sir  //
import express from "express";
const app = express();

try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=> {
        console.log("error:",error)
        throw error 
    })

    app.listen( process.env.PORT,()=>{
        console.log(`app is listning on port ${process.env.port}`);
    }  )

} catch(error){
    console.error("Error connecting to the database", error);
    process.exit(1);
    throw error;


}
*/
