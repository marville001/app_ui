import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
  },
  heading: {
    paddingTop: "30px",
    textAlign: "center",
    width: "100%",
    fontFamily: "syne",
    color: "grey",
  },
  root1: {
    marginLeft: "15%",
    width: "70%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h2 className={classes.heading}>Forgot Password</h2>
      <div className={classes.root1}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ fontFamily: "Syne", fontSize: "15px", textTransform: "lowercase" }}
          >
            Send Email
          </Button>
          <Grid container mt={4}>
            <Grid item xs>
              <Link style={{ textDecoration: "none" }} to="/auth/login" variant="subtitle1">
                Already have an account? Sign in
              </Link>
            </Grid>
            <Grid item>
              <Link style={{ textDecoration: "none" }}to="/auth/signup" variant="subtitle1">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}