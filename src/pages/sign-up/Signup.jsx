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
    <Paper sx={{ width: "500px", height: "400px", margin: "auto" }}>
      <div style={{ margin: "auto", width: "350px", textAlign: "center" }}>
        <TextField
          sx={{
            width: "350px",
            margin: "40px 0",
          }}
          label="Email"
          value={signin.email}
          name="email"
          onChange={handleSignin}
        />
        <TextField
          sx={{
            width: "350px",
            margin: "10px 0 20px",
          }}
          label="Password"
          value={signin.pass}
          name="pass"
          onChange={handleSignin}
        />
        <Button onClick={onSubmit}>Signin</Button>
      </div>
    </Paper>
  );
}
