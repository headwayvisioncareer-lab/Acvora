// src/pages/MyProfile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  const studentId = localStorage.getItem("studentId"); // Get logged-in user's ID

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5005/api/profile/${studentId}`);
        setStudent(data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching student profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const { data } = await axios.put(`http://localhost:5005/api/profile/${studentId}`, formData);
      setStudent(data);
      setEditMode(false);
      alert("Profile updated successfully ✅");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile ❌");
    }
  };

  if (loading) return <p className="text-center text-white">Loading profile...</p>;
  if (!student) return <p className="text-center text-red-500">No profile found.</p>;

  return (
    <div className="min-h-screen bg-[#1f2230] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-[#2b2f3a] border border-white/10 text-white rounded-xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        {editMode ? (
          <div className="space-y-3">
            <input type="text" name="name" value={formData.name || ""} onChange={handleChange} placeholder="Name" className="w-full p-2 rounded bg-[#1f2230] border border-gray-600" />
            <input type="email" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Email" className="w-full p-2 rounded bg-[#1f2230] border border-gray-600" />
            <input type="text" name="phone" value={formData.phone || ""} onChange={handleChange} placeholder="Phone" className="w-full p-2 rounded bg-[#1f2230] border border-gray-600" />
            <input type="text" name="address" value={formData.address || ""} onChange={handleChange} placeholder="Address" className="w-full p-2 rounded bg-[#1f2230] border border-gray-600" />
            <input type="text" name="pincode" value={formData.pincode || ""} onChange={handleChange} placeholder="Pincode" className="w-full p-2 rounded bg-[#1f2230] border border-gray-600" />
            <button onClick={handleSave} className="bg-green-500 px-4 py-2 rounded text-white font-semibold">Save</button>
            <button onClick={() => setEditMode(false)} className="bg-gray-500 px-4 py-2 rounded text-white font-semibold ml-2">Cancel</button>
          </div>
        ) : (
          <div className="space-y-3">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Pincode:</strong> {student.pincode}</p>

            <button onClick={() => setEditMode(true)} className="bg-yellow-500 px-4 py-2 rounded text-white font-semibold">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
