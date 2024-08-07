import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await api.Login(email, password);
      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        toast.error(response.data.message || "Login failed: Unknown error");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during login.");
      }
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
            <div className="login1">
              <span className="login1">
                Don't have an account?
                <Link to="/register">Register</Link>
              </span>
              <br />
              <span className="forgot-password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
