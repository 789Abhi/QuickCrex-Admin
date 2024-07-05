import React from "react";

function MyTournament() {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="w-full cursor-pointer">
          <div className="w-full p-2">
            <div className="border flex justify-center items-center flex-col border-[#1e2833] p-4 hover:bg-[#212529]">
              <img
                className="w-[100px] h-[119px]"
                src="https://cricketvectors.akamaized.net/Series/1IR.png?impolicy=default_web"
                alt=""
              />
              <h3 className="text-base my-4 font-bold whitespace-nowrap text-[#6eb4ef]">
                IPL 2024
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTournament;
