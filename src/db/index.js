// import mongoose from " mongoose";
// import { DB_NAME }  from "../constant";

// const connectDB = async ()=>{
//     try{

//     } catch(error){

//     }
// }

import mongoose from "mongoose";
import { DB_NAME }  from "../constants.js";

const connectDB = async () => {
        try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    
    } catch(error){
        console.log(" MongooesDB connection error ", error )
        process.exit(1)

    }
}

export default connectDB 