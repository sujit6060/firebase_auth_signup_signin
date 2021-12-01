import React from "react";
import { useUserContext } from "../context/userContext";

const Home = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <h1>Welcome To Our Site</h1>
      <h3>Name : {user.displayName}</h3>
      <h3>Email : {user.email}</h3>
      <br />

      <button className="btn btn-danger" onClick={logoutUser}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
