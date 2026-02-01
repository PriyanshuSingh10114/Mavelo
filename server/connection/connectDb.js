const mongoose=require('mongoose');
require('dotenv').config();
const connectDb=async()=>{
    mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://ayush:Ayush123@ayushrathi.xscarr7.mongodb.net/').then(()=>{
        console.log("Connected to MongoDB");
    });
}
module.exports=connectDb;