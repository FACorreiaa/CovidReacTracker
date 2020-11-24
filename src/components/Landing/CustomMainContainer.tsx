import React, { FunctionComponent } from "react";
import "fontsource-roboto";

type SectionProps = {};

// we can use children even though we haven't defined them in our CardProps
export const CustomMainContainer: FunctionComponent<SectionProps> = ({
  children,
}) => (
  <div className="font-roboto box-border bg-white-landing h-full mb-auto bg-landing-main bg-no-repeat bg-bottom pt-32 tiny:w-auto tiny:overflow-x-hidden">
    {children}
  </div>
);
