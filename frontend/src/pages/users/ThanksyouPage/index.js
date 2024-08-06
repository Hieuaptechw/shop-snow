import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const ThanksyouPage = () => {
  const { order_code } = useParams();
  const [validOrder, setValidOrder] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderCode = localStorage.getItem("order_code");
    if (storedOrderCode && storedOrderCode === order_code) {
      setLoading(false);
      setValidOrder(true);
      localStorage.removeItem("order_code");
    } else {
      setValidOrder(false);
      navigate("/");
    }
  }, [order_code, navigate]);
  return (
    <div className="section">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="container-successfully">
        <div className="top text-center">
          <h1>THANK YOU</h1>
          <p>Your oder was completed successfully</p>
          {order_code && (
            <p>
              Your order code is: <strong>#{order_code}</strong>
            </p>
          )}
        </div>

        <div className="main  d-flex align-items-center">
          <i class="bi bi-envelope-at"></i>
          <span>
            An email recept including the details bout your oder has been sent
            to the email address provided. Please keep it for your records
          </span>
        </div>

        <div className="footer-1 d-flex align-items-center">
          <span>
            Your can visit the My Account page at any time to check the status
            of your order. Or click here to print a copy of your receipt{" "}
          </span>
          <div className="d-flex">
            <i class="bi bi-laptop"></i>
            <i class="bi bi-printer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksyouPage;
