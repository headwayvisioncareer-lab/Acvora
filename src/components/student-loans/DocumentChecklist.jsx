import React from "react";

export default function DocumentChecklist() {
  const docs = [
    "Identity Proof (Aadhar, Passport)",
    "Academic Records",
    "Financial Statements",
    "Collateral Documents"
  ];

  return (
    <section className="px-6 py-10">
      <h3 className="text-2xl font-bold mb-6">Document Checklist</h3>
      <ul className="list-disc pl-6 space-y-2">
        {docs.map((doc, i) => (
          <li key={i}>{doc}</li>
        ))}
      </ul>
      <div className="mt-4 space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Download PDF</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Upload Docs</button>
      </div>
    </section>
  );
}
