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
import CustomButton from "./components/Button/CustomButton";
import SubscribePage from "./Pages/SubscribePage/Subscribe";
import TravelPage from "./Pages/TravelPage/TravelPage";
import CountryStatInfo from "./Pages/StatisticsPage/CountryStatInfo";
import CountryStatNewData from "./Pages/StatisticsPage/CountryStatNewData";
import CountryStatTotalData from "./Pages/StatisticsPage/CountryStatTotalData";
import OccupancyPage from "./Pages/HospitalPage/OccupancyPage";
import AdmissionsPage from "./Pages/HospitalPage/AdmissionsPage";
import AdmissionsMillionPage from "./Pages/HospitalPage/AdmissionsMillionPage";
import OccupancyMillionPage from "./Pages/HospitalPage/OccupancyMillionPage";
import SummaryNewRecovered from "./Pages/SummaryPage/SummaryNewRecovered";
import SummaryNewDeaths from "./Pages/SummaryPage/SummaryNewDeaths";
import SummaryNewConfirmed from "./Pages/SummaryPage/SummaryNewConfirmed";
import SummaryTotalConfirmed from "./Pages/SummaryPage/SummaryTotalConfirmed";
import SummaryTotalRecovered from "./Pages/SummaryPage/SummaryTotalRecovered";
import SummaryTotalDeaths from "./Pages/SummaryPage/SummaryTotalDeaths";

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
              <Link to="/contact">
                <CustomButton label="Contact me" />
              </Link>
            </SectionInfo>
          </SectionContainer>
        </CustomMainContainer>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route exact path="/rank/total" component={TotalCases} />
        <Route exact path="/rank/daily" component={DailyCases} />
        <Route exact path="/dayone" component={DayOne} />
        {/**        <Route exact path="/live/after/date" component={LiveAfterDate} />
         */}
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
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/subscribe" component={SubscribePage} />
        <Route exact path="/travel" component={TravelPage} />
        <Route
          exact
          path="/statistics/country/info"
          component={CountryStatInfo}
        />
        <Route
          exact
          path="/statistics/country/data/new"
          component={CountryStatNewData}
        />
        <Route
          exact
          path="/statistics/country/data/total"
          component={CountryStatTotalData}
        />
        <Route exact path="/occupancy" component={OccupancyPage} />
        <Route
          exact
          path="/occupancy/million"
          component={OccupancyMillionPage}
        />

        <Route exact path="/admissions" component={AdmissionsPage} />
        <Route
          exact
          path="/admissions/million"
          component={AdmissionsMillionPage}
        />
        <Route
          exact
          path="/summary/new/recovered"
          component={SummaryNewRecovered}
        />
        <Route exact path="/summary/new/deaths" component={SummaryNewDeaths} />
        <Route
          exact
          path="/summary/new/confirmed"
          component={SummaryNewConfirmed}
        />
        <Route
          exact
          path="/summary/total/confirmed"
          component={SummaryTotalConfirmed}
        />
        <Route
          exact
          path="/summary/total/recovered"
          component={SummaryTotalRecovered}
        />
        <Route
          exact
          path="/summary/total/deaths"
          component={SummaryTotalDeaths}
        />
        <Footer />
      </BrowserRouter>
    </Router>
  );
}

export default App;
