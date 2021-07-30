import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManagePolicy from "./Components/ManagePolicy";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/policy/:policyId/:customerId" component={ManagePolicy} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
