import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  SupportPage,
  Accounts,
  AccountsReg,
  AccountsSignIn,
} from "./App";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/Support" element={<SupportPage />} />
      <Route exact path="/Accounts" element={<Accounts />} />
      <Route exact path="/Register" element={<AccountsReg />} />
      <Route exact path="/Signin" element={<AccountsSignIn />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
