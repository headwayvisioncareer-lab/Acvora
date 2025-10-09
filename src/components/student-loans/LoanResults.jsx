import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LoanResults({ filters }) {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get("/api/loans", { params: filters }) // pass filters to backend
      .then((res) => setLoans(res.data))
      .catch((err) => console.error("Error fetching loans", err));
  }, [filters]);

  return (
    <section className="px-6 py-10">
      <h3 className="text-2xl font-bold mb-6 text-blue-700">Available Loans</h3>
      {loans.length === 0 ? (
        <p className="text-gray-500">No loans found. Try adjusting filters.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="p-6 border rounded-xl shadow-md bg-white hover:shadow-lg transition"
            >
              <img
                src={loan.bankLogo}
                alt="Bank"
                className="h-12 mb-4 object-contain"
              />
              <p className="mb-1">
                <strong>Rate:</strong> {loan.rate}%
              </p>
              <p className="mb-1">
                <strong>Amount:</strong> ₹{loan.amount.toLocaleString()}
              </p>
              <p className="mb-1">
                <strong>Tenure:</strong> {loan.tenure} yrs
              </p>
              <p className="mb-3">
                <strong>Collateral:</strong> {loan.collateral}
              </p>
              <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
