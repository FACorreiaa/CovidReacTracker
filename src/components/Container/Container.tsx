import { CssBaseline, Container, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

type SectionProps = {};

// we can use children even though we haven't defined them in our CardProps
export const ContainerComp: FunctionComponent<SectionProps> = ({
  children,
}) => (
  <React.Fragment>
    <Container maxWidth="lg">
      <Typography
        component="div"
        style={{
          backgroundColor: "inherit",
          height: "100vh",
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
    </Container>
  </React.Fragment>
);
