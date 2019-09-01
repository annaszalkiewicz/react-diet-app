import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
 
import { logIn } from "../store/actions/authActions";

import "../sass/_App.scss";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
import Challenge from "./Challenge";
import Home from "./Home";

class App extends Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.onLogIn();
    }, 5000);
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Route 
          exact 
          path={process.env.PUBLIC_URL + "/"} 
          render={() => (
          this.props.isLogin ? (
            <Redirect to="/dashboard"/>
          ) : (
            <Home />
          )
        )}/>
  
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
  }
  
};

const mapStateToProps = state => {
  return {
    isLogin: state.authReducer.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: () => dispatch(logIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

