import React from "react";
import { CustomMainContainer } from "../../components/Landing/CustomMainContainer";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Header from "./Header";
import { SectionContainer } from "./SectionContainer";
import SectionInfo from "./SectionInfo";

export default function LandingPage() {
  return (
    <>
      <CustomMainContainer>
        <Header />
        <SectionContainer>
          <SectionInfo title="CovidTrackeReact">
            <button className="text-nav-color text-nav p-button w-button text-center shadow-button rounded-button">
              Learn More
            </button>
          </SectionInfo>
        </SectionContainer>
      </CustomMainContainer>
      <CardContainer />
      <Footer />
    </>
  );
}
