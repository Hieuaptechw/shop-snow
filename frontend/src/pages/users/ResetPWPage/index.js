import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";
import { toast } from "react-toastify";

const ResetPWPage = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [passwordConfirmation, setPasswordCF] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const code_send = localStorage.getItem("code_send");

    if (email && code_send) {
      setValid(true);
    } else {
      navigate("/error"); // Thay đổi đường dẫn nếu cần
    }
  }, [navigate]);

  const handleSetPW = async (event) => {
    event.preventDefault();

    if (!valid) {
      toast.error("Invalid or expired code. Please request a new one.");
      return;
    }

    setLoading(true);

    if (password !== passwordConfirmation) {
      setLoading(false);
      toast.error("Password and confirm password do not match.");
      return;
    }

    try {
      const email = localStorage.getItem("email");
      const response = await api.setPassword(email, password, code);
      if (response.data.status) {
        toast.success("Password reset successfully.");
        localStorage.removeItem("email");
        localStorage.removeItem("code_send");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(response.data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Error while resetting password:", error);
      toast.error(error.response?.data?.message || "An error occurred while resetting the password.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="section">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="container">
        <div className="reset">
          <h2>Reset Password</h2>
          <div className="reset-form">
            <form onSubmit={handleSetPW}>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordCF(e.target.value)}
                  required
                />
              </div>
              <p
                type="button"
                className="toggle-visibility"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? "Hide password" : "Show password"}
              </p>
              <input type="submit" className="button" value="Change Password" />
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

export default ResetPWPage;
