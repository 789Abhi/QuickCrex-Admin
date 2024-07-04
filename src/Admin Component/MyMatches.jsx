import React from "react";

function MyMatches() {
  return (
    <div className="rounded-xl border-[#1e2833] hover:bg-[#0e161f] border p-5 flex justify-center items-center flex-col cursor-pointer transition-transform  duration-500 ease-out hover:scale-105">
      <div className="w-40 rounded-3xl"></div>
      <h3 className="uppercase font-bold text-base text-[#cfd1d3]">
        Matches
      </h3>
    </div>
  );
}

export default MyMatches;
