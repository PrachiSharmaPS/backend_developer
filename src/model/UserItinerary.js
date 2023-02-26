const mongoose = require('mongoose');

const userItinerarySchema = new mongoose.Schema({
  email: { 
    type: String,
     required: true
     },
  password: {
     type: String,
      required: true 
    },
  destination: { 
    type: String,
     required: true
     },
  startDate: {
     type: Date, 
     required: true
     },
  endDate: { 
    type: Date, 
    required: true 
  },
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
  accommodations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' }]
});

const UserItinerary = mongoose.model('UserItinerary', userItinerarySchema);

module.exports = UserItinerary;