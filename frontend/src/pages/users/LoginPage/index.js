import React, { useState } from "react";
import api from "../../../api/api";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.Login(email, password);
      if (response.data.status) {
        localStorage.setItem('token', response.data.token);
        setSuccess("Login successful");
        setTimeout(() => window.location.href = "/home", 1500);
      } else {
        setError(response.data.message || "Login failed: Unknown error");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError( error.response.data.message);
      } else {
        setError("An error occurred during login.");
      }
      setTimeout(() => setError(""), 3000); 
    }
    
  };

  return (
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
              <a href="/register">Register</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
