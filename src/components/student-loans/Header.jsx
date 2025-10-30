import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // using lucide-react icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-cyan-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">EduLoans</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/" className="hover:text-yellow-200 transition">
            Home
          </a>
          <a href="/education-loan" className="hover:text-yellow-200 transition">
            Education Loans
          </a>
          <a href="/scholarships" className="hover:text-yellow-200 transition">
            Scholarships
          </a>
          <a href="/courses" className="hover:text-yellow-200 transition">
            Courses
          </a>
          <a href="/contact" className="hover:text-yellow-200 transition">
            Contact
          </a>
        </nav>

        {/* CTA / Login */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-white text-cyan-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Login / Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyan-700 px-6 py-4 space-y-3 text-sm font-medium">
          <a href="/" className="block hover:text-yellow-200">
            Home
          </a>
          <a href="/education-loan" className="block hover:text-yellow-200">
            Education Loans
          </a>
          <a href="/scholarships" className="block hover:text-yellow-200">
            Scholarships
          </a>
          <a href="/courses" className="block hover:text-yellow-200">
            Courses
          </a>
          <a href="/contact" className="block hover:text-yellow-200">
            Contact
          </a>
          <a
            href="#"
            className="block bg-white text-cyan-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition mt-3"
          >
            Login / Sign Up
          </a>
        </div>
      )}
    </header>
  );
}
