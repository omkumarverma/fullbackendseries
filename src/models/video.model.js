import mongoose, {schema } from "mongoose"

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"






const videoSchema = new Schems({
    

        videoFile :{
            type:String,
            required:true,
            unique:true,
        
        },
        thumbnail:{
            type:String,
            required:true,
        
        },
            title:{
            type:String,
            required:true,
        
        },
        discription:{
            type:String, // cloudinary url 
            required:true,
        },
        duration:{
            typer : number, 
            required:true, 
        },
        views: {
            type: Number,
            default:0
            },
        ispublished:{
            type:Boolean,
            default:true,
        },
        refreshToken:{
            type:string
        },
        owner:{
            type: schema.Types.ObjectId,
            ref:"User"
        }

},{timestamps: true}

)

videoSchema
export const Video = mongoose.model("Video", videoSchema)