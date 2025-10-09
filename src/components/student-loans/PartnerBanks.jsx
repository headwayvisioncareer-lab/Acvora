import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PartnerBanks() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    axios.get("/api/banks").then(res => setBanks(res.data));
  }, []);

  return (
    <section className="px-6 py-10 bg-gray-100">
      <h3 className="text-2xl font-bold mb-6">Our Partner Banks</h3>
      <div className="flex flex-wrap gap-6 items-center">
        {banks.map(b => (
          <div key={b.id} className="flex flex-col items-center">
            <img src={b.logo} alt={b.name} className="h-12" />
            <p className="mt-2 text-sm">{b.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
