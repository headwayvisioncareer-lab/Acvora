import React, { useState, useRef, useEffect } from "react";
import Header from "../components/student-loans/Header";
import LoanFilters from "../components/student-loans/LoanFilters";
import EligibilityChecker from "../components/student-loans/EligibilityChecker";
import EmiCalculator from "../components/student-loans/EmiCalculator";
import FaqSection from "../components/student-loans/FaqSection"; 

export default function EducationLoanPage() {
  const [showFinder, setShowFinder] = useState(false);
  const finderRef = useRef(null);

  const handleFilter = (filters) => {
    console.log("Selected filters:", filters);
    // 🔗 You can add an API call here to fetch loan results
  };

  // Smooth scroll when Loan Finder is shown
  useEffect(() => {
    if (showFinder && finderRef.current) {
      finderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showFinder]);

  return (
    <div className="font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education Loan Made Easy
            </h1>
            <p className="mb-6 text-lg">
              Get financial assistance to pursue your dreams. Compare schemes,
              check eligibility, and apply online from partner banks.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowFinder(true)}
                className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold shadow"
              >
                Start Loan Finder
              </button>
              <button className="bg-white text-cyan-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow">
                Talk To Advisor
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/portrait-happy-excited-student_1258-77777.jpg"
              alt="Student"
              className="rounded-2xl shadow-lg max-h-96"
            />
          </div>
        </div>
      </section>

      {/* Loan Finder */}
      {showFinder && (
        <div ref={finderRef}>
          <LoanFilters onFilter={handleFilter} />
        </div>
      )}

      {/* Loan Information */}
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Loan Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
              <p>
                Indian nationals with confirmed admission in recognized
                institutions in India or abroad. A co-applicant (parent/guardian)
                may be required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Loan Features</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Loan amount: ₹50,000 – ₹40 Lakhs</li>
                <li>Flexible repayment up to 15 years</li>
                <li>Moratorium: Course period + 1 year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
       
        {/* Eligibilitychecker*/}
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Education Loan Tools
      </h2>

      {/* 1 column on mobile, 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EligibilityChecker />
        <EmiCalculator />
      </div>
    </section>
      {/* Loan Schemes */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Loan Schemes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cyan-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                Vidya Lakshmi Scheme
              </h3>
              <p>
                Govt. of India scheme connecting students with multiple banks
                through a single application portal.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                Padho Pardesh Scheme
              </h3>
              <p>
                Interest subsidy for overseas studies for students from minority
                communities.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                State Bank Scholar Loan
              </h3>
              <p>
                Special loans for students of premier institutions like IIT, IIM
                with concessional interest rates.
              </p>
            </div>
          </div>
        </div>
      </section>
     
      {/* Emi calculator */}
      <EmiCalculator />

      {/* Partner Banks */}
      <section className="bg-gray-50 px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Partner Banks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img
              src="/sbi.png"
              alt="SBI"
              className="h-16 mx-auto"
            />
            <img
              src="/hdfc.png"
              alt="HDFC"
              className="h-16 mx-auto"
            />
            <img
              src="/icici.png"
              alt="ICICI"
              className="h-16 mx-auto"
            />
            <img
              src="/axis.png"
              alt="Axis Bank"
              className="h-16 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply for Education Loan
          </h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Full Name" className="border p-3 rounded-lg" />
            <input type="email" placeholder="Email" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Phone Number" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Institution Name" className="border p-3 rounded-lg" />
            <input type="number" placeholder="Required Loan Amount" className="border p-3 rounded-lg" />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
      
      {/*FAQ section */}

   <FaqSection />

      {/* Footer */}
      <footer className="bg-cyan-600 text-white py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">Education Loan Portal</h3>
            <p>Helping students achieve their dreams through easy financing.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>All Courses</li>
              <li>Loan Schemes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <p>Email: support@edu-loan.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} Education Loan Portal. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
