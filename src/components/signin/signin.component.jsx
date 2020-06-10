import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handle = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <form className="signin-form">
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="Password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="signin" />
        </form>
      </div>
    );
  }
}

export default SignIn;
