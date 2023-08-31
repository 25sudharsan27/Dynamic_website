const mongoose=require("mongoose")
const Slider=mongoose.Schema({
    title:String,
    subtitle:String,
    url:String,
    class:String
})


module.exports=mongoose.model("slider",Slider)