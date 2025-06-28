import { User } from '../models/user.model.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {apiError} from '../utils/apiError.js';
import {apiResponse} from '../utils/apiResponse.js';

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

export {registerUser};
