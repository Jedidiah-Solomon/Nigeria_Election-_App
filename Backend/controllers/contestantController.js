const Contestant = require("../models/contestantModel");

// Create a new contestant
exports.createContestant = async (req, res) => {
  try {
    const contestant = new Contestant(req.body);
    await contestant.save();
    res.status(201).json(contestant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contestants
exports.getContestants = async (req, res) => {
  try {
    const contestants = await Contestant.find();
    res.status(200).json(contestants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get candidate statistics
exports.getCandidateStatistics = async (req, res) => {
  try {
    const totalCount = await Contestant.countDocuments();
    const presidentialCount = await Contestant.countDocuments({
      position: "President",
    });
    const governorshipCount = await Contestant.countDocuments({
      position: "Governor",
    });

    res.status(200).json({
      totalCount,
      presidentialCount,
      governorshipCount,
    });
  } catch (error) {
    console.error("Error fetching candidate statistics:", error.message);
    res.status(500).json({
      message: "Server error occurred while fetching candidate statistics",
    });
  }
};

// Get the count of contestants
exports.getContestantCount = async (req, res) => {
  try {
    const count = await Contestant.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a candidate by ID
exports.updateContestant = async (req, res) => {
  try {
    const contestant = await Contestant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contestant) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.status(200).json(contestant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a contestant by ID
exports.getContestantById = async (req, res) => {
  try {
    const contestant = await Contestant.findById(req.params.id);

    if (!contestant) {
      return res.status(404).json({ message: "Contestant not found" });
    }

    res.status(200).json(contestant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a candidate by ID
exports.deleteContestant = async (req, res) => {
  try {
    const contestant = await Contestant.findByIdAndDelete(req.params.id);

    if (!contestant) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.status(200).json({ message: "Candidate deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search contestants by query parameters
exports.searchContestant = async (req, res) => {
  try {
    const { firstName, lastName, party, position } = req.query;

    // Build query object dynamically
    const query = {};
    if (firstName) query.firstName = firstName;
    if (lastName) query.lastName = lastName;
    if (party) query.party = party;
    if (position) query.position = position;

    console.log("Query Object:", query);

    // Perform the search
    const contestant = await Contestant.findOne(query).exec();

    if (!contestant) {
      return res.status(404).json({ message: "Contestant not found" });
    }

    res.status(200).json(contestant);
  } catch (error) {
    console.error("Error searching for contestant:", error.message);
    res.status(500).json({
      message: "Server error occurred while searching for contestant",
    });
  }
};
