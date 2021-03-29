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
          <Route exact path="#/" component={LandingPage} />
          <Route exact path="#/interest" component={Interest} />
          <Route exact path="#/goals" component={Goals} />
          <Route exact path="#/feed" component={Feed} />
          <Route exact path="#/service" component={ServiceSinglePage} />
          <Route exact path="#/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
