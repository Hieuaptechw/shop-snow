import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      toast.error("Password and confirm password do not match.");
      return;
    }

    try {
      const response = await api.Register(name, email, password, phone, address);

      if (response.data.status) {
        setLoading(false);
        toast.success("Registration successful! You can now log in.");
        setTimeout(() => window.location.href = "/login", 1500);
      } else {
        setLoading(false);
        toast.error(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);

      if (error.response && error.response.data) {
        console.log(error.response.data);

        const errors = error.response.data.error || {};

        if (errors['email'] && errors['email'][0]) {
          toast.error(errors['email'][0]);
        } else if (errors['password'] && errors['password'][0]) {
          toast.error(errors['password'][0]);
        } else {
          toast.error("An error occurred during registration: " + (error.response.data.message || "Unknown error"));
        }
      } else {
        toast.error("An error occurred during registration.");
      }
    }
  };

  return (
    <div className="container">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="registration">
        <h2>Register</h2>
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  value={phone}
                  placeholder="Enter your phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-12">
                <input type="submit" className="button" value="Signup" />
              </div>
            </div>
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account?
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
