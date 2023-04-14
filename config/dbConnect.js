const mongoose = require("mongoose")

const Dbconnect = async () => {
    mongoose.set("strictQuery",false)
    await mongoose.connect("mongodb+srv://ASl:asliddin123@cluster0.vid3jua.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connect to mongodb");
    })
    .catch((err)=>{
        console.log("connection error");
    })
}

module.exports = Dbconnect
