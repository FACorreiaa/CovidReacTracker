import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/images/landing_v2.jpg"; // Import using relative path
import { CssBaseline } from "@material-ui/core";
import LandingHeader from "./LandingHeader";
import RecipesToCheck from "./RecipesToCheck";
import { InfoSection } from "./InfoSection";
import CountrySub from "../../components/Subscriptions/CountrySub";
import GeneralSub from "../../components/Subscriptions/GeneralSub";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "200vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function LandingPage() {
  const { t, i18n } = useTranslation("landing");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LandingHeader />
      <button onClick={() => changeLanguage("pt")}>pt</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <InfoSection
        title={t("landingSectionTitle")}
        paragraph={t("landingSectionParagraph")}
      />
      <CountrySub />
      <br />
      <GeneralSub />
      <br />
      <RecipesToCheck />
    </div>
  );
}

export default LandingPage;
