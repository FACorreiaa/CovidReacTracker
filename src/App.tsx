import { CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import LandingPage from "./Layouts/LandingPage/LandingPage";
import SummaryPage from "./Layouts/SummaryPage/SummaryPage";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import TotalCases from "./Layouts/Rank/TotalCases";
import DailyCases from "./Layouts/Rank/DailyCases";

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
      </Switch>
    </Router>
  );
}

export default App;
