//This file defines rest API calls

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: 'API works!' //retuns a Javascript object
  })
})

module.exports = router;
 