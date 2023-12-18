const Athlete = require("../models/Athlete");

// GET ALL ATHLETES
exports.getAllAthletes = async (req, res) => {
  try {
    const results = await Athlete.getAllAthletes();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET AN ATHLETE
exports.getAthleteById = async (req, res) => {
  const athleteId = req.params.id;
  try {
    const results = await Athlete.getAthleteById(athleteId);
    res.json(results[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ADD NEW ATHLETE
exports.addAthlete = async (req, res) => {
  const newAthlete = req.body;
  try {
    const result = await Athlete.addAthlete(newAthlete);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// UPDATE BY AN ATHLETE ID
exports.updateAthlete = async (req, res) => {
  const athleteId = req.params.id;
  const updatedAthlete = req.body;
  try {
    const result = await Athlete.updateAthlete(athleteId, updatedAthlete);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE BY ATHLETE ID
exports.deleteAthlete = async (req, res) => {
  const athleteId = req.params.id;
  try {
    const result = await Athlete.deleteAthlete(athleteId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
