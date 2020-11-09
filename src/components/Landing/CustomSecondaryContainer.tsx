import { CssBaseline, Container, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

type SectionProps = {};

// we can use children even though we haven't defined them in our CardProps
export const CustomSecondaryContainer: FunctionComponent<SectionProps> = ({
  children,
}) => (
  <div className="bg-landing-secondary bg-bottom bg-white-landing bg-dark-landing flex justify-evenly border-box h-full bg-no-repeat bottom-0 pt-12">
    {children}
  </div>
);
