import React, { useState } from "react";

function ClubRegistration() {
  const [clubName, setClubName] = useState("");
  const [clubAddress, setClubAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "clubName") {
      setClubName(value);
    } else if (id === "clubAddress") {
      setClubAddress(value);
    } else if (id === "contactNumber") {
      setContactNumber(value);
    } else if (id === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Club Name:", clubName);
    console.log("Club Address:", clubAddress);
    console.log("Contact Number:", contactNumber);
    console.log("Email:", email);
  };

  return (
    <div className="w-full  mt-10">
      <form onSubmit={handleSubmit} className="bg-[#1e2833] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-[#cfd1d3] text-sm font-bold mb-2" htmlFor="clubName">
            Club Name
          </label>
          <input
            type="text"
            id="clubName"
            value={clubName}
            onChange={handleInputChange}
            placeholder="Enter club name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1e2833] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#cfd1d3] text-sm font-bold mb-2" htmlFor="clubAddress">
            Club Address
          </label>
          <input
            type="text"
            id="clubAddress"
            value={clubAddress}
            onChange={handleInputChange}
            placeholder="Enter club address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1e2833] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#cfd1d3] text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={handleInputChange}
            placeholder="Enter contact number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1e2833] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#cfd1d3] text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1e2833] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#6eb4ef] hover:bg-[#5a9fd1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register Club
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClubRegistration;
