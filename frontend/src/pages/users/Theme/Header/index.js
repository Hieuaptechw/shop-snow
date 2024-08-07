import React, { useEffect, useState } from "react";
import { useNavigate,Link  } from "react-router-dom";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo.png";
import api from "../../../../api/api";

const Header = () => {
  const [user, setUser] = useState(null);
  const [categorys, setCategorys] = useState([]);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [isLogout, setisLogout] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); 
  const handeLogout = async () => {
    try {
      await api.logout();
      localStorage.removeItem('token');
      setisLogout(true);
      setUser("");
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.getCategory();
        setCategorys(response.data);
      } catch (error) {
        setError(error.message);
      }
    };


    const fetchProfile = async () => {
      try {
        const response = await api.getProfile();
        if (response.data.status) {
          setUser(response.data.data);
          setRole(response.data.data.role);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching profile data.");
      }
      if (isLogout) {
        navigate('/login');
    }
    };
    fetchCategory();
    fetchProfile();

  }, [isLogout,useNavigate]);
  return (
    <header className="header">
      {/* START-HEADER-TOP */}
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <ul className="d-flex list-unstyled header-link">
                <li>
                  <Link to="#">
                    <i className="bi bi-telephone"></i>+84 0334982576
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="bi bi-envelope"></i>hieuaptech@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="bi bi-geo-alt"></i>285 Doi Can
                  </Link>
                </li>
              </ul>
              <ul className="d-flex header-link">
                <li>
                  <Link to="#">
                    <i className="bi bi-currency-dollar"></i>VND
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <i className="bi bi-person"></i>
                    {user ? user.name : "My Account"}
                  </Link>
                  <ul className="dropdown-menu">
                    {user ? (
                      <>
                        {role === 'admin' && (
                          <li>
                            <Link to="/admin">Admin</Link>
                          </li>
                        )}
                        <li>
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                          <Link
                            to="/logout"
                            onClick={(e) => {
                              e.preventDefault();
                               handeLogout();
                            }}
                          >
                            Log Out
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Log In</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
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
                <Link className="logo" to="/">
                  <img src="https://admin.hieuaptech.com/img/logo/logoauth-1.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-search">
                <form action={`/search/${query}`}>
                  <select className="header-input-select">
                    <option>All Categories</option>
                    {categorys.map((category, index) => (
                      <option key={index} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="input-search"
                    type="text"
                    placeholder="Search Here"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
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
                  <Link to="/wishlist">
                    <i className="bi bi-heart"></i>
                    <span>Your Wishlist</span>
                  </Link>
                </div>
                <div>
                  <Link to="/cart">
                    <i className="bi bi-cart3"></i>
                    <span>Your Cart</span>
                  </Link>
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
              {categorys.map((category, index) => (
                <li key={index}>
                  <Link to={`/shop/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
                
              ))}
                <li>
                <Link to="/address">Store Address</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END MENU */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  );
};

export default Header;