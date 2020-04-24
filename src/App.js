import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { connect } from "react-redux";

import history from "./history";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact={true} to="/" component={Main} />
          <Route
            exact={true}
            to="/candidates"
            render={(props) => <Main {...props} type="liveJobs" />}
          />
          <Route
            exact={true}
            to="/jobs/live"
            render={(props) => <Main {...props} type="liveJobs" />}
          />
          <Route
            exact={true}
            to="/jobs/accepted"
            render={(props) => <Main {...props} type="acceptedJobs" />}
          />
          <Route
            exact={true}
            to="/jobs/rejected"
            render={(props) => <Main {...props} type="rejectedJobs" />}
          />
        </Switch>
        <SideBar />
      </div>
    </Router>
  );
}

export default App;
