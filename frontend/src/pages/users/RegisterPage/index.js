import React, { useState } from "react";
import {Link} from "react-router-dom"
import api from "../../../api/api";
import "./style.css";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); 


    if (password !== confirmPassword) {
      setError("Password and confirm password do not match.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    try {
      const response = await api.Register(name, email, password, phone, address);
    
      if (response.data.status) {
        setLoading(false); 
        setSuccess("Registration successful! You can now log in.");
        setTimeout(() => window.location.href = "/login", 1500);
      } else {
        setError(response.data.message || "Registration failed. Please try again.");
        setTimeout(() => setError(""), 3000);
      }
    } catch (error) {
      console.error("Error registering:", error);
      if (error.response && error.response.data && error.response.data.message) {
        const errors = error.response.data.error;
        if (errors['email'] && errors['email'][0]) {
          setError(errors['email'][0]);
        } else if (errors['password'] && errors['password'][0]) {
          setError(errors['password'][0]);
        } else {
          setError("An error occurred during registration: " + error.response.data.error);
        }
      } else {
        setError("An error occurred during registration.");
      }
      setTimeout(() => setError(""), 3000);
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
            <div className="row ">
              <div className="col-md-6 ">
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
              <div className="col-md-6 ">   
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
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div className="signup">
            <span className="signup">
              Already have an account?
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
