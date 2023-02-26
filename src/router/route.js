const express = require("express");
const router = express.Router()
const itinerarycontroller = require('../controller/itineraryController')


router.post("/createItinerary",itinerarycontroller.createItinerary)
router.get("/getItinerary",itinerarycontroller.getItinerary)
router.delete('deleteItinerary',itinerarycontroller.deleteItinerary)
router.put('updateItinerary',itinerarycontroller.updateItinerary)

module.exports = router;