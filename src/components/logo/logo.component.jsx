import React from "react";
import { withRouter } from "react-router-dom";

import "./logo.styles.scss";

const LogoComponent = ({ history }) => {
  return (
    <div className="logo-container">
      <h1 className="logo" onClick={() => history.push("/")}>
        LOGO
      </h1>
    </div>
  );
};

export default withRouter(LogoComponent);
