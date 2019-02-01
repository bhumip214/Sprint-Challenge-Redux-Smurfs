import React, { Component } from "react";
import SmurfsView from "./views/SmurfsView";
import FormView from "./views/FormView";
import { Route, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    if (this.props.isFetchingSmurfs) {
      return (
        <div className="loader">
          <Loader type="TailSpin" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }
    return (
      <div className="App">
        <div className="header">
          <h1>Smurf Village</h1>
          <div className="nav-links">
            <NavLink
              exact
              to="/"
              activeClassName="active-link"
              className="link-home"
            >
              Smurf
            </NavLink>
            <NavLink
              to="/smurf-form"
              activeClassName="active-link"
              className="link-smurfForm"
            >
              Add Smurf
            </NavLink>
          </div>
        </div>

        <Route exact path="/smurf-form" component={FormView} />
        <Route exact path="/" component={SmurfsView} />
      </div>
    );
  }
}

export default App;
