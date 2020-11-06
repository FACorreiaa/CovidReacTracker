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
import TotalCases from "./Pages/Rank/TotalCases";
import DailyCases from "./Pages/Rank/DailyCases";
import DayOne from "./Pages/DayOne/DayOne";

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
      </Switch>
    </Router>
  );
}

export default App;
