import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import Launchespage from "./components/Launchespage";
import Rocketpage from "./components/Rocketpage";
import Navbar from "./components/Navbar/Navbar";
import Rocket from "./components/Detailpage/Rocket";
import "./index.css";
import { QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter, Route } from "react-router-dom";
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Route path="/Home" component={Homepage} />
        <Route path="/Launches" component={Launchespage} />
        <Route exact path="/Rocket" component={Rocketpage} />
        <Route path="/Rocket/:rocket_id" component={Rocket} />
      </BrowserRouter>
    </div>
  </QueryClientProvider>,
  document.getElementById("root")
);
