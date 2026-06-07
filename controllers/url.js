const {nanoid} = require("nanoid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.URL) return res.status(400).json({error: "Need a URL"});
    const ShortID = nanoid(8);
    await URL.create({
        shortId: ShortID,
        RedirectUrl: body.URL,
        VisitHistory: [],

    })

    res.json({id: shortId });

    module.exports = {
        handleGenerateNewShortURL,
    }

}