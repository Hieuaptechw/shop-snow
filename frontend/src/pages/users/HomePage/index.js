import React from "react";
import "./style.css";
import product from "../Theme/assets/product01.png";
import banner from "../Theme/assets/hotdeal.png";
const HomePage = () => {
  return (
    <>
      {/* START TOP-MAIN */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={product} />
                </div>
                <div className="shop-body">
                  '<h3>Laptop Collection</h3>
                  <a className="cta-btn" href="#">
                    SHOP NOW <i class="bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={product} />
                </div>
                <div className="shop-body">
                  '<h3>Laptop Collection</h3>
                  <a className="cta-btn" href="#">
                    SHOP NOW <i class="bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={product} />
                </div>
                <div className="shop-body">
                  '<h3>Laptop Collection</h3>
                  <a className="cta-btn" href="#">
                    SHOP NOW <i class="bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SHOP-MAIN */}

      {/* START LIST-PRODUCTS */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="section-nav d-flex">
                  <h2>NEW PRODUCTS</h2>
                  <ul className="tab-nav d-flex">
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">Smartphones</a>
                    </li>
                    <li>
                      <a href="#">Cameras</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END LIST-PRODUCT */}

      {/* START BANNER */}
      <div id="hot-deal" className="section">
        <img className="hot-deal-banner" src={banner} alt="Hot Deal Banner" />
        <div className="hot-deal">
          <ul className="hot-deal-countdown d-flex justify-content-center">
            <li>
              <div>
                <h3>02</h3>
                <span>DAYS</span>
              </div>
            </li>
            <li>
              <div>
                <h3>10</h3>
                <span>HOURS</span>
              </div>
            </li>
            <li>
              <div>
                <h3>34</h3>
                <span>MINS</span>
              </div>
            </li>
            <li>
              <div>
                <h3>60</h3>
                <span>SECS</span>
              </div>
            </li>
          </ul>
          <h2>HOT DEAL THIS WEEK</h2>
          <p>NEW COLLECTION UP TO 50% OFF</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>
      {/* END BANNER */}
      {/* 
      START SELLING-PRODUCT */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="section-nav d-flex align-items-center">
                  <h2>TOP SELLING</h2>
                  <ul className="tab-nav d-flex">
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">Smartphones</a>
                    </li>
                    <li>
                      <a href="#">Cameras</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 col-sm-6 m-0">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <div className="product-img">
                      <img src={product} />
                    </div>
                    <div className="product-info">
                      <p className="product-category">CATEGORY</p>
                      <h3 className="product-name">Product Name</h3>
                      <p className="product-price">
                        $99.99
                        <del class="product-old-price">$990.00</del>
                      </p>
                    </div>
                    <div className="product-rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div className="product-btns">
                      <button>
                        <i class="bi bi-heart"></i>
                      </button>
                      <button>
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="product-addtc">
                      <a
                        href={`shop/product/`}
                        className="btn btn-danger"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SELLING-PRODUCT */}

      {/* START NEWSLETTER */}
      <div id="newsLetter" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsLetter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
              </div>
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="newsLetter-btn">
                  <i class="bi bi-envelope"></i> Subscribe
                </button>
              </form>
              <ul className="d-flex newsLetter-follow justify-content-center">
                <li>
                  <a href="#">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END NEWSLETTER */}
    </>
  );
};

export default HomePage;
