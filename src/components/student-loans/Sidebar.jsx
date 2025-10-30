import React from "react";

export default function Sidebar() {
  return (
    <aside className="fixed right-0 top-20 w-64 bg-white shadow-lg p-4 hidden lg:block">
      <h4 className="text-lg font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-600">Saved Loans</a></li>
        <li><a href="#" className="text-blue-600">Reminders</a></li>
        <li><a href="#" className="text-blue-600">Scholarships</a></li>
      </ul>
    </aside>
  );
}
