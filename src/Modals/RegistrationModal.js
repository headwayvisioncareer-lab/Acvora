import React, { useState, useEffect } from "react";
import logo1 from "../Images/reglogo.mp4";
import { CgProfile } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import regpic from "../Images/regpic.webp";
import svg1 from "../Images/scholarship.svg";
import svg2 from "../Images/education.svg";
import svg3 from "../Images/shortlist.svg";
import svg4 from "../Images/admission.svg";
import svg5 from "../Images/codind.svg";
import svg6 from "../Images/book.svg";
import Axios from "axios";

function sendData() {
  const mobile = document.getElementById("mobileNumber").value;
  const location = document.getElementById("location").value;
  const name = document.getElementById("name").value;

  Axios.post("http://localhost:5000/register", {
    mobile,
    name,
    location,
  })
    .then((resp) => console.log(resp.data))
    .catch((err) => console.log(err));
}

const RegistrationModal = ({ closeModal }) => {
  const [records, setRecords] = useState([]);
  const [user, setUser] = useState({
    name: "",
    mobileNumber: "",
    location: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
    const newRecord = { ...user, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setUser({ name: "", mobileNumber: "", location: "" });
    closeModal(false);
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999] p-2 md:p-6">
      <div className="bg-white w-full max-w-5xl md:h-[39rem] rounded-lg shadow-lg relative flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => closeModal(false)}
          className="absolute top-3 right-4 text-black border-2 border-yellow-600 rounded-full px-2 font-bold z-10"
        >
          X
        </button>

        {/* Left Section */}
        <div className="md:w-[42%] w-full bg-gray-100 p-4 flex-shrink-0">
          <h2 className="font-semibold text-black font-serif mt-3 text-center md:text-left">
            How{" "}
            <span className="text-lg text-yellow-500 font-serif">
              FindMyCollege
            </span>{" "}
            Helps You In Admission
          </h2>

          <div className="my-4 grid grid-cols-2 gap-3 place-items-center">
            {[svg1, svg4, svg2, svg3, svg4, svg5, svg3, svg6].map((icon, i) => (
              <div
                key={i}
                className="w-[7rem] sm:w-[8rem] h-[6.5rem] sm:h-[7rem] border-2 bg-white flex flex-col justify-center items-center p-2 text-sm text-black"
              >
                <img src={icon} alt="icon" className="w-10 sm:w-12 md:w-14" />
                <p className="mt-1 capitalize">
                  {
                    [
                      "education",
                      "deadline",
                      "scholarship",
                      "24/7 counselling",
                      "deadline",
                      "admission",
                      "24/7 counselling",
                      "shortlist",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[58%] w-full mx-auto px-4 py-6 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <video
              className="border-4 border-t-yellow-500 p-2.5 rounded-full w-16 sm:w-20"
              autoPlay
              loop
              muted
            >
              <source src={logo1} type="video/mp4" />
            </video>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-serif text-black font-bold tracking-wider">
                <span className="text-2xl text-yellow-500 font-serif">
                  Register
                </span>{" "}
                Now
              </h2>
              <p className="text-black text-sm sm:text-base">
                Get Details & Latest Updates
              </p>
            </div>
          </div>

          <hr className="w-3/4 my-2" />

          <div className="flex justify-center mt-3">
            <img
              src={regpic}
              alt="register"
              className="w-52 sm:w-64 md:w-72 object-cover"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center mt-4 space-y-3"
          >
            {/* Name */}
            <div className="flex items-center space-x-2 w-[90%] max-w-xs">
              <div className="border-2 border-b-[#777771] border-r-0 rounded-l-lg p-1.5">
                <CgProfile size="24" className="opacity-40" />
              </div>
              <input
                name="name"
                id="name"
                value={user.name}
                onChange={handleInput}
                placeholder="Full Name"
                className="flex-1 border-2 border-b-[#777771] p-2 rounded-r-lg text-sm bg-transparent outline-none placeholder:font-serif"
                required
              />
            </div>

            {/* Mobile */}
            <div className="flex items-center space-x-2 w-[90%] max-w-xs">
              <div className="border-2 border-b-[#777771] border-r-0 rounded-l-lg p-1.5">
                <BsTelephone size="22" className="opacity-40" />
              </div>
              <input
                name="mobileNumber"
                id="mobileNumber"
                value={user.mobileNumber}
                onChange={handleInput}
                placeholder="Mobile No."
                type="tel"
                className="flex-1 border-2 border-b-[#777771] p-2 rounded-r-lg text-sm bg-transparent outline-none placeholder:font-serif"
                required
              />
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 w-[90%] max-w-xs">
              <div className="border-2 border-b-[#777771] border-r-0 rounded-l-lg p-1.5">
                <GrLocation size="22" className="opacity-40" />
              </div>
              <input
                name="location"
                id="location"
                value={user.location}
                onChange={handleInput}
                placeholder="Location"
                className="flex-1 border-2 border-b-[#777771] p-2 rounded-r-lg text-sm bg-transparent outline-none placeholder:font-serif"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="p-2 w-[90%] max-w-xs bg-yellow-500 hover:bg-yellow-600 rounded-t-lg border-2 text-center text-white font-semibold drop-shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="font-semibold text-gray-500 text-center mt-4 text-sm sm:text-base">
            Already Registered? Click Here to{" "}
            <a className="text-yellow-500" href="/">
              LOGIN
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationModal;
