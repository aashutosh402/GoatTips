const dotenv=require("dotenv")
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB =require("./config/db")
const path = require("path")
connectDB()

const app = express();

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
const PORT = process.env.PORT ||5000;

if(process.env.NODE_ENV === 'production'){
  app.use("/",express.static("client/build"))

  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client/build/index.html'))
  })
}


const server=app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
process.on("unhandledRejection",(err,promise)=>{
  console.log(` logged error${err}`);
  server.close(()=>process.exit(1));
})
