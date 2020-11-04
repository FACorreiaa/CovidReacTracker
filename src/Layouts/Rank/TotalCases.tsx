import React from "react";
import { ContainerComp } from "../../components/Container/Container";
import NavBar from "../../components/NavBar/Navbar";
import TotalConfirmed from "../../components/TotalRank/TotalConfirmed";
import TotalDeaths from "../../components/TotalRank/TotalDeaths";
import TotalRecovered from "../../components/TotalRank/TotalRecovered";

function TotalCases() {
  return (
    <div>
      <NavBar />

      <ContainerComp>
        <TotalRecovered />
        <TotalDeaths />
        <TotalConfirmed />
      </ContainerComp>
    </div>
  );
}

export default TotalCases;
