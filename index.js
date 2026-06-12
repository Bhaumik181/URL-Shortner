const express = require("express")
const path = require('path');
require("dotenv").config();
const URL = require("./models/url");

const app = express();
const port = 8001;

app.use(express.json()); // middleware
app.use(express.urlencoded({extended: false}));
const urlRoute = require("./Routes/url");

const{ConnectToMongoDB} = require("./connection");

const staticRoute = require("./Routes/StaticRouter");
app.set("view engine","ejs");
app.set('views',path.resolve("./views"))
ConnectToMongoDB(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected")
});
// app.use("/test",async (req,res)=>{
//     const AllUrls = await URL.find({});
//     return res.render("home",{
//         urls: AllUrls,
//     });
// })
app.use("/url",urlRoute);
app.use("/",staticRoute);
app.get('/url/:ShortID',async (req,res)=>{
    console.log("route hit");
    const ShortID  = req.params.ShortID;
    console.log("ShortID =", ShortID);
    const entry = await URL.findOneAndUpdate({
        ShortID
    }, { $push:{
        visitHistory:{
            timestamp: Date.now(),
        } 
    }}
)
res.redirect(entry.redirectUrl);
})
app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`);
})


