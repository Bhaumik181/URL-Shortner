const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    ShortId:{
        type: String,
        require: true,
        unique: true,
    },
    RedirectUrl:{
        type: String,
        require: true,
    },
    VisitHistory: [{timestamp:{type:Number}}],
},
{timestamps:true}
);

const URL = mongoose.model('url', UrlSchema);

module.exports = URL;