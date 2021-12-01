import React, { useRef, useState } from "react";
import "./Register.css";
import { useUserContext } from "../context/userContext";

const Register = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && name && password) {
      registerUser(email, name, password);
    }
  };
  return (
    <div>
      <div id="register-form">
        <form className="form-signin" onSubmit={onSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign Up
          </h1>
          <br></br>
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            ref={nameRef}
            required
          />
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
            <i class="fas fa-user-plus"> Sign Up</i>
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Register;
