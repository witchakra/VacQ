const mongoose = require('mongoose');
const connectDB = async() => {
    mongoose.set('strictQuery',true);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //await ใช้กับ asyn เพื่อบองว่าจะมีการรอข้อมูลจากแอปอื่น ในที่นี้คือ mongoDB

    console.log(`mongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;