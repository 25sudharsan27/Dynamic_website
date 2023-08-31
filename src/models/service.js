const mongoose=require("mongoose")

const service=mongoose.Schema({
    title:String,
    subtitle:String,
    clink:String,
    slink:String
})

module.exports=mongoose.model("service",service)