import React, { useState } from "react";

function AddTournament() {
  const [tournamentName, setTournamentName] = useState("");

  const handleInputChange = (e) => {
    setTournamentName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Tournament Name:", tournamentName);
  };

  return (
    <div className="w-full  mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e2833] shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-[#cfd1d3] text-sm font-bold mb-2"
            htmlFor="tournamentName"
          >
            Tournament Name
          </label>
          <input
            type="text"
            id="tournamentName"
            value={tournamentName}
            onChange={handleInputChange}
            placeholder="Enter tournament name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1e2833] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#6eb4ef] hover:bg-[#5a9fd1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Tournament
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTournament;
