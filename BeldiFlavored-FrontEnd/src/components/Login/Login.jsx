import React, { useState, useContext } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"; // Adjust the path as necessary

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/customer/get",
        {
          params: {
            email,
            password,
          },
        }
      );
      // Handle successful login
      console.log(response.data);
      login(); // Set authentication state to true
      navigate("/admindash"); // Redirect to the admin dashboard page
    } catch (error) {
      setShowErrorMessage(true);
      setLoginStatus("Login failed. Check your credentials.");
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="global">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          {showErrorMessage && (
            <span className="showMessage">{loginStatus}</span>
          )}
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Sign in
          </button>
          <div className="register-link">
            <p className="acc">
              Don't have an account? <a href="/sign_up"> Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
