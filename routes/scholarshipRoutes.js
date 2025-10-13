import express from "express";
import {
  createScholarship,
  getScholarshipsByUniversity,
  getAllScholarships,
} from "../controllers/scholarshipController.js";

const router = express.Router();

router.post("/scholarships", createScholarship);
router.get("/universities/:id/scholarships", getScholarshipsByUniversity);
router.get("/scholarships", getAllScholarships);

export default router;
