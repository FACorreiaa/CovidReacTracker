import React from "react";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Header from "./Header";
import SectionInfo from "./SectionInfo";

export default function LandingPage() {
  return (
    <div className="bg-white-landing white-landing box-border h-full">
      <div className="box-border h-full  bg-no-repeat pt-12 font-header">
        <Header />
        <SectionInfo />
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
}
