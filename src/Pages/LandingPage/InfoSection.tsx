import { CssBaseline, Container, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Trans } from "react-i18next";

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
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{
          backgroundColor: "inherit",
          height: "20vh",
          textAlign: "center",
        }}
      >
        <Trans i18nKey="landingSectionTitle">
          <h2>{title}</h2>
        </Trans>
        <Trans i18nKey="landingSectionParagraph">
          <p>{paragraph}</p>
        </Trans>
        {children}
      </Typography>
    </Container>
  </React.Fragment>
);
