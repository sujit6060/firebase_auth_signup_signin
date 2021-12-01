import React, { useRef, useState } from "react";
import "./Login.css";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if ((email, password)) {
      signInUser(email, password);
    }
  };
  const forgetPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email).then(() => (emailRef.current.value = ""));
    }
  };
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={onSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign In
          </h1>

          <br></br>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            ref={emailRef}
            required
          />
          <br></br>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            ref={psdRef}
            required
          />
          <br></br>
          <button className="btn btn-secondary btn-block" type="submit">
            <i class="fas fa-sign-in-alt"> Sign In</i>
          </button>
          <br></br>
          <br></br>

          <p onClick={forgetPasswordHandler}>
            <a> Forgot Password </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
