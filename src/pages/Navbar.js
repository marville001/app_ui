import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/button";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../_actions/userActions";
import { AppBar, Grid, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    // width: "100%",
    // height: "10vh",
    // display: "flex",
    position: "fixed",
    transform: "translateZ(0)",
  },
  title: {
    color: "#000",
    flexGrow: 3,
    paddingLeft: "7%",
    fontSize: "30px",
    fontFamily: "Lobster",
  },
  login: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  button: {
    background: "#6159E5",
    border: "none",
    color: "white",
    padding: "8px 25px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "8px",
    fontFamily: "syne",
    cursor: "pointer",
    outline: "none",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <div className={classes.title}>
              {user.id ? (
                <Link to="/feeds" className={classes.link}>
                  Spende
                </Link>
              ) : (
                "Spende"
              )}
            </div>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <div className={classes.login}>
              {user.id ? (
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: "lowercase",
                    fontFamily: "Syne",
                    fontSize: "15px",
                  }}
                  onClick={() => dispatch(userLogout())}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/auth/login" className={classes.link}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      textTransform: "lowercase",
                      fontFamily: "Syne",
                      fontSize: "15px",
                    }}
                  >
                    login
                  </Button>
                </Link>
              )}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
