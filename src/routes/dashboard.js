import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function DashboardRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={() => <h1>Dashboard Page</h1>} />
      </Switch>
    </Router>
  );
}

export default DashboardRoutes;
