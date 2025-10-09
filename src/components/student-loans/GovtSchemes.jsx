import React from "react";

export default function GovtSchemes() {
  const schemes = [
    "Padho Pardesh",
    "Central Sector Interest Subsidy (CSIS)",
    "State Subsidy Programs"
  ];

  return (
    <section className="px-6 py-10">
      <h3 className="text-2xl font-bold mb-6">Government Schemes</h3>
      <ul className="space-y-3">
        {schemes.map((s, i) => (
          <li key={i} className="p-3 bg-gray-100 rounded">{s}</li>
        ))}
      </ul>
    </section>
  );
}
