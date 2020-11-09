import "./assets/main.css";
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage_/LandingPage";
import SummaryPage from "./Pages/SummaryPage/SummaryPage";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import TotalCases from "./Pages/RankPage/TotalCases";
import DailyCases from "./Pages/RankPage/DailyCases";
import LiveAfterDate from "./Pages/LivePage/LiveAfterDate";

import DayOne from "./Pages/DayOnePage/DayOne";
import LiveDailyCountry from "./Pages/LivePage/LiveDailyCountry";
import CountryTotalPage from "./Pages/CountryPage/CountryTotalPage";
import CountryStatusBetweenDate from "./Pages/CountryPage/CountryStatusBetweenDate";
import CountryStatus from "./Pages/CountryPage/CountryStatus";
import CountryCasesBetweenDate from "./Pages/CountryPage/CountryCasesBetweenDate";
import LiveTotal from "./Pages/LivePage/LiveTotal";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { CustomMainContainer } from "./components/Landing/CustomMainContainer";
import Footer from "./Pages/LandingPage_/Footer";
import Header from "./Pages/LandingPage_/Header";
import { SectionContainer } from "./Pages/LandingPage_/SectionContainer";
import SectionInfo from "./Pages/LandingPage_/SectionInfo";

LogRocket.init("covidtracker/covidreactracker");
setupLogRocketReact(LogRocket);
//delete
/*
<Route
              path="/summary"
              render={(props) => (
                <SectionInfo {...props} title="teste">
                  <button className="text-nav-color text-nav p-button w-button text-center shadow-button rounded-button">
                    <Link to="/about">Learn More</Link>
                  </button>
                </SectionInfo>
              )}
            />
            */
function App() {
  return (
    <Router>
      <BrowserRouter>
        <CustomMainContainer>
          <Header />
          <SectionContainer>
            <SectionInfo title="CovidTrackeReact">
              <button className="text-nav-color text-nav p-button w-button text-center shadow-button rounded-button">
                <Link to="/about">Learn More</Link>
              </button>
            </SectionInfo>
          </SectionContainer>
        </CustomMainContainer>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route exact path="/rank/total" component={TotalCases} />
        <Route exact path="/rank/daily" component={DailyCases} />
        <Route exact path="/dayone" component={DayOne} />
        <Route exact path="/live/after/date" component={LiveAfterDate} />
        <Route exact path="/live/daily/country" component={LiveDailyCountry} />
        <Route exact path="/live/total" component={LiveTotal} />

        <Route exact path="/country/total" component={CountryTotalPage} />
        <Route
          exact
          path="/country/status/dates"
          component={CountryStatusBetweenDate}
        />
        <Route exact path="/country/status" component={CountryStatus} />
        <Route
          exact
          path="/country/cases/dates"
          component={CountryCasesBetweenDate}
        />
        <Route exact path="/about" component={ContactPage} />
        <Footer />
      </BrowserRouter>
    </Router>
  );
}

export default App;
