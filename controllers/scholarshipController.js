import Scholarship from "../models/Scholarship.js";

// @desc    Create a scholarship
// @route   POST /api/scholarships
export const createScholarship = async (req, res) => {
  try {
    const newScholarship = new Scholarship(req.body); // universityId should be in the body
    await newScholarship.save();
    res.status(201).json({
      message: "Scholarship added successfully",
      data: newScholarship,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// @desc    Get all scholarships for a specific university
// @route   GET /api/universities/:id/scholarships
export const getScholarshipsByUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const scholarships = await Scholarship.find({ universityId: id });
    res.status(200).json(scholarships);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Get all scholarships from all universities
// @route   GET /api/scholarships
export const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find({});
    res.status(200).json(scholarships);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
