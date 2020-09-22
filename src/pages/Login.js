import React, { useEffect, useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../_actions/userActions";

const Login = (props) => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.id) {
      props.history.push("/feeds/");
    }
    return () => {};
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 5) {
      dispatch(userLogin({ email, password }));
    } else {
      alert("Email or Password field should have more than 5 chars ");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ width: "40%" }}>
      <h2
        style={{
          paddingTop: "30px",
          textAlign: "center",
          width: "100%",
          fontFamily: "syne",
          color: "grey",
        }}
      >
        Sign In
      </h2>
      <div
        style={{
          marginLeft: "15%",
          width: "70%",
        }}
      >
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            // required
            // fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{
              fontFamily: "Syne",
              textTransform: "lowercase",
              fontSize: "15px",
              margin: "24px 0 16px",
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container mt={4}>
            <Grid item xs>
              <Link
                style={{ textDecoration: "none", fontSize: "12px" }}
                to="/forgotpassword"
                variant="subtitle1"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                style={{ textDecoration: "none", fontSize: "12px" }}
                to="/auth/signup"
                variant="subtitle1"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Login;
