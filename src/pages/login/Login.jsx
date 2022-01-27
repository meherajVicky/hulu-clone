import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { fetchFacebookSignin, fetchLogin } from "../../redux/user";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Facebook } from "@mui/icons-material";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    pass: "",
  });
  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLogin((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ login, history, dispatch }));
    setLogin({ email: "", pass: "" });
  };
  const FbSignIn = async () => {
    dispatch(fetchFacebookSignin({ history, dispatch }));
  };
  return (
    <Paper sx={{ width: { xl: "40%", xs: "100%" }, margin: "auto" }}>
      <div
        style={{
          margin: "auto",
          width: { xl: "40%", xs: "100%" },
          textAlign: "center",
        }}
      >
        <h2>
          welcome to <span style={{ color: "rgb(0, 237, 130)" }}>hulu</span>
        </h2>
        <TextField
          sx={{
            width: "80%",
            margin: "40px 0",
          }}
          label="Email"
          value={login.email}
          name="email"
          onChange={handleLogin}
        />
        <TextField
          sx={{
            width: "80%",
            margin: "40px 0",
          }}
          label="Password"
          value={login.pass}
          name="pass"
          onChange={handleLogin}
        />
        <br></br>
        <Button sx={{ margin: "10px" }} variant="outlined" onClick={onSubmit}>
          Login
        </Button>
        <br></br>
        <Button
          sx={{ margin: "10px" }}
          onClick={FbSignIn}
          variant="contained"
          endIcon={<Facebook />}
        >
          sign up with
        </Button>
        <Link style={{ display: "inline-block", width: "100%" }} to="/signup">
          <h3 style={{ color: "red", marginBottom: "5px" }}>create account?</h3>
        </Link>
      </div>
    </Paper>
  );
}
