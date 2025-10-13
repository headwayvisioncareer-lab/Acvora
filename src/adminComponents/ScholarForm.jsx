import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";


export default function ScholarForm() {
  // const { } = useParams(); // University ID from route
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    // universityId: "", // Add universityId to state
    name: "",
    provider: "",
    category: "",
    income: "",
    educationLevel: "",
    benefits: "",
    deadline: "",
    status: "",
    description: "",
    eligibility: "",
    type: "",
    region: "",
    generalQuota: "", // Added for consistency
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  // Validate before sending
  const validate = () => {
    if (!formData.name.trim()) return "Scholarship name is required";
    if (!formData.provider.trim()) return "Provider is required";
    return null;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) return setError(validationError);

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      // Auto-generate tags
      const tags = [];
      if (formData.category) tags.push(formData.category);
      if (formData.income) tags.push(`≤${formData.income} income`);
      if (formData.educationLevel) tags.push(formData.educationLevel);

      const payload = { ...formData, tags };

      // ✅ Correct API endpoint that matches your backend
      const res = await axios.post(`${API}/api/scholarships`, payload, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      alert(res.data.message || "✅ Scholarship added successfully!");

      // Reset form
      setFormData({
        // universityId: "",
        name: "",
        provider: "",
        category: "",
        income: "",
        educationLevel: "",
        benefits: "",
        deadline: "",
        status: "",
        description: "",
        eligibility: "",
        type: "",
        region: "",
        generalQuota: "",
      });

      // Optional redirect
      // navigate(`/universities/${id}/scholarships`);
    } catch (err) {
      console.error("Axios error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to save scholarship"
      );
    } finally {
      setLoading(false);
    }
  };

  // Dropdown Options
  const categories = ["SC", "ST", "OBC", "General", "Minority"];
  const incomes = ["<1.5L", "3L", "5L", "7L"];
  const levels = ["10th Pass", "12th Pass", "UG", "PG", "UG/PG", "PhD"];
  const benefits = ["₹50,000 / year", "₹35,000 / year", "₹20,000 / year"];
  const statuses = ["Open", "Upcoming", "Closed"];
  const types = ["Merit", "Need", "Government", "Private"];
  const regions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const quotas = ["Yes", "No"];

  return (
    <div className=" bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full  bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Add Scholarship
        </h1>
        <p className="text-gray-500 mb-4">
          <span className="font-mono text-blue-600"></span>
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded">
            {error}
          </div>
        )}

        {/* University ID Input */}
        {/* <div className="md:col-span-3 flex flex-col">
          <label className="text-left font-medium text-gray-900 mb-1">
            University ID
          </label>
          <input
            name="universityId"
            value={formData.universityId}
            onChange={handleChange}
            placeholder="Enter the University ID this scholarship belongs to"
            required
            className="border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div> */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Scholarship Name */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Scholarship Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* Provider */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Provider
            </label>
            <input
              name="provider"
              value={formData.provider}
              onChange={handleChange}
              required
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>
          {/* {Scholarship Type} */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Scholarship Type{" "}
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {types.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          {/* Category */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {categories.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* {Quotas} */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              General Quota
            </label>
            <select
              name="generalQuota"
              value={formData.generalQuota}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {quotas.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          {/* {Region/State} */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              State/Region
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {regions.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Income */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Family Income Limit
            </label>
            <select
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {incomes.map((i, idx) => (
                <option key={idx} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Education Level */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Education Level
            </label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {levels.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          {/* Benefits */}
          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Benefits
            </label>
            <select
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {benefits.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          {/* {Deadline} */}

          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="border border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* {Statuses} */}

          <div className="flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border  border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select</option>
              {statuses.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <br />
          {/* {Descrptions} */}
          <div className="md:col-span-3 flex flex-col">
            <label className="text-left font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide the detailed description..."
              rows="4"
              className="border border-gray-400 rounded-lg px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-yellow-500 hover:border-yellow-500 transition"
            ></textarea>
          </div>

          <br />
          {/* Eligibility */}
          <div className="md:col-span-3 flex flex-col">
            <label className="text-left font-medium text-gray-900 mb-1">
              Eligibility
            </label>
            <textarea
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              placeholder="Enter eligibility criteria (e.g., age limit, qualifications, etc.)"
              rows="4"
              className="border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-yellow-500 hover:border-yellow-500 outline-none resize-none transition w-full"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition disabled:opacity-60"
            >
              {loading ? "Saving..." : "Add Scholarship"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
