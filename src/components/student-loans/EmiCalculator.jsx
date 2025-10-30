import React, { useState } from "react";

export default function EmiCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 12 / 100; // monthly interest rate
    const N = parseFloat(tenure) * 12; // tenure in months

    if (!P || !R || !N) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const emiMonthly = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emiMonthly * N;
    const totalInterest = totalPayment - P;

    setEmi({
      monthly: emiMonthly.toFixed(0),
      total: totalPayment.toFixed(0),
      interest: totalInterest.toFixed(0),
    });
  };

  return (
    <section className="px-6 py-10 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto mt-4 mb-4">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">EMI Calculator</h3>

      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Loan Amount"
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter the total loan amount you want to borrow.
          </p>
        </div>

        <div>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Interest Rate (%)"
          />
          <p className="mt-1 text-sm text-gray-500">
            Annual interest rate offered by the bank.
          </p>
        </div>

        <div>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Tenure (years)"
          />
          <p className="mt-1 text-sm text-gray-500">
            Loan duration in years.
          </p>
        </div>

        <button
          onClick={calculateEMI}
          className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 w-full md:w-auto h-12 px-6 mt-2 rounded transition duration-300"
        >
          Calculate
        </button>
      </div>

      {emi && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-inner border border-gray-200">
          <p className="text-gray-700 mb-2">
            <strong>Monthly EMI:</strong> ₹{emi.monthly}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Total Payment:</strong> ₹{emi.total}
          </p>
          <p className="text-gray-700">
            <strong>Total Interest:</strong> ₹{emi.interest}
          </p>
        </div>
      )}
    </section>
  );
}
