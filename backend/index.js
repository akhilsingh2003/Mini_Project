const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
}).then(()=>console.log("Connected to Db"))
.catch((err)=>console.log(err))


app.use(express.json());
app.use("/api/auth",require('./routes/auth'))
app.use("/api/users",require('./routes/users'))




app.listen(8000,()=>{
    console.log("Server is running on 8000....");
})