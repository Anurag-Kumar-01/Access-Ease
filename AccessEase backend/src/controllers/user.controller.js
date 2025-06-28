import { User } from '../models/user.model.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {apiError} from '../utils/apiError.js';
import {apiResponse} from '../utils/apiResponse.js';

const options = {
    httpOnly: true,
    secure: false,
}

const generateAcessToken=async (userId)=>{
    const user = await User.findById(userId).select("-password");
    if(!user){
        throw new apiError(404,"User not found");
    }
    const accesstoken = user.createJWT();
    return {accesstoken,user};
}

const registerUser = asyncHandler(async (req,res)=> {
    const{firstname,lastname,email,password,plan}  = req.body;
    if(!firstname || !lastname || !email || !password || !plan){
        throw new apiError(400,"Please provide all required fields");
    }

    const existedUser = await User.findOne({email})
    if(existedUser){
        throw new apiError(400,"User already exists with this email");
    }
    const user = await User.create({
        firstname,
        lastname,
        email,
        password,
        plan
    });

    const createdUser = await User.findById(user._id).select("-password ")
    if(!createdUser){
        throw new apiError(500,"User not created, please try again later");
    }
    res.status(200)
    .json( new apiResponse(200,createdUser,"user registered successfully"))


})

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        throw new apiError(400,"Please provide all required fields");
    }
    const user = await User.findOne(
        {
            $or: [{email}]
        }
    )
    if(!user){
        throw new apiError(401,"Invalid email");
    }
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if(!isPasswordCorrect){
        throw new apiError(401,"Invalid credentials, please try again");
    }
    const {accesstoken,loggedInUser} = generateAcessToken(user._id);

    return res.status(200)
    .cookie("accesstoken",accesstoken,options)
    .json(new apiResponse(200,{
        user : loggedInUser,
        accesstoken
    },"User logged in successfully"));

})

export {registerUser,
    loginUser,

};
