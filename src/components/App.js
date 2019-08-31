import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../sass/_App.scss";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
import Challenge from "./Challenge";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Router>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => <Dashboard />}
        />

        <Route
          path={process.env.PUBLIC_URL + "/recipes"}
          render={() => <Recipes />}
        />

        <Route
          path={process.env.PUBLIC_URL + "/challenge"}
          render={() => <Challenge />}
        />
      </Router>
    </div>
  );
};

export default App;
