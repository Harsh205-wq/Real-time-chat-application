import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"

dotenv.config()


 cloudinary.config({ 
        cloud_name:process.env.CLOUDNIRY_CLOUD_NAME, 
        api_key:process.env.CLOUDNIRY_API_KEY, 
        api_secret:process.env.CLOUDNIRY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

export default cloudinary;