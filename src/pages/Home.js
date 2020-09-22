import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { Route } from "react-router-dom";

import Description from "./Description";
// import Login from "./Login";
// import Signup from "./Signup";
// import ForgotPassword from "./ForgotPassword";

import Image from "../components/Image.js";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    height: "90vh",
    width: "100%",
    paddingTop: "10vh",
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.content}>
        <Image />
        <Description />
      </div>
    </div>
  );
}
