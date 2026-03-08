import { Resend } from "resend";
import emailTemplate from "./emailTemplates.js";
import { resendClient,sender } from "../db/resend.js";

export const sendWelcomeEmail=async(email,name,clienturl)=>{
    const {data,error}=await resendClient.emails.send({
        from:"onboarding@resend.dev",
        to: ["harshupadhayay23118711xyz@gmail.com"],
        subject:"Welcome  to chatify",
        html:emailTemplate(name,clienturl)
    });
    if(error){
        console.log("Error sending welcome email:",error)
        throw new Error("Failed to send welcome email")
    }
    console.log("Welcome Email sent successfully",data)
}