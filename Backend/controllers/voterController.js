const Voter = require("../models/voterModel");

// Create a new voter
exports.createVoter = async (req, res) => {
  try {
    const voter = new Voter(req.body);
    await voter.save();
    console.log(req.body);
    res.status(201).json(voter);
  } catch (error) {
    console.log("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

// Get all voters
exports.getVoters = async (req, res) => {
  try {
    const voters = await Voter.find();
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get the count of voters
exports.getVoterCount = async (req, res) => {
  try {
    const count = await Voter.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a voter
exports.updateVoter = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const options = { new: true, runValidators: true };
    const voter = await Voter.findByIdAndUpdate(id, updates, options);

    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }

    res.status(200).json(voter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a voter by ID
exports.getVoterById = async (req, res) => {
  try {
    const { id } = req.params;
    const voter = await Voter.findById(id);
    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a voter
exports.deleteVoter = async (req, res) => {
  try {
    const { id } = req.params;
    const voter = await Voter.findByIdAndDelete(id);

    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }

    res.status(200).json({ message: "Voter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search voters by query parameters
exports.searchVoter = async (req, res) => {
  try {
    const { firstName, email, NIN } = req.query;

    // Build query object dynamically
    const query = {};
    if (firstName) query.firstName = firstName;
    if (email) query.email = email;
    if (NIN) query.NIN = NIN;

    console.log("Query Object:", query);

    // Perform the search
    const voter = await Voter.findOne(query).exec();

    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }

    res.status(200).json(voter);
  } catch (error) {
    console.error("Error searching for voter:", error.message); // Improved logging
    res
      .status(500)
      .json({ message: "Server error occurred while searching for voter" });
  }
};

// Search voters by query parameters - NIN
exports.searchVoterByNin = async (req, res) => {
  try {
    const { firstName, lastName, NIN } = req.query;

    const query = {};
    if (firstName) query.firstName = firstName;
    if (lastName) query.lastName = lastName;
    if (NIN) query.NIN = NIN;

    console.log("Query Object:", query);

    const voter = await Voter.findOne(query).exec();

    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }

    res.status(200).json(voter);
  } catch (error) {
    console.error("Error searching for voter:", error.message);
    res
      .status(500)
      .json({ message: "Server error occurred while searching for voter" });
  }
};
