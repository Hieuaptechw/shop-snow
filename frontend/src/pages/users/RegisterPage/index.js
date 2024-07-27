import React, { useState } from "react";
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
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    try {
      const response = await api.Register(
        name,
        email,
        password,
        phone,
        address
      );

      if (response.data.status === "success") {
        setSuccess("Đăng ký thành công! Bạn có thể đăng nhập.");
       
      } else {
        setError("Đăng ký thất bại. Vui lòng thử lại.");
        setTimeout(() => setError(""), 3000);
      }
    } catch (error) {
      console.error("Error registering:", error);
      setError("Có lỗi xảy ra trong quá trình đăng ký.");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="container">
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
             
              <input type="submit" class="button" value="Signup" />
              </div>
    
            </div>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div class="signup">
            <span class="signup">
              Already have an account?
              <a href="/login">Login</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
