import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function InfoBox({ info, logo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const user = auth.currentUser;
    if (user) {
      navigate("/admin");
    } else {
      // User is not logged in, redirect to login page
      navigate("/signin");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-xl border-[#1e2833] hover:bg-[#0e161f] border p-5 flex justify-center items-center flex-col cursor-pointer transition-transform  duration-500 ease-out hover:scale-105"
    >
      <div className="w-40 rounded-3xl">{logo}</div>
      <h3 className="uppercase font-bold text-base text-[#cfd1d3] pt-4">
        {info}
      </h3>
    </div>
  );
}

export default InfoBox;
