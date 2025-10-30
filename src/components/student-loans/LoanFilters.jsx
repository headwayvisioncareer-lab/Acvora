import React, { useState } from "react";

export default function LoanFilters({ onFilter = () => {} }) {
  const [filters, setFilters] = useState({
    studyType: "",
    courseLevel: "",
    country: "",
    instituteType: "",
    amount: "",
    collateral: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      studyType: "",
      courseLevel: "",
      country: "",
      instituteType: "",
      amount: "",
      collateral: "",
    });
    onFilter({});
  };

  return (
    <section
      id="loan-finder"
      className="w-full bg-gradient-to-r from-cyan-50 to-white px-6 py-16"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-3xl font-bold mb-8 text-center text-cyan-700">
          🎯 Loan Finder
        </h3>
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Study Type */}
          <select
            name="studyType"
            value={filters.studyType}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
          >
            <option value="">Select Study Type</option>
            <option value="domestic">Domestic</option>
            <option value="abroad">Abroad</option>
          </select>

          {/* Course Level */}
          <select
            name="courseLevel"
            value={filters.courseLevel}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
          >
            <option value="">Select Course Level</option>
            <option value="ug">Undergraduate</option>
            <option value="pg">Postgraduate</option>
            <option value="phd">PhD</option>
          </select>

          {/* Country */}
          <select
            name="country"
            value={filters.country}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>

          {/* Institute Type */}
          <select
            name="instituteType"
            value={filters.instituteType}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
          >
            <option value="">Institute Type</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>

          {/* Amount */}
          <input
            type="number"
            name="amount"
            value={filters.amount}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
            placeholder="Loan Amount"
          />

          {/* Collateral */}
          <select
            name="collateral"
            value={filters.collateral}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
          >
            <option value="">Collateral</option>
            <option value="required">Required</option>
            <option value="not_required">Not Required</option>
          </select>

          {/* Buttons */}
          <div className="col-span-full flex justify-center gap-6 mt-4">
            <button
              type="reset"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition"
            >
              Show Results
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
