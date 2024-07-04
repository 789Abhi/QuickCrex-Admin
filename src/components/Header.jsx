// src/Header.jsx
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Header() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/signin");
  };

  return (
    <section className="bg-[#1a2938] sticky top-0 z-50 py-4">
      <div className="container m-auto">
        <div className="flex justify-between items-center lg:px-0 px-4">
          <div className="">
            <Link className="flex gap-2" to="/" exact="true">
              <img
                className="w-6 h-6"
                src="https://crex.live/assets/logo/logo2.webp"
                alt="Logo"
              />
              <h2 className="text-[#cfd1d3] font-bold">CREX</h2>
            </Link>
          </div>
          <div>
            <nav>
              <div className="flex justify-between text-[rgba(255,255,255,0.6)] gap-10 text-sm font-normal">
                {user ? (
                  <Link
                    className="border hover:border-[rgba(110,180,239,0.8)] border-[#6eb4ef] px-7 py-3 rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                ) : ( 
                  <>
                    <NavLink
                      to="/signin"
                      className="border hover:border-[rgba(110,180,239,0.8)] border-[#6eb4ef] px-7 py-3 rounded-lg"
                      exact
                      activeClassName="active"
                    >
                      Sign In
                    </NavLink>

                    <NavLink
                      to="/signup"
                      className="border hover:border-[rgba(110,180,239,0.8)] border-[#6eb4ef] px-7 py-3 rounded-lg"
                      exact
                      activeClassName="active"
                    >
                      Sign Up
                    </NavLink>
                    <NavLink
                      target="_blank"
                      to="https://quickcrex.web.app/"
                      className="border border-[#ff7575] px-7 py-3  hover:border-[rgba(255,177,177,0.8 )]  rounded-lg"
                      exact
                      activeClassName="active"
                    >
                      Quick Crex
                    </NavLink>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
