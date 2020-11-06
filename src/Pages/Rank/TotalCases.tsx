import React from "react";
import { ContainerComp } from "../../components/Container/Container";
import NavBar from "../../components/NavBar/Navbar";
import TotalConfirmed from "../../components/Rank/TotalConfirmed";
import TotalDeaths from "../../components/Rank/TotalDeaths";
import TotalRecovered from "../../components/Rank/TotalRecovered";

function TotalCases() {
  return (
    <div>
      <NavBar />

      <ContainerComp>
        <TotalConfirmed />
        <TotalDeaths />
        <TotalRecovered />
      </ContainerComp>
    </div>
  );
}

export default TotalCases;
