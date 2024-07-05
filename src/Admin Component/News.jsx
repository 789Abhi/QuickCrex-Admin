import React from "react";

function News() {
  return (
    <section className="text-white mt-10 border border-[#1e2833] p-4">
      <h2 className="text-[25px] font-bold">Spectacular Miller!</h2>
      <div className="flex lg:flex-row flex-col gap-3 pt-3">
        <div className="lg:w-1/2 w-full  overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform cursor-pointer duration-150 ease-out hover:scale-105 overflow-hidden "
            src="https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1698849942717_Work%20(4).jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full text-sliders self-center">
          <ul
            className="text-[#6eb4ef] flex gap-4 overflow-x-auto whitespace-nowrap"
            style={{ scrollbarWidth: "none" }}
          >
            <li>
              <a href="#">SOUTH AFRICA</a>
            </li>
            <li>
              <a href="#">NEW ZEALAND</a>
            </li>
            <li>
              <a href="#">DARYL MITCHELL</a>
            </li>
            <li>
              <a href="#">DAVID MILLER</a>
            </li>
            <li>
              <a href="#">KESHAV MAHARAJ</a>
            </li>
            <li>
              <a href="#">WORLD CUP 2023</a>
            </li>
            <li>
              <a href="#">WORLD CUP LIVE SCORE</a>
            </li>
          </ul>
          <div className="pt-3">
            <h3 className="text-[22px]">
              [Watch] David Miller Catches A ‘Skier’ As Daryl Mitchell Falls To
              Keshav Maharaj
            </h3>
            <p className="text-base pt-3 pb-5">
              David Miller took one of the most spectacular catches in the 2023
              World Cup during South Africa’s ongoing edition match ....
            </p>
            <span className="text-[#9fa3a7] text-[13px] mt-5">
              32 minutes ago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
