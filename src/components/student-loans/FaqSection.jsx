import React, { useState } from "react";

export default function FaqSection() {
  const faqs = [
    { q: "What is the max loan amount?", a: "It depends on the bank and your eligibility, usually up to ₹20–25 Lakhs." },
    { q: "Is collateral mandatory?", a: "Not always. Some banks offer collateral-free loans up to ₹7.5 Lakhs." },
    { q: "What is moratorium period?", a: "It’s a grace period during study + 6–12 months after completion before EMI starts." },
    { q: "Can I prepay my loan?", a: "Yes, most banks allow partial or full prepayment without penalties." } // New FAQ
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-8 py-10 bg-gray-50 rounded-lg shadow-md max-w-5xl mx-auto mt-6 mb-2">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-4 py-3 bg-cyan-50 hover:bg-cyan-100 flex justify-between items-center font-semibold text-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>{faq.q}</span>
              <span className="text-cyan-600">{openIndex === i ? "−" : "+"}</span>
            </button>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 py-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
