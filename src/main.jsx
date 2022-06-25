import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Intro from "./Intro";

ReactDOM.render(
  <React.StrictMode className="h-full">
    <Intro />
  </React.StrictMode>,
  document.getElementById("root")
);
