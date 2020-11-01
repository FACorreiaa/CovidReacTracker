import { CssBaseline, Container, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

type SectionProps = {
  title: string;
  paragraph: string;
};

// we can use children even though we haven't defined them in our CardProps
export const InfoSection: FunctionComponent<SectionProps> = ({
  title,
  paragraph,
  children,
}) => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{
          backgroundColor: "inherit",
          height: "20vh",
          textAlign: "center",
        }}
      >
        <h2>{title}</h2>
        <p>{paragraph}</p>
        {children}
      </Typography>
    </Container>
  </React.Fragment>
);
