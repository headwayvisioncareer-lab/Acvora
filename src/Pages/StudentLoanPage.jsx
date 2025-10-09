import React from "react";
import Header from "../components/student-loans/Header";
import HeroSection from "../components/student-loans/HeroSection";
import LoanFilters from "../components/student-loans/LoanFilters";
import LoanResults from "../components/student-loans/LoanResults";
import EligibilityChecker from "../components/student-loans/EligibilityChecker";
import EmiCalculator from "../components/student-loans/EmiCalculator";
import PartnerBanks from "../components/student-loans/PartnerBanks";
import DocumentChecklist from "../components/student-loans/DocumentChecklist";
import ApplicationSteps from "../components/student-loans/ApplicationSteps";
import GovtSchemes from "../components/student-loans/GovtSchemes";
import FaqSection from "../components/student-loans/FaqSection";
import Sidebar from "../components/student-loans/Sidebar";
import Footer from "../components/student-loans/Footer";
import { useState } from "react";

export default function StudentLoanPage() {
    const [filters, setFilters] = useState({});

  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <LoanFilters onFilter={setFilters} />
      <LoanResults filters={filters} />

      <EligibilityChecker />
      <EmiCalculator />
      <PartnerBanks />
      <DocumentChecklist />
      <ApplicationSteps />
      <GovtSchemes />
      <FaqSection />
      <Sidebar />
      <Footer />
    </div>
  );
}
