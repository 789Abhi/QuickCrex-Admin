import React from "react";

function MyMatches() {
  return (
    <div className="w-full">
      <div className="border border-[#1e2833] p-4 rounded-[5px]">
        <div className="text-white">
          <div className="flex justify-between items-center border-b-2 border-b-[#1e2833]  pb-2">
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2">
                <span className="text-[#ff7575]">Live</span>
                <div className="bg-[rgba(194,99,99,0.4)] w-[16px] relative h-[16px] flex justify-center items-center rounded-[50%]">
                  <span className="animate-pulse custom_live_circle flex justify-center items-center text-[#ff7575] w-[10px] h-[10px] rounded-[50%]"></span>
                </div>
              </div>
              <span className="text-[13px] text-[#cfd1d3]">World Cup 2024</span>
            </div>
            <img
              className="w-2 h-2"
              src="https://crex.live/assets/icon/rightArrow.svg"
              alt="Arrow"
            />
          </div>

          <div className="pt-2">
            <span className="text-[12px] text-[#9fa3a7]">
              11th Match, India
            </span>
          </div>

          {/* TEAM 1 */}
          <div className="flex gap-1 items-center">
            <div className="flex gap-3 text-[#cfd1d3]">
              <div className="flex items-center">
                <img
                  className="w-8 h-8"
                  src="https://cricketvectors.akamaized.net/Teams/O.png?impolicy=default_web"
                  alt="India flag"
                />
                <span className="text-sm">IND</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">100/2</span>
                <span className="text-xs">10.0</span>
              </div>
            </div>
          </div>

          {/* TEAM 2 */}
          <div className="flex gap-1 items-center">
            <div className="flex gap-3 text-[#cfd1d3]">
              <div className="flex items-center">
                <img
                  className="w-8 h-8"
                  src="https://cricketvectors.akamaized.net/Teams/O.png?impolicy=default_web"
                  alt="South Africa flag"
                />
                <span className="text-sm">SA</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">120/10</span>
                <span className="text-xs">20.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMatches;
