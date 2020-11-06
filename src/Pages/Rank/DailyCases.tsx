import React from "react";
import { ContainerComp } from "../../components/Container/Container";
import NavBar from "../../components/NavBar/Navbar";
import DailyConfirmed from "../../components/Rank/DailyConfirmed";
import DailyDeaths from "../../components/Rank/DailyDeaths";
import DailyRecovered from "../../components/Rank/DailyRecovered";

function DailyCases() {
  return (
    <div>
      <NavBar />
      <ContainerComp>
        <DailyConfirmed />
        <DailyDeaths />
        <DailyRecovered />
      </ContainerComp>
    </div>
  );
}

export default DailyCases;
