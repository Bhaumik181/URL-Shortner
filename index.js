const express = require("express")
const app = express();
const port = 8001;

const urlRoute = require("./Routes/url");


app.use("/url",urlRoute);

app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`);
})