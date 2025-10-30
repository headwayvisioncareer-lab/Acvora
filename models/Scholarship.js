import mongoose from "mongoose";

const ScholarshipSchema = new mongoose.Schema({
  // universityId: { type: String, required: true },
  name: { type: String, required: true },
  provider: { type: String, required: true },
  category: String,
  income: String,
  educationLevel: String,
  benefits: String,
  deadline: String,
  status: String,
  description: String,
  eligibility: String,
  type: String,
  region: String,
  generalQuota: String,
  tags: [String],
}, { timestamps: true });

export default mongoose.model("Scholarship", ScholarshipSchema);