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

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/summary" component={SummaryPage} />
      </Switch>
    </Router>
  );
}

export default App;
