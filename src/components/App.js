import React from "react";
import { Route } from "react-router-dom";

import "../sass/_App.scss";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
import Challenge from "./Challenge";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Route
        exact
        path={process.env.PUBLIC_URL + "/"}
        render={() => <Home />}
      />

      <Route
        path={process.env.PUBLIC_URL + "/dashboard"}
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
    </div>
  );
};

export default App;
