import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";
import Intro from "./routes/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode className="h-full">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="generate" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
