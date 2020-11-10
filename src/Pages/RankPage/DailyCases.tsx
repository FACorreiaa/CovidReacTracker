import React from "react";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import DailyConfirmed from "../../components/Rank/DailyConfirmed";
import DailyDeaths from "../../components/Rank/DailyDeaths";
import DailyRecovered from "../../components/Rank/DailyRecovered";

function DailyCases() {
  return (
    <div>
      <CustomSecondaryContainer>
        <DailyConfirmed />
        <DailyDeaths />
        <DailyRecovered />
      </CustomSecondaryContainer>
    </div>
  );
}

export default DailyCases;
