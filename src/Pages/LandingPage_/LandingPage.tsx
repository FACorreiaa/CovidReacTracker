import React from "react";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Header from "./Header";
import SectionInfo from "./SectionInfo";

export default function LandingPage() {
  return (
    <>
      <div className="box-border bg-white-landing h-full bg-landing-main bg-no-repeat bg-bottom p-landing-50">
        <Header />
        <SectionInfo />
      </div>
      <CardContainer />
      <Footer />
    </>
  );
}
