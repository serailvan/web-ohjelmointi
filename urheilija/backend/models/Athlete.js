const db = require("../config/db");

// Get all athletes
exports.getAllAthletes = async () => {
  return db.query("SELECT * FROM athletes");
};

// Get a single athlete by ID
exports.getAthleteById = async (athleteId) => {
  return db.query("SELECT * FROM athletes WHERE id = ?", [athleteId]);
};

// Add a new athlete
exports.addAthlete = async (newAthlete) => {
  const results = await db.query("INSERT INTO athletes SET ?", newAthlete);
  return { id: results.insertId, ...newAthlete };
};

// Update an athlete by ID
exports.updateAthlete = async (athleteId, updatedAthlete) => {
  await db.query("UPDATE athletes SET ? WHERE id = ?", [
    updatedAthlete,
    athleteId,
  ]);
  return { id: athleteId, ...updatedAthlete };
};

// Delete an athlete by ID
exports.deleteAthlete = async (athleteId) => {
  await db.query("DELETE FROM athletes WHERE id = ?", [athleteId]);
  return { message: "Athlete deleted successfully", id: athleteId };
};
