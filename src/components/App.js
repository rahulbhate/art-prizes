import React, { Component } from "react";
import Login from "./Login";
import Users from "./Users";
import Home from "./Home";
import Courses from "./Courses";
import ArtPrizes from "./ArtPrizes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Exhibitions from "./Exhibitions";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/courses" component={Courses} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={Users} />
            <Route path="/artprizes" component={ArtPrizes} />
            <Route path="/exhibitions" component={Exhibitions} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
