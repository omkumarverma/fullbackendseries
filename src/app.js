import express from "express";
import cors from " cors "
import cookieParser from " cookie-parser"



const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    credentials:true
}))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))// this is use for jo name search bar me om+kumar hota hai uske liyia 
app.use(express.static ("public") ) 
app.use(cookieParser())

export {app}