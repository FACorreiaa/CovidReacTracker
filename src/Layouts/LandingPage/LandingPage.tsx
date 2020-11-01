import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/images/landing_v2.jpg"; // Import using relative path
import { CssBaseline } from "@material-ui/core";
import LandingHeader from "./LandingHeader";
import RecipesToCheck from "./RecipesToCheck";
import { InfoSection } from "./InfoSection";
import CountrySub from "../../components/CountrySubscription/CountrySub";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "200vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <LandingHeader />
      <InfoSection
        title="Covid tracker"
        paragraph="This is a simple test to see how the text will look here and i have to remove this after"
      />
      <CountrySub />
      <RecipesToCheck />
    </div>
  );
}

export default LandingPage;
