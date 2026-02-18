import { Resend } from "resend";
import emailTemplate from "./emailTemplates.js";
import { resendClient } from "../db/resend.js";

export const sendWelcomeEmail=async(email,name,clienturl)=>{
    const {data,error}=await resendClient.emails.send({
        from:`${sender.name}<${sender.email}>`,
        to:email,
        subject:"Welcome  to chatify",
        html:emailTemplate( userName, appLink, supportEmail)
    });
    if(error){
        console.log("Error sending welcome email:",error)
        throw new Error("Failed to send welcome email")
    }
    console.log("Welcome Email sent successfully",data)
}