import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import SignIn from "./components/signin/signin.component";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
