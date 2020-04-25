import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "./history";
import Header from "./components/static/Header";
import NavigationBar from "./components/static/NavigationBar";
import SideBar from "./components/static/SideBar";

import LiveJobs from "./components/LiveJobs";
import RejectedJobs from "./components/RejectedJobs";
import AcceptedJobs from "./components/AcceptedJobs";
import AddCandidate from "./components/AddCandidate";
import Candidates from "./components/candidates/Candidates";

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <NavigationBar />
        <Route exact={true} path="/" component={LiveJobs} />
        <Switch>
          <Route exact={true} path="/candidates" component={Candidates} />
          <Route exact={true} path="/jobs/live" component={LiveJobs} />
          <Route exact={true} path="/jobs/accepted" component={AcceptedJobs} />
          <Route
            exact={false}
            path="/jobs/accepted/:id"
            component={AddCandidate}
          />
          <Route exact={true} path="/jobs/rejected" component={RejectedJobs} />
        </Switch>
        <SideBar />
      </div>
    </Router>
  );
}

export default App;
