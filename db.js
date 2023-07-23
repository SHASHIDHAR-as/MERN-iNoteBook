const mongoose=require('mongoose');
// const mongoURI='mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const mongoURI='mongodb+srv://shashidhar:MbGTOscSuaewg68W@cluster0.2jvaary.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://shashidhar:MbGTOscSuaewg68W@cluster0.2jvaary.mongodb.net/?retryWrites=true&w=majority

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log('successfully connected to database');
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports=connectToMongo;
// MbGTOscSuaewg68W
// mongodb+srv://shashidhar:<password>@cluster0.ysffrah.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://shashidhar:MbGTOscSuaewg68W@cluster0.ysffrah.mongodb.net/?retryWrites=true&w=majority