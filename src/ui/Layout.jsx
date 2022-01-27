import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import "./layout.css";

export default function Layout(props) {
  const isLogin = useSelector((s) => s.user.isLogin);
  console.log(isLogin);
  return (
    <>
      {isLogin ? (
        <div className="app">
          <Header />
          <div>{props.children}</div>
        </div>
      ) : (
        <div className="login">{props.children}</div>
      )}
    </>
  );
}
