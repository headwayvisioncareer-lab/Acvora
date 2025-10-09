import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";


const ALL_SCHOLARSHIPS = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "Central Govt",
    tags: ["SC", "≤3L income", "UG"],
    benefits: "₹50,000 / year",
    deadline: "15 Sept (soon)",
    status: "Open",
  },
  {
    id: 2,
    name: "State Post-Matric Scholarship",
    provider: "State Govt",
    tags: ["OBC", "≤5L income", "PG"],
    benefits: "₹35,000 / year",
    deadline: "25 Oct",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Institute Talent Reward Scholarship",
    provider: "ABC Institute",
    tags: ["General", "≤5L income", "UG"],
    benefits: "₹20,000 / year",
    deadline: "10 Oct",
    status: "Open",
  },
  {
    id: 4,
    name: "Private Excellence Scholarship",
    provider: "XYZ Foundation",
    tags: ["Minority", "≤3L income", "UG/PG"],
    benefits: "₹60,000 / year",
    deadline: "30 Nov",
    status: "Upcoming",
  },
    {
    id: 4,
    name: "Private Excellence Scholarship",
    provider: "XYZ Foundation",
    tags: ["Minority", "≤3L income", "UG/PG"],
    benefits: "₹60,000 / year",
    deadline: "30 Nov",
    status: "Upcoming",
  },
    {
    id: 4,
    name: "Private Excellence Scholarship",
    provider: "XYZ Foundation",
    tags: ["Minority", "≤3L income", "UG/PG"],
    benefits: "₹60,000 / year",
    deadline: "30 Nov",
    status: "Upcoming",
  },

];

// -----------------------
// HeroSection
// -----------------------
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-100" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-gray-900 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Find the Perfect Scholarship
        </h1>
        <p className="mt-3 text-blue/90 text-lg">
          Search, filter, and apply for scholarships that match your profile.
        </p>
      </motion.div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -top-28 -right-28 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}

