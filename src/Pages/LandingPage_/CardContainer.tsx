import React from "react";
import { Link } from "react-router-dom";
import CustomCard from "../../components/Card/Card";
import CustomLandingCard from "../../components/Landing/CustomLandingCard";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import useWindowPosition from "../../hooks/Landing";
import { SectionContainer } from "./SectionContainer";
import SectionInfo from "./SectionInfo";

export default function CardContainer() {
  return (
    <>
      <CustomSecondaryContainer>
        <section className="flex w-nav h-container justify-between p-container m-container">
          <CustomLandingCard
            title="Testando 1"
            value="testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2"
          />
          <CustomLandingCard
            title="Testando 1"
            value="testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2"
          />
          <CustomLandingCard
            title="Testando 1"
            value="testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2testando 2"
          />
        </section>
      </CustomSecondaryContainer>
    </>
  );
}
