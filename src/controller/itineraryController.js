const Itinerary = require('../model/UserItinerary');

// Create a new itinerary
const createItinerary = async (req, res) => {
  try {
    // Extract itinerary details from request body
    const { destination, startDate, endDate, activities, accommodations } = req.body;

    // Create a new itinerary document with the extracted details
    const itinerary = new Itinerary({
      destination,
      startDate,
      endDate,
      activities,
      accommodations,
      user: req.user._id // Attach the user ID to the itinerary
    });

    // Save the new itinerary to the database
    await itinerary.save();

    // Send a success response
    res.status(201).json({ message: 'Itinerary created successfully', itinerary });
  } catch (error) {
    // Send an error response if there was an issue creating the itinerary
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const updateItinerary = async (req, res) => {
  try {
    const itineraryId = req.params.id; // Get the ID of the itinerary to update
    const userId = req.user._id; // Get the ID of the authenticated user

    // Find the itinerary to update and make sure the authenticated user owns it
    const itinerary = await Itinerary.findOneAndUpdate(
      { _id: itineraryId, user: userId },
      req.body, // Update the itinerary with the request body
      { new: true } // Return the updated itinerary in the response
    );

    // Send a success response with the updated itinerary
    res.json({ message: 'Itinerary updated successfully', itinerary });
  } catch (error) {
    // Send an error response if there was an issue updating the itinerary
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const deleteItinerary = async (req, res) => {
  try {
    // Extract itinerary ID from request parameters
    const { id } = req.params;

    // Find the itinerary document by ID and ensure the user owns it
    const itinerary = await Itinerary.findOneAndDelete({ _id: id, user: req.user._id });

    // If the itinerary was not found or the user did not own it, send a 404 error response
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    // Send a success response
    res.json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    // Send an error response if there was an issue deleting the itinerary
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getItinerary = async (req, res) => {
  try {
    // Find the itinerary document by ID and user ID
    const itinerary = await Itinerary.findOne({ _id: req.params.id, user: req.user._id });

    // If the itinerary document is not found, send a 404 error response
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    // Send the itinerary document as a response
    res.json(itinerary);
  } catch (error) {
    // Send an error response if there was an issue retrieving the itinerary
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports ={createItinerary,getItinerary,deleteItinerary,updateItinerary}