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
