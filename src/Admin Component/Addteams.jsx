import React, { useState } from "react";

function AddTeams() {
  const [teams, setTeams] = useState([{ name: "" }]);

  const handleInputChange = (index, event) => {
    const values = [...teams];
    values[index].name = event.target.value;
    setTeams(values);
  };

  const handleAddTeam = () => {
    setTeams([...teams, { name: "" }]);
  };

  const handleRemoveTeam = (index) => {
    const values = [...teams];
    values.splice(index, 1);
    setTeams(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Teams:", teams);
    // Add your form submission logic here
  };

  return (
    <div className="w-full  mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e2833] shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {teams.map((team, index) => (
          <div key={index} className="mb-4">
            <label
              className="block text-[#cfd1d3] text-sm font-bold mb-2"
              htmlFor={`team-${index}`}
            >
              Team Name
            </label>
            <div className="flex">
              <input
                type="text"
                id={`team-${index}`}
                value={team.name}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Enter team name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1e2833] leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={() => handleRemoveTeam(index)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={handleAddTeam}
            className="bg-[#6eb4ef] hover:bg-[#5a9fd1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Team
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#6eb4ef] hover:bg-[#5a9fd1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Teams
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTeams;
