import React from "react";

function Sidebar() {
  return (
    <div>
      <ul className="flex flex-col group  ">
        <li className="border hover:bg-[#0e161f] cursor-pointer transition-transform  duration-500 ease-out  border-[#9fa3a7]  px-10 py-5 ">
          My Matches
        </li>
        <li className="border hover:bg-[#0e161f] cursor-pointer transition-transform  duration-500 ease-out  border-[#9fa3a7] px-10 py-5">
          My Tournament
        </li>
        <li className="border hover:bg-[#0e161f] cursor-pointer transition-transform  duration-500 ease-out  border-[#9fa3a7] px-10 py-5">
          My Teams
        </li>
        <li className="border hover:bg-[#0e161f] cursor-pointer transition-transform  duration-500 ease-out border-[#9fa3a7] px-10 py-5">
          My Club
        </li>
        <li className="border hover:bg-[#0e161f] cursor-pointer transition-transform  duration-500 ease-out  border-[#9fa3a7] px-10 py-5">
          Create Tournament
        </li>
        <li className="border border-[#9fa3a7] hover:bg-[#0e161f] cursor-pointer transition-transform  duration-500 ease-out  px-10 py-5">
          Register As Club
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
