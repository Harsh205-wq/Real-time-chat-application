
import User from "../models/user.model.js"
import message from "../models/message.js";
import cloudinary from "../db/cloudinary.js";

export const getAllContacts=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filterdedUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        
        res.status(200).json(filterdedUsers);
    } catch (error) {
        console.log("Error in get AllContacts:",error)
        res.status(500).json({message:"Server error"})
    }
}

export const getMessagesByUserId=async(req,res)=>{
    try {
        const myId=req.user._id;
        const {id:userToChatId}=req.params

        const message=await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        })
    } catch (error) {
        
    }
}

export const sendMessage=async(req,res)=>{
    try {
      const {text,message}=req.body;
      const {id:receiverId}=req.params;
      const senderId=req.user._id;

      let imageUrl;
      if(image){
        const uploadResponse=await cloudinary.uploader.upload(image)
        imageUrl=uploadResponse.secure_url; 
      }
      const newMessage=new message({
        senderId,
        receiverId,
        text,
        image:imageUrl
      });
      await newMessage.save();

      // todo

      res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}