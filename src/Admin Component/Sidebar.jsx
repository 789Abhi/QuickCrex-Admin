import React, { useState } from "react";

function Sidebar({ setActiveComponent }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, component) => {
    setActiveIndex(index);
    setActiveComponent(component);
  };

  return (
    <section>
      <div>
        <ul className="flex flex-col group">
          <li
            onClick={() => handleClick(0, "clubregister")}
            className={`border cursor-pointer transition-transform duration-500 ease-out border-[#9fa3a7] px-10 py-5 ${
              activeIndex === 0 ? "squad_active" : "hover:bg-[#0e161f]"
            }`}
          >
            Register As Club
          </li>
          <li
            onClick={() => handleClick(1, "addtournament")}
            className={`border cursor-pointer transition-transform duration-500 ease-out border-[#9fa3a7] px-10 py-5 ${
              activeIndex === 1 ? "squad_active" : "hover:bg-[#0e161f]"
            }`}
          >
            Add Tournament
          </li>
          <li
            onClick={() => handleClick(2, "addteams")}
            className={`border cursor-pointer transition-transform duration-500 ease-out border-[#9fa3a7] px-10 py-5 ${
              activeIndex === 2 ? "squad_active" : "hover:bg-[#0e161f]"
            }`}
          >
            Add Teams
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
