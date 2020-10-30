import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
