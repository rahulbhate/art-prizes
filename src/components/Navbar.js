import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link"><Link to="/">Home</Link></a>
            </li>
            <li className="nav-item">
            <a className="nav-link"><Link to="/Login">Login</Link></a>
            </li>
            <li className="nav-item">
            <a className="nav-link"><Link to="/Register">Register</Link></a>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an  online and inlindfe  Hehyd hey heyinline element
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
