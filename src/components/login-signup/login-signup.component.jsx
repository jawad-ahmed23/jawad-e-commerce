import React from "react";
import { withRouter } from "react-router-dom";

import "./login-signup.styles.scss";

const LogInAndSignUpButton = ({ history }) => {
  return (
    <div className="login-signup-container">
      <button className="login-button" onClick={() => history.push("/signin")}>
        Login
      </button>
      <button
        className="sign-up-button"
        onClick={() => history.push("/signup")}
      >
        Sign up
      </button>
    </div>
  );
};

export default withRouter(LogInAndSignUpButton);
