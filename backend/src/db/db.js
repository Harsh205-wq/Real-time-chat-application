import mongoose from "mongoose"

 const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb conncted:",conn.connection.host)
    } catch (error) {
        console.error("Error connection failed",error);
        process.exit(1); // 1 means failed 0 means success
    }
}
export default connectDB