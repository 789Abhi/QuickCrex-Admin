import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import MyMatches from "./MyMatches";
import MyTournament from "./MyTournament";
import News from "./News";
import ClubRegisteration from "./ClubRegisteration";
import AddTournament from "./AddTournament";
import Addteams from "./Addteams";

function AdminArea() {
  const [activeComponent, setActiveComponent] = useState("MyMatches");
  const leftMenuRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftMenu = leftMenuRef.current;
      const rightContent = rightContentRef.current;
      if (leftMenu && rightContent) {
        const rect = rightContent.getBoundingClientRect();
        leftMenu.style.maxHeight = rect.height + "px";
        leftMenu.style.top = Math.max(100, rect.top) + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "clubregister":
        return (
          <>
            <div className="">
              <ClubRegisteration />
            </div>
            <div className="flex justify-center pt-5"></div>
          </>
        );
      case "addtournament":
        return (
          <>
            <div className="">
              <AddTournament />
            </div>
            <div className="flex justify-center pt-5"></div>
          </>
        );
      case "addteams":
        return (
          <>
            <Addteams />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="container mx-auto">
      <div className="text-[#cfd1d3] my-10 flex gap-10">
        <div ref={leftMenuRef} className="w-[35%] h-full sticky top-0">
          <Sidebar setActiveComponent={setActiveComponent} />
        </div>
        <div ref={rightContentRef} className="w-[65%] flex flex-col gap-10">
          {renderComponent()}
        </div>
      </div>
    </section>
  );
}

export default AdminArea;
