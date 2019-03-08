import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Container } from 'react-bootstrap';
import { loadCourses } from './actions/courseActions';
const store = configureStore();

store.dispatch(loadCourses());

render(<Provider store={store}><Container><App /></Container></Provider>, document.getElementById("root"));
