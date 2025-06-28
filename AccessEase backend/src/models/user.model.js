import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    firstname:{
        type : String,
        required: true,
    },
    lastname:{
        type : String,
        required: true,
    },
    email:{
        type : String,
        required: true,
        unique: true,
    },
    password:{
        type : String,
        required: true,
    },
    plan:{
        type: String,
        enum : ['Free Plan', 'Pro Plan - $29/month', 'Enterprise Plan - $99/month'],
        default: 'free',
        required : true,
    }

})

userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();
    
    this.password = await bcrypt.hash(this.password,12);
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.createJWT = function(){
    jwt.sign({
        userId : this._id,
        email : this.email,
        plan : this.plan
    },
    process.env.VITE_JWT_SECRET,
    {
        expiresIn: process.env.VITE_JWT_EXPIRY
    }
)
}



export const User = mongoose.model("User",userSchema);
