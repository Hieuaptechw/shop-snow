import React from "react";
import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-9 ">
              <ul className="d-flex list-unstyled header-link">
                <li>
                  <a href="">
                    <i class="bi bi-telephone"></i>+84 0334982576
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-envelope"></i>hieuaptech@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-geo-alt"></i>285 Doi Can
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
            <ul className="d-flex list-unstyled header-link justify-content-end">
                <li>
                  <a href="#">
                  <i class="bi bi-currency-dollar"></i>VND
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i class="bi bi-person"></i>My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header"></div>
    </header>
  );
};

export default Header;
