import React from "react";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import TotalConfirmed from "../../components/Rank/TotalConfirmed";
import TotalDeaths from "../../components/Rank/TotalDeaths";
import TotalRecovered from "../../components/Rank/TotalRecovered";

function TotalCases() {
  return (
    <div>
      <CustomSecondaryContainer>
        <TotalConfirmed />
        <TotalDeaths />
        <TotalRecovered />
      </CustomSecondaryContainer>
    </div>
  );
}

export default TotalCases;
