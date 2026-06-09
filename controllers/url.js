const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "Need a URL"});
    const ShortID = shortid();
    await URL.create({
        shortId: ShortID,
        redirectUrl: body.url,
        visitHistory: [],

    });

    res.json({id: ShortID });

    
}

async function handleGetAnalytics(req,res){
    
}
module.exports = {
        handleGenerateNewShortURL,
};
