import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  const [index, setindex] = useState(false);
  const toggleIndex = () => {
    setindex((prevState) => !prevState);
  };
  return (
    <div className="container" style={{ cursor: "pointer" }}>
      {!index ? <Login /> : <Register />}
      <p onClick={toggleIndex} style={{ textAlign: "center" }}>
        {!index ? "New user?Click here " : "Already Have an Account"}
      </p>
    </div>
  );
}

export default Auth;
