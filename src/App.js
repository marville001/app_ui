import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home.js";
import Feeds from "./pages/Feeds.js";
import Navbar from "./pages/Navbar.js";
import FeedDetails from "./pages/FeedDetails.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import ForgotPassword from "./pages/ForgotPassword.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feeds/:id" component={FeedDetails} />
        <Route path="/feeds" component={Feeds} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
    </div>
  );
}
