import React, { useState } from "react";

export default function EligibilityChecker() {
  const [courseLevel, setCourseLevel] = useState("");
  const [income, setIncome] = useState("");
  const [collateral, setCollateral] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!courseLevel || !income || !collateral) {
      alert("Please select all fields.");
      return;
    }

    const incomeValue = parseFloat(income);
    let eligibility = "Not eligible for a loan";

    if (incomeValue >= 5) {
      eligibility = "Eligible for up to ₹20 Lakhs";
    } else if (incomeValue < 5) {
      eligibility = "Eligible for up to ₹5 Lakhs";
    }

    setResult(eligibility);
  };

  return (
    <section className="px-6 py-10 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Eligibility Checker</h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <select
            value={courseLevel}
            onChange={(e) => setCourseLevel(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Course Level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phd">PhD</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Choose the level of study you are enrolling in.
          </p>
        </div>

        <div>
          <select
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Annual Income (LPA)</option>
            <option value="2">Below 2 LPA</option>
            <option value="3">2 - 3 LPA</option>
            <option value="4">3 - 4 LPA</option>
            <option value="5">4 - 5 LPA</option>
            <option value="6">5 - 6 LPA</option>
            <option value="10">Above 6 LPA</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Your annual income in LPA; lower income may limit loan eligibility.
          </p>
        </div>

        <div>
          <select
            value={collateral}
            onChange={(e) => setCollateral(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Collateral</option>
            <option value="none">None</option>
            <option value="property">Property</option>
            <option value="fixedDeposit">Fixed Deposit</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Specify if you can provide collateral for higher loan limits.
          </p>
        </div>
      </div>

      <button
        onClick={handleCheck}
        className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded transition duration-300"
      >
        Check Eligibility
      </button>

      {result && (
        <p className="mt-6 font-semibold text-cyan-700 bg-cyan-100 p-4 rounded shadow-inner">
          {result}
        </p>
      )}
    </section>
  );
}
