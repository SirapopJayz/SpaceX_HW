import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import Launchespage from "./components/Launchespage";
import Rocketpage from "./components/Rocketpage";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
=======
import "./index.css";
import { QueryClient, QueryClientProvider} from "react-query";
>>>>>>> adddetail_onpage
import { BrowserRouter, Redirect, Route } from "react-router-dom";
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/Home" component={Homepage} />
        <Route path="/Launches" component={Launchespage} />
        <Route path="/Rocket" component={Rocketpage} />
        <Redirect to="/Home" />
      </BrowserRouter>
    </div>
  </QueryClientProvider>,
  document.getElementById("root")
);
