import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://your-backend-url/api/login", {
        email,
        password
      });

      // Xử lý phản hồi từ server
      console.log(response.data);
      // Lưu token hoặc thông tin user vào localStorage hoặc context nếu cần thiết
    } catch (error) {
      if (error.response) {
        // Lỗi từ server
        setError(error.response.data.message);
      } else {
        // Lỗi khác
        setError("Có lỗi xảy ra, vui lòng thử lại.");
      }
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="login">
          <h2>Login</h2>
          <form className="form-login" onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {error && <div className="error">{error}</div>}
            <button className="btn btn-primary" type="submit">Đăng Nhập</button>
          </form>
          <a href="#">Forgot Password</a>
          <p>Don't have an account? <a href="#">Sign up</a> </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
