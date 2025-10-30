import React from "react";

export default function HeroSection() {
  return (
    <section className="text-center py-12 bg-blue-100">
      <h2 className="text-3xl font-bold mb-4">Find the Best Education Loan</h2>
      <p className="mb-6">Compare, calculate, and apply for student loans easily.</p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Start Loan Finder</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Talk to Advisor</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">EMI Calculator</button>
      </div>
    </section>
  );
}
