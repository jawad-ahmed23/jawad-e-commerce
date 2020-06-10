import React from "react";
import { withRouter } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import FormInput from "../form-input/form-input.compoent";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      conformPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      displayName: "",
      email: "",
      password: "",
      conformPassword: "",
    });
  };

  render() {
    const { email, password, displayName, conformPassword } = this.state;
    const { history } = this.props;
    return (
      <div className="sign-up-container">
        <CustomButton isGoogleSignIn>
          <FcGoogle size="30px" className="social-icon" />
          signin with google
        </CustomButton>
        <CustomButton isFacebookSignIn>
          <AiFillFacebook size="30px" className="social-icon" />
          signin with facebook
        </CustomButton>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="conformPassword"
            value={conformPassword}
            onChange={this.handleChange}
            label="Corfrom Password"
          />
          <CustomButton type="submit">signup</CustomButton>
          <span
            style={{ textAlign: "center", fontSize: "14px", marginTop: "5px" }}
          >
            already have an acount?
            <span
              onClick={() => history.push("/signin")}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              signin
            </span>
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
