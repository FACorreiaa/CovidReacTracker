import React from "react";
import { CustomContainer } from "../../components/Container/Container";
import DailyConfirmed from "../../components/Rank/DailyConfirmed";
import DailyDeaths from "../../components/Rank/DailyDeaths";
import DailyRecovered from "../../components/Rank/DailyRecovered";

function DailyCases() {
  return (
    <div>
      <CustomContainer>
        <DailyConfirmed />
        <DailyDeaths />
        <DailyRecovered />
      </CustomContainer>
    </div>
  );
}

export default DailyCases;
