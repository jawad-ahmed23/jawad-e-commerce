import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/sign-up/sign-up.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
