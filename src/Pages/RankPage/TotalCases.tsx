import React from "react";
import { CustomContainer } from "../../components/Container/Container";
import TotalConfirmed from "../../components/Rank/TotalConfirmed";
import TotalDeaths from "../../components/Rank/TotalDeaths";
import TotalRecovered from "../../components/Rank/TotalRecovered";

function TotalCases() {
  return (
    <div>
      <CustomContainer>
        <TotalConfirmed />
        <TotalDeaths />
        <TotalRecovered />
      </CustomContainer>
    </div>
  );
}

export default TotalCases;
