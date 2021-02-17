import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import Launchespage from "./components/Launchespage";
import Rocketpage from "./components/Rocketpage";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
ReactDOM.render(
  <div className="body">
    <BrowserRouter>
      <Navbar />
      <Route exact path="/Home" component={Homepage} />
      <Route path="/Launches" component={Launchespage} />
      <Route path="/Rocket" component={Rocketpage} />
      <Redirect to="/Home" />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
