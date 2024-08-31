const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://Student:webdev2024student@cluster0.uqyflra.mongodb.net/webdev2024', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDb Connected :)');
    }catch(error){
        console.error('Connection to MongoDB Not Successfull :(((', error);
        process.exit(1);
        
    }
};

module.exports=connectDB;