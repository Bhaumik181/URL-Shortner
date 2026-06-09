const express = require("express")
require("dotenv").config();
const URL = require("./models/url");

const app = express();
const port = 8001;

app.use(express.json()); // middleware
const urlRoute = require("./Routes/url");

const{ConnectToMongoDB} = require("./connection");

ConnectToMongoDB(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected")
});
app.use("/url",urlRoute);
app.get('/:ShortID',async (req,res)=>{
    console.log("route hit");
    const ShortID  = req.params.ShortID;
    console.log(ShortID)
    const entry = await URL.findOneAndUpdate({
        ShortID
    }, { $push:{
        visitHistory:{
            timestamp: Date.now(),
        } 
    }}
)
console.log(entry);
res.redirect(entry.redirectUrl);
})
app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`);
})