import React, { useState } from "react";
import "./Register.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    const newUser = {
      firstname: userName,
      lastname: "", // Add a field for lastname if required
      email,
      password,
    };

    try {
      await axios.post("http://localhost:8080/api/v1/customer/add", newUser);
      // Handle successful registration
      navigate("/sign"); // Redirect to sign-in page
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="global">
      <div className="wrapper">
        <form onSubmit={createUser}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit" onClick={createUser}>
            Register
          </button>
          <div className="login-link">
            <p className="acc">
              Already have an account? <a href="/Sign">Sign in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
