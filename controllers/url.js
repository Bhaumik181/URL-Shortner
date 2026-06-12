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
    return res.render('home', {
        id: ShortID 
    })
    
}

async function handleGetAnalytics(req,res){
    const shortID = req.params.shortId;
    const result = await URL.findOne({shortID})
    return res.json({
        TotalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}
module.exports = {
        handleGenerateNewShortURL,
        handleGetAnalytics,
};
