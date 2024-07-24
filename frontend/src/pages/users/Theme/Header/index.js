import React from "react";
import "./style.css";
import logo from '../assets/logo.png';



const Header = () => {
  return (
    <header className="header">

      {/* START-HEADER-TOP */}
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <ul className="d-flex list-unstyled header-link">
                <li>
                  <a href="">
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
                <li>
                  <a href="#">
                    <i className="bi bi-person"></i>My Account
                  </a>
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
                    <option>Category 01</option>
                    <option>Category 02</option>
                  </select>
                  <input className="input-search" type="text" placeholder="Search Here" />
                  <button className="search-btn" type="submit">Search</button>
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
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Hot Deals</a></li>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Laptops</a></li>
                  <li><a href="#">Smartphones</a></li>
                  <li><a href="#">Cameras</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
          </div>
      </nav>
      {/* END MENU */}
    </header>
  );
};

export default Header;
