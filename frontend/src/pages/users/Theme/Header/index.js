import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../assets/logo.png";
import api from "../../../../api/api";

const Header = () => {
  const [user, setUser] = useState(null);
  const [categorys, setCategorys] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    const fetchCategory = async () => {
      try {
        const response = await api.getCategory();
        setCategorys(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategory();
  }, []);

  return (
    <header className="header">
      {/* START-HEADER-TOP */}
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <ul className="d-flex list-unstyled header-link">
                <li>
                  <a href="#">
                    <i className="bi bi-telephone"></i>+84 0334982576
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-envelope"></i>hieuaptech@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-geo-alt"></i>285 Doi Can
                  </a>
                </li>
              </ul>
              <ul className="d-flex header-link">
                <li>
                  <a href="#">
                    <i className="bi bi-currency-dollar"></i>VND
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <i className="bi bi-person"></i>
                    {user ? user.name : "My Account"}
                  </a>
                  <ul className="dropdown-menu">
                    {user ? (
                      <>
                        <li>
                          <a href="/profile">Profile</a>
                        </li>
                        <li>
                          <a
                            href="/logout"
                            onClick={(e) => {
                              e.preventDefault();
                              localStorage.removeItem("api_token");
                              localStorage.removeItem("user");
                              window.location.href = "/login";
                            }}
                          >
                            Log Out
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <a href="/login">Log In</a>
                        </li>
                        <li>
                          <a href="/register">Register</a>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END-HEADER-TOP */}

      {/* START-HEADER-MAIN */}
      <div className="header-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 m-0">
              <div className="header-logo">
                <a className="logo" href="#">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="header-input-select">
                    <option>All Categories</option>
                    {categorys.map((category) => (
                      <option key={category.id} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="input-search"
                    type="text"
                    placeholder="Search Here"
                  />
                  <button className="search-btn" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 m-0">
              <div className="header-ctn">
                <div>
                  <a href="#">
                    <i className="bi bi-heart"></i>
                    <span>Your Wishlist</span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="bi bi-cart3"></i>
                    <span>Your Cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END-HEADER-MAIN */}

      {/* START-MENU */}
      <nav className="nav-menu">
        <div className="container">
          <div>
            <ul className="main-nav nav nav-bar">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/checkout">Checkout</a>
              </li>
              {categorys.map((category) => (
                <li key={category.id}>
                  <a href={`/shop/${category.slug}`}>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* END MENU */}
    </header>
  );
};

export default Header;
