const express = require("express")
const app = express()

const routes=require("./routes/main")
const hbs=require("hbs")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const Detail=require("./models/Detail")
const slider=require("./models/Slider")
const service=require("./models/service")
///static/css/style.css

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))

app.use("",routes)


// hbs (template engine)

app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

// db connection
mongoose.connect("mongodb://localhost:27017/website_data"
).then(()=>
    {
        console.log("connected successfully")
        // service.create({
        //     title:"Providing Best Courses",
        //     subtitle:"We provice courses that helps our student in learning and in placements",
        //     clink:"#",
        //     slink:"#"
        // },
        // {
        //     title:"Learn Projects",
        //     subtitle:"We provice courses that helps our student in learning and in placements",
        //     clink:"#",
        //     slink:"#"
        // },
        // {
        //     title:"Providing Best Courses",
        //     subtitle:"We provice courses that helps our student in learning and in placements",
        //     clink:"#",
        //     slink:"#"
        // },
        // {
        //     title:"Providing Best Courses",
        //     subtitle:"We provice courses that helps our student in learning and in placements",
        //     clink:"#",
        //     slink:"#"
        // },
        // {
        //     title:"Providing Best Courses",
        //     subtitle:"We provice courses that helps our student in learning and in placements",
        //     clink:"#",
        //     slink:"#"
        // },
        // {
        //     title:"Providing Best Courses",
        //     subtitle:"We provice courses that helps our student in learning and in placements",
        //     clink:"#",
        //     slink:"#"
        // },
        

        // )
//         slider.create([
//             {
//                 title:"Learn",
//                 subtitle:"HTML CSS JAVASCRIPT",
//                 url:"/static/images/coding1.jpg",
//                 class:"active"
//             },
//             {
//                 title:"Consistent",
//                 subtitle:"Keep learning skills",
//                 url:"/static/images/coding2.jpg",
//                 class:""
//             },
//             {
//                 title:"Focus",
//                 subtitle:"Don't do multitasking in life",
//                 url:"/static/images/coding3.jpg",
//                 class:""
//             }
// ])
        // // Detail.create({
        //     brandName:"Sudharsan Website",
        //     brandIconUrl:"static/images/sample.jpg",
        //     links:[{
        //         label:"Home",
        //         url:"/"
        //     },
        //     {
        //         label:"Services",
        //         url:"/services"
        //     },
        //     {
        //         label:"Gallery",
        //         url:"/gallery"
        //     },
        //     {
        //         label:"About",
        //         url:"/about"
        //     },
        //     {
        //         label:"Contact us",
        //         url:"/contact-us"
        //     }
        // ]
        // })
    })


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started at http://localhost:5556")
})
