const express= require("express")

const {route}=require("express/lib/application")

const routes=express.Router()
const Detail=require("../models/Detail")
const Slider=require("../models/Slider")
const Service=require("../models/service")
const Contact=require("../models/Contact")

routes.get("/",async (req,res)=>{
    const details=await Detail.findOne({"_id": "64b2440c3556c577936fe6b7"});
    console.log(details);
    const slides=await Slider.find()
    const service=await Service.find()
    res.render("index",{
        details:details,
        slides:slides,
        service:service
        
    });
})


routes.get("/gallery", async(req,res)=>{
    console.log("galery clicked")
    const details=await Detail.findOne({"_id": "64b2440c3556c577936fe6b7"});
    console.log(details);
    const slides=await Slider.find()
    const service=await Service.find()
    res.render("gallery",{
        detials:details,
        slides:slides,
        service:service
    })
})

routes.get("/about",(req,res)=>{
    res.redirect("/#about")
    
})
routes.get("/services",(req,res)=>{
    res.redirect("/#services")
})

routes.get("/contact-us",(req,res)=>{
    res.redirect("/#contact-us")
})

routes.get("/process-contact-form",(request,response)=>{
    console.log("form is submitted")
    try{
        const data=Contact.create(request.query)
        console.log(request.query)
        response.redirect("/")
    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes