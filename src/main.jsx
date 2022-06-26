import React, {createContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";
import Intro from "./routes/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './store/store';

export const Store = createContext(store);

ReactDOM.render(
  <React.StrictMode className="h-full">
    <Store.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="generate" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Store.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