// -----------------------
// SearchBar
// -----------------------
function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  return (
    <div className="bg-gray-100 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-3">
        <div className="text-2xl font-extrabold text-gray-900">🎓 ScholarFind</div>

        <div className="flex-1 w-full">
          <div className="flex items-stretch gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch(q)}
              placeholder="Search scholarship, provider or tags..."
              className="w-full border border-gray-900 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onSearch(q)}
              className="px-4 py-2.5 rounded-xl bg-yellow-500 text-white font-semibold hover:bg-yellow-500 transition"
            >
              Search
            </motion.button>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2.5 rounded-xl bg-yellow-500 text-white font-medium hover:bg-blue/90 transition"
          onClick={() => alert("Open advanced filters drawer (optional)")}
        >
          Filters
        </motion.button>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-3 py-2 rounded-lg border border-gray-900 font-medium hover:bg-yellow-500"
          >
            Login
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-3 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-500"
          >
            Register
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// -----------------------
// SidebarFilterLeft
// -----------------------
function SidebarFilterLeft({ values, onChange }) {
  return (
    <motion.aside
      layout
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full lg:w-64 flex-shrink-0 space-y-4"
    >
      <div className="bg-gray-100 rounded-2xl p-4 border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
        <select
          className="w-full border border-gray-200 rounded-xl px-3 py-2"
          value={values.category}
          onChange={(e) => onChange({ category: e.target.value })}
        >
          <option value="">Any</option>
          <option>SC</option>
          <option>ST</option>
          <option>OBC</option>
          <option>General</option>
        </select>
      </div>

     <div className="bg-gray-100 rounded-2xl p-4 border border-gray-100 shadow-sm">
  <h4 className="font-semibold text-gray-800 mb-2">Family Income</h4>
  <select
    className="w-full border border-gray-200 rounded-xl px-3 py-2"
    value={values.income}
    onChange={(e) => onChange({ income: e.target.value })}
  >
    <option value="">Any</option>
    <option value="1L-3L">1L to 3L</option>
    <option value="4L-5L">4L to 5L</option>
    <option value="6L-7L">6L to 7L</option>
  </select>
</div>


      <div className="bg-gray=100 rounded-2xl p-4 border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-2">Education Level</h4>
        <select
          className="w-full border border-gray-200 rounded-xl px-3 py-2"
          value={values.educationLevel}
          onChange={(e) => onChange({ educationLevel: e.target.value })}
        >
          <option value="">Any</option>
          <option>UG</option>
          <option>PG</option>
          <option>PhD</option>
        </select>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4 border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-2">Scholarship Type</h4>
        <select
          className="w-full border border-gray-200 rounded-xl px-3 py-2"
          value={values.type}
          onChange={(e) => onChange({ type: e.target.value })}
        >
          <option value="">Any</option>
          <option>Merit</option>
          <option>Need</option>
          <option>Government</option>
          <option>Private</option>
        </select>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4 border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-2">State / Region</h4>
        <select
          className="w-full border border-gray-200 rounded-xl px-3 py-2"
          value={values.region}
          onChange={(e) => onChange({ region: e.target.value })}
        >
          <option value="">Any</option>
          <option>Maharashtra</option>
          <option>Karnataka</option>
          <option>Delhi</option>
          <option>Tamil Nadu</option>
        </select>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4 border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-2">General Quota</h4>
        <select
          className="w-full border border-gray-200 rounded-xl px-3 py-2"
          value={values.generalQuota}
          onChange={(e) => onChange({ generalQuota: e.target.value })}
        >
          <option value="">Any</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4 border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-2">Deadline</h4>
        <select
          className="w-full border border-gray-200 rounded-xl px-3 py-2"
          value={values.deadlineState}
          onChange={(e) => onChange({ deadlineState: e.target.value })}
        >
          <option value="">Any</option>
          <option>Open</option>
          <option>Upcoming</option>
          <option>Closed</option>
        </select>
      </div>
    </motion.aside>
  );
}

// -----------------------
// SidebarFilterRight
// -----------------------
function SidebarFilterRight({ values, onChange }) {
  return (
    <motion.aside
      layout
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full lg:w-64 flex-shrink-0 space-y-4"
    >
   

    
    </motion.aside>
  );
}

// -----------------------
// ScholarshipCard
// -----------------------
function ScholarshipCard({ data }) {
  const { name, provider, tags, benefits, deadline, status } = data;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border border-gray-900 bg-gray-100 shadow-md hover:shadow-xl transition-all p-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-900 mt-1">Provider: {provider}</p>
        </div>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            status === "Open"
              ? "bg-green-100 text-green-700"
              : status === "Upcoming"
              ? "bg-amber-100 text-amber-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Benefits & Deadline */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">Benefits</p>
          <p className="text-sm font-semibold text-gray-800">{benefits}</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">Deadline</p>
          <p className="text-sm font-semibold text-gray-800">{deadline}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center gap-3">
        <button className="flex-1 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
          View Details
        </button>
        <Link to="/Applynow" className="flex-1">
          <button className="w-full rounded-xl bg-yellow-500 text-white px-4 py-2 text-sm font-semibold hover:bg-yellow-500 transition">
            Apply Now
          </button>
        </Link>
        <button className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-100 transition">
          Download
        </button>
      </div>
    </motion.div>
  );
}


// -----------------------
// Scholar (main export)
// -----------------------
export default function Scholar() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    income: "",
    educationLevel: "",
    type: "",
    region: "",
    generalQuota: "",
    deadlineState: "",
  });

  const filtered = useMemo(() => {
    return ALL_SCHOLARSHIPS.filter((s) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        s.name.toLowerCase().includes(q) ||
        s.provider.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q));

      const byCategory =
        !filters.category || s.tags.map((t) => t.toLowerCase()).includes(filters.category.toLowerCase()); 

      const byDeadline =
        !filters.deadlineState || s.status.toLowerCase() === filters.deadlineState.toLowerCase();

      return matchesQuery && byCategory && byDeadline;
    });
  }, [query, filters]);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Row 1 */}
      <HeroSection />

      {/* Row 2 */}
      <SearchBar onSearch={setQuery} />

      {/* Row 3 */}
      <div className="flex flex-col lg:flex-row p-6 gap-6">
        <SidebarFilterLeft values={filters} onChange={(next) => setFilters((p) => ({ ...p, ...next }))} />

    <motion.div layout className="flex-[4] bg-gray-100 p-10 rounded-2xl shadow-lg border border-gray-200">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold">Available Scholarships</h2>
    <span className="text-sm text-gray-500">{filtered.length} results</span>
  </div>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
    {filtered.map((s) => (
      <ScholarshipCard key={s.id} data={s} />
    ))}
  </div>
</motion.div>


      </div>
    </div>
    <Footer />
    </>
  );
}
