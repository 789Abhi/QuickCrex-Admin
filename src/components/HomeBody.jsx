import React from "react";
import InfoBox from "./InfoBox";

function HomeBody() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-10 my-20">
        <InfoBox
          logo={
            <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThC4t-T5t9uoiBooBcPZux1SG3cN-_g236cg&s" />
          }
          info="add tournament"
        />
        <InfoBox logo={ <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThC4t-T5t9uoiBooBcPZux1SG3cN-_g236cg&s" />} info="add teams" />
        <InfoBox logo={ <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThC4t-T5t9uoiBooBcPZux1SG3cN-_g236cg&s" />} info="add players" />
        <InfoBox logo={ <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThC4t-T5t9uoiBooBcPZux1SG3cN-_g236cg&s" />} info="add score" />
      </div>
    </div>
  );
}

export default HomeBody;
