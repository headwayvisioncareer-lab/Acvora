import React from "react";

export default function ApplicationSteps() {
  const steps = [
    "Start Loan Finder",
    "Check Eligibility",
    "Upload Documents",
    "Verification",
    "Disbursal"
  ];

  return (
    <section className="px-6 py-10 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Application Steps</h3>
      <div className="flex flex-col md:flex-row justify-between">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center flex-1 px-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-2">
              {i + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
