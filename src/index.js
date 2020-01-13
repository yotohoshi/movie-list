import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

// connect the store with app component
ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById("root")
);
