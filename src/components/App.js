import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { logIn } from "../store/actions/authActions";

import "../sass/_App.scss";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Footer from "./Footer";

class App extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.onLogIn();
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <Link to="#main" className="skipLink">
          Skip to content
        </Link>

        <div className="App">
          <Header />

          <main id="main">
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              render={() =>
                this.props.isLogin ? <Redirect to="/dashboard" /> : <Home />
              }
            />

            <Route
              path={process.env.PUBLIC_URL + "/dashboard"}
              render={() => <Dashboard />}
            />
          </main>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

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
