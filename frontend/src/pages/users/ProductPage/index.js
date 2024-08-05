import React, { useState } from "react";
import "./style.css";
import product from "../Theme/assets/product01.png";
import banner from "../Theme/assets/hotdeal.png";

const ProductPage = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('description'); // default tab

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* START-MAIN */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="product-imgg">
                <img src="https://themewagon.github.io/electro/img/product01.png" />
                <img src="https://themewagon.github.io/electro/img/product01.png" />
                <img src="https://themewagon.github.io/electro/img/product01.png" />
              </div>
            </div>
            <div className="col-5">
              <div className="product-main-img">
                <img src="https://themewagon.github.io/electro/img/product01.png" />
              </div>
            </div>
            <div className="col-5">
              <div className="product-details">
                <h2 className="product-name">product name goes here</h2>
                <div className="d-flex flex-wrap align-items-center">
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <a className="review-link align-items-center d-flex" href="#">10 Review(s) | Add your review</a>
                </div>
                <div className="d-flex align-items-center">
                  <h3 className="product-price m-0">$980.00
                    <del className="product-old-price">$990.00</del>
                  </h3>
                  <span className="product-available">In Stock</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="product-options">
                  <label>
                    SIZE
                     <select className="input-select">
                      <option>S</option>
                      <option>L</option>
                    </select>
                  </label>
                  <label id="1">
                    COLOR
                    <select className="input-select">
                      <option>red</option>
                      <option>green</option>
                    </select>
                  </label>
                </div>
                <div className="add-to-cart">
                  <div className="qty-label d-flex align-items-center">
                    QTY
                    <div className="input-number">
                      <input type="text"></input>
                    </div>
                    <button className="btn btn-danger btn-add">ADD TO CART</button>
                  </div>
                  <ul className="product-btns d-flex align-items-center">
                    <li>
                      <a href="/wishlist">
                        <i className="bi bi-heart"></i>
                        <span>ADD TO WISHLIST</span>
                      </a>
                    </li>
                    <li id="1">
                      <a href="/wishlist">
                        <i className="bi bi-arrow-left-right"></i>
                        <span>ADD TO COMPARE</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="product-links d-flex">
                    <li>CATEGORY:</li>
                    <li id="1"><a href="#">HEADPHONES</a></li>
                    <li id="1"><a href="#">ACCESSORIES</a></li>
                  </ul>
                  <ul className="product-links d-flex">
                    <li>SHARE:</li>
                    <li id="2"><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li id="2"><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li id="2"><a href="#"><i className="bi bi-google"></i></a></li>
                    <li id="2"><a href="#"><i className="bi bi-envelope-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END-MAIN */}
      
      {/* START-REVIEW */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="product-tab">
                <ul className="tab-nav d-flex justify-content-center">
                  <li
                    className={activeTab === 'description' ? 'active' : ''}
                    onClick={() => handleTabClick('description')}
                  >
                    <a href="#">Description</a>
                  </li>
                  <li
                    className={activeTab === 'reviews' ? 'active' : ''}
                    onClick={() => handleTabClick('reviews')}
                  >
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
              {activeTab === 'description' && (
                <div className="tab-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              )}
              {activeTab === 'reviews' && (
               <div className="section">
                <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <div className="rating-content">
                            <div className="rating-avg d-flex">
                              <span>4.5</span>
                              <div className="rating-star">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                            <ul className="rating-content">
                              <li>
                                <div className="rating-stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                                <div className="rating-progress">
                                  <div className="icon"></div>
                                </div>
                                <span class="sum-1">3</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                                <div className="rating-progress">
                                  <div className="icon"></div>
                                </div>
                                <span class="sum-1">3</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                                <div className="rating-progress">
                                  <div className="icon"></div>
                                </div>
                                <span class="sum-1">3</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                                <div className="rating-progress">
                                  <div className="icon"></div>
                                </div>
                                <span class="sum-1">3</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                                <div className="rating-progress">
                                  <div className="icon"></div>
                                </div>
                                <span class="sum-1">3</span>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="review-1">
                          <ul className="reviews-1">
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                </div>

               </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* END-REVIEW */}

      <div className="container">
        <div className="col-md-12">
          <h2 className="text-center p-2">Related Products</h2>
          <div className="row">
            {/* Related products code here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
