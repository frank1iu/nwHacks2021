import React, {useState, useEffect} from "react";
import { MuiThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { theme } from "./themes/theme";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/Landing";
import CreateNewRequest from "./pages/CreateNewRequest";
import CreateNewOffer from "./pages/CreateNewOffer";
import "./App.css";

function App() {
  useEffect(() => {
    // const localStorage = window.localStorage;
    // localStorage.clear();
    // localStorage.setItem('user', "integrationTest"); //username
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/main" component={MainPage} />
          <Route path="/requestform" component={CreateNewRequest} />
          <Route path="/offerform" component={CreateNewOffer} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
