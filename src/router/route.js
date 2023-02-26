const express = require("express");
const router = express.Router()
const itinerarycontroller = require('../controller/itineraryController')

router.post("/student",itinerarycontroller.createItinerary)
router.get("/student",itinerarycontroller.getItinerary)
router.delete('/student/:studentId',itinerarycontroller.deleteItinerary)

module.exports = router;