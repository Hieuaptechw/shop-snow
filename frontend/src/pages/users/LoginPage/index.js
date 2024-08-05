import React, { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../../api/api";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); 

    try {
      const response = await api.Login(email, password);
      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        setSuccess("Login successful");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        setError(response.data.message || "Login failed: Unknown error");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during login.");
      }
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="section">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="container">
        <div className="login">
          <h2>Login</h2>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input type="submit" className="button" value="Login" />
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <div className="login1">
              <span className="login1">
                Don't have an account?
                <Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
