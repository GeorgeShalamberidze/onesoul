import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Feed from './components/Feed'
import Interest from './components/Interest'
import LandingPage from "components/LandingPage";
import Goals from "/components/Goals"
import ServiceSinglePage from "./components/ServiceSinglePage"
import Account from "./components/Account"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/" component={LandingPage} />
          <Route exact path="/interest" component={Interest} />
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/goals" component={Goals} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/service" component={ServiceSinglePage} />
          <Route exact path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
