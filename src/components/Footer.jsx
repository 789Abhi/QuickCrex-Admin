import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="bg-[#131e29]  px-[25px]">
      <div className="container m-auto py-10">
        <Link
          className="flex gap-2 pb-3 items-center  border-b-2 border-b-[#1e2833]"
          to="/"
        >
          {" "}
          <img
            className="w-10 h-10"
            src="https://crex.live/assets/logo/logo2.webp"
            alt=""
          />
          <h2 className="text-[#cfd1d3] font-bold">CREX</h2>
        </Link>

        <div className="flex justify-between text-[#FFF] pt-3">
          <ul className="flex flex-col gap-3">
            <a href="">About</a>
            <a href="">Grievance</a>
            <a href="">Refund Policy</a>
          </ul>

          <ul className="flex flex-col gap-3">
            <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
            <a href="">Contact Us</a>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
