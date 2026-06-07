const express = require("express");
const router = express.router();

const {handleGenerateNewShortURL} = require("../controllers/url");
router.post("/",handleGenerateNewShortURL);

model.exports = router;