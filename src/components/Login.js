import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Class component login to change the state when user clicks on Sign in button...
class Login extends Component {
  state = {
    inputEmail: "",
    inputPassword: ""
  };


  render() {
    const handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
      e.preventDefault();
      console.log(`this form is submitted : 
      Email: ${this.state.inputEmail}
      Password: ${this.state.inputPassword}`);
      //this.state.inputEmail ? alert("successfully login"): alert("Login Failed")
    };
    // console.log(this.props.open);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      name="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                      autofocus
                      onChange={handleChange}
                    />
                    <label for="inputEmail">User name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-danger btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
