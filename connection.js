const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function ConnectToMongoDB(url){
    return mongoose.connect(url);
}

module.exports = {
    ConnectToMongoDB,
}