import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getProfileFetch } from "./_actions/userActions";

import Home from "./pages/Home.js";
import Feeds from "./pages/Feeds.js";
import Navbar from "./pages/Navbar.js";
import FeedDetails from "./pages/FeedDetails.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import ForgotPassword from "./pages/ForgotPassword.js";
import { useDispatch } from "react-redux";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileFetch());
    return () => {};
  }, []);
  return (
    <div className={classes.root}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feeds/:id" component={FeedDetails} />
        <Route path="/feeds" component={Feeds} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
      <CssBaseline />
    </div>
  );
}
