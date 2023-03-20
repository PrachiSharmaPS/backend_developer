const express = require("express");
const router = express.Router()
const {createRound} = require('../controller/usercontroller')

 
router.post("/createRound", createRound)


module.exports = router;