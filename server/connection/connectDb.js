const mongoose=require('mongoose');
require('dotenv').config();
const connectDb=async()=>{
    mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://Priyanshu:Priyanshu123@cluster0.tg05ugd.mongodb.net/?appName=Cluster0').then(()=>{
        console.log("Connected to MongoDB");
    });
}
module.exports=connectDb;