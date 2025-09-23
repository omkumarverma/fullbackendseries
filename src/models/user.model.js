import mongoose, {schema } from "mongoose"

const userSchema = new Schems({
    

        username :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
            fullname:{
            type:String,
            required:true,
            // unique:true,
            // lowercase:true,
            trim:true,
            index:true
        },
        avtar:{
            type:String, // cloudinary url 
            required:true,
            // unique:true,
            // lowercase:true,
            // trim:true,
        },
        coverimage:{
            typer : String, //cloudinary url 

        },
        watchHistory:[
            {
            type: schema.Type.ObjectId,
            ref:"video"
            }
        ],
        password:{
            type:String,
            required:[true ,' password is required']
        },
        refreshToken:{
            type:string
        }

},{timestamps: true}

)

userSchema.pre("save", async function(next){           //
    if(!this.isModified("password")) return next ();   // !this = modified nahi hua hai  
    this.password= bcrypt.hash(this.password,10)     //
    next()

})




userSchema.methods.isPasswordCorrrect = async function (password){   //  
    return await bcript.compare( password,this.password)              //
}



 // jwt is a barer token jo usko ear kerta hai aa token jiske pass hai usko me passwoefd send ker dunga //
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email: this.email,
            username: this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )



}




export const user = mongoose.model("User", userSchema)