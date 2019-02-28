import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import { BrowserRouter, Route } from "react-router-dom";

render(
  <BrowserRouter>
  <React.Fragment>
    <Route exact path="/" component={App} />
    <Route exact path="/Login" component={Login} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
