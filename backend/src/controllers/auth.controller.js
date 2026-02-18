import { generateToken } from "../utils/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../emails/emailHandler.js";

export const signup=async (req,res)=>{
    const{fullName,email,password}=req.body

    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        if(password.length<6){
             return res.status(400).json({message:"Password must be atleast 6 character"})
        }
         const emailRegex =
                             /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // 3️⃣ Validate email format
     if (!emailRegex.test(email)) {
     return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
    }

     const user=await User.findOne({email}) // finding user
     if(user){ // verify if user already exists
        return res.status(400).json({message:"User already exist"})
     }
     // password hasing 
     const salt=await bcrypt.genSalt(10);
     const hashedPassword=await bcrypt.hash(password,salt);

     // creating a new user
     const newUser=new User({
        fullName,
        email,
        password:hashedPassword
     })
     if(newUser){
         generateToken(newUser._id,res);
         await newUser.save();

         res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
         });
         try {
            await sendWelcomeEmail(savedUser.email,savedUser.fullName,process.env.CLIENT_URL)
         } catch (error) {
            
         }
     }
     else{
        res.status(400).json({message:"Invalid user data"})
     }
    } catch (error) {
      console.log("Error in Signup",error);
      res.status(500).json({message:"Internal server error"})  
    }   
}