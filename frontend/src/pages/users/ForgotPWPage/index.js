import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";
import { toast } from "react-toastify";

const ForgotPWPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const getRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const handleForgot = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const response = await api.ForgotPassword(email);
      if (response.data.status) {
        toast.success("Password reset email sent successfully.");
        const randomStr = getRandomString(8);
        localStorage.setItem('email', email);
        localStorage.setItem('code_send', randomStr);
        setTimeout(() => {
          window.location.href = "/reset-password";
        }, 1500);
      } else {
        toast.error(response.data.error || "Failed to send: Unknown error.");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error while sending:", error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred while sending the request.");
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
        <div className="forgot">
          <h2>Forgot password</h2>
          <div className="forgot-form">
            <form onSubmit={handleForgot}>
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="submit" className="button" value="Send Email" />
            </form>
            <div className="login1">
              <span className="login1">
                Don't have an account?
                <Link to="/register">Register</Link>
              </span>
              <br />
              <span className="">
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPWPage;
