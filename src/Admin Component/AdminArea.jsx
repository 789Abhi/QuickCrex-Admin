import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import MyMatches from "./MyMatches";
import MyTournament from "./MyTournament";
import News from "./News";

function AdminArea() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/signin");
  };

  return (
    <section className="container mx-auto">
      <div className="text-[#cfd1d3] my-10 flex gap-10  ">
        <div className="border border-[#9fa3a7] w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[70%] flex flex-col gap-10">
          <div className="flex justify-between    ">
            <MyMatches />
            <MyTournament />
          </div>
          <div>
            <News />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminArea;
