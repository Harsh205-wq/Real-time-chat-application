import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import path from "path"

dotenv.config({
  path:"./.env"  // config dotenv before using process.env.Variable
})

const app=express();
const _dirname=path.resolve();


const PORT=process.env.PORT || 5000

app.use("/api/auth",authRoutes)
app.use("/api/auth",messageRoutes)

// deployment
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(_dirname,"../frontend/dist")))

  app.get(/.*/, (_, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

}

 app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
  })