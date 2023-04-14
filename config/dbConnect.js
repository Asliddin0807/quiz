const mongoose = require("mongoose")

const Dbconnect = async () => {
    mongoose.set("strictQuery",false)
    await mongoose.connect("mongodb+srv://asliddin:asliddin123@atlascluster.k5lmz3l.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connect to mongodb");
    })
    .catch((err)=>{
        console.log("connection error");
    })
}

module.exports = { Dbconnect }
