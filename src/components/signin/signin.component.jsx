import React from "react";
import { withRouter } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import FormInput from "../form-input/form-input.compoent";
import CustomButton from "../custom-button/custom-button.component";

import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    const { history } = this.props;
    return (
      <div className="sign-in-container">
        <CustomButton isGoogleSignIn>
          <FcGoogle size="30px" className="social-icon" />
          signin with google
        </CustomButton>
        <CustomButton isFacebookSignIn>
          <AiFillFacebook size="30px" className="social-icon" />
          signin with facebook
        </CustomButton>
        <form className="signin-form" onSubmit={this.handleSubmit}>
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
          <CustomButton type="submit">signin</CustomButton>
          <span
            style={{ textAlign: "center", fontSize: "14px", marginTop: "5px" }}
          >
            Don't have an acount?
            <span
              onClick={() => history.push("./signup")}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              signup
            </span>
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
