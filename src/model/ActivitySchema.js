const mongoose = require('mongoose');

const activityAccommodationSchema = new mongoose.Schema({
  name: {
     type: String,
      required: true
     },
  description: {
     type: String,
      required: true 
    },
  cost: { 
    type: Number,
     required: true 
    }
});

const ActivityAccommodation = mongoose.model('ActivityAccommodation', activityAccommodationSchema);

module.exports = ActivityAccommodation;