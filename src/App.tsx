import { CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SummaryPage from "./Pages/SummaryPage/SummaryPage";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import TotalCases from "./Pages/RankPage/TotalCases";
import DailyCases from "./Pages/RankPage/DailyCases";
import LiveAfterDate from "./Pages/LivePage/LiveAfterDate";

import DayOne from "./Pages/DayOnePage/DayOne";
import LiveDailyCountry from "./Pages/LivePage/LiveDailyCountry";
import LiveTotalCountries from "./Pages/LivePage/LiveTotalCountries";

LogRocket.init("covidtracker/covidreactracker");
setupLogRocketReact(LogRocket);

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route exact path="/rank/total" component={TotalCases} />
        <Route exact path="/rank/daily" component={DailyCases} />
        <Route exact path="/dayone" component={DayOne} />
        <Route exact path="/live/after/date" component={LiveAfterDate} />
        <Route exact path="/live/daily/country" component={LiveDailyCountry} />
        <Route
          exact
          path="/live/total/countries"
          component={LiveTotalCountries}
        />
      </Switch>
    </Router>
  );
}

export default App;
