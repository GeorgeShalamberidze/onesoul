import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Feed from './components/Feed'
import Interest from './components/Interest'
import LandingPage from "./components/LandingPage";
import Goals from "./components/Goals"
import ServiceSinglePage from "./components/ServiceSinglePage"
import Account from "./components/Account"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/#/" component={LandingPage} />
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/#/interest" component={Interest} />
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/#/goals" component={Goals} />
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/#/feed" component={Feed} />
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/#/service" component={ServiceSinglePage} />
          <Route exact path="https://georgeshalamberidze.github.io/onesoul/#/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
