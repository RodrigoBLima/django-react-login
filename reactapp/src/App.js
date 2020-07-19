import React, { Component } from "react";
import Layout from "./containers/Base/Layout";
import Routes from "./Routes";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./containers/Accounts/Login";
import Signup from "./containers/Accounts/Signup";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    isAuthenticated: true,
  };

  componentDidMount() {
    // console.log("componentDidMount in App");

    if (localStorage.getItem("user-token") !== null) {
      console.log('tem user-token')
    } else {
      this.setState({ isAuthenticated: false });
    }
  }
  render() {
    let routes = (
      <Switch>
        <Layout>
          <Route path="/*" component={Routes} />
        </Layout>
      </Switch>
    );

    if (!this.state.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/login/" component={Login} />
          <Route path="/signup/" component={Signup} />
          <Route path="/*" render={() => <Redirect to="/login/" />} />
        </Switch>
      );
    }

    return <BrowserRouter>{routes}</BrowserRouter>;
  }}
export default App
