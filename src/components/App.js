import React, { Component } from "react";
import Login from "./Login";
import Users from "./Users";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar>{this.props.children}</Navbar>
        <p><Link to="/Login">Users</Link></p>
        <Users />
      </div>
    );
  }
}

export default App;
