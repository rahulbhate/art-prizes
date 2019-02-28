import React, { Component } from "react";
import Login from "./Login";
import Users from "./Users";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>{this.props.children}</Navbar>
        <Users />
      </div>
    );
  }
}

export default App;
