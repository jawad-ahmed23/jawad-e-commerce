import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import SignIn from "./components/signin/signin.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SignIn />
    </div>
  );
};

export default App;
