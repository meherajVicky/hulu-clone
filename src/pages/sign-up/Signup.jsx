import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { fetchSignin } from "../../redux/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signin, setSignin] = useState({
    email: "",
    pass: "",
  });
  const handleSignin = (event) => {
    const { name, value } = event.target;
    setSignin((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchSignin({ signin, history, dispatch }));
    setSignin({ email: "", pass: "" });
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
          create your <span style={{ color: "rgb(0, 237, 130)" }}>hulu</span>{" "}
          account
        </h2>
        <TextField
          sx={{
            width: "80%",
            margin: "40px 0",
          }}
          label="Email"
          value={signin.email}
          name="email"
          onChange={handleSignin}
        />
        <TextField
          sx={{
            width: "80%",
            margin: "40px 0",
          }}
          label="Password"
          value={signin.pass}
          name="pass"
          onChange={handleSignin}
        />
        <Button sx={{ margin: "10px" }} variant="contained" onClick={onSubmit}>
          Signin
        </Button>
      </div>
    </Paper>
  );
}
