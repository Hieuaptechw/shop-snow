import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../../api/api";
import NavComponent from "./nav";
import product from "../Theme/assets/product01.png";
import banner from "../Theme/assets/hotdeal.png";

const ProductPage = () => {

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
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <a className="review-link align-items-center d-flex" href="#">10 Review(s) | Add your review</a>
                </div>
                <div className="d-flex align-items-center">
                  <h3 className="product-price m-0">$980.00
                    <del class="product-old-price">$990.00</del>
                  </h3>
                  <span class="product-available">In Stock</span>
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
                        <i class="bi bi-arrow-left-right"></i>
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
                    <li id="2"><a href="#"><i class="bi bi-facebook"></i></a></li>
                    <li id="2"><a href="#"><i class="bi bi-twitter"></i></a></li>
                    <li id="2"><a href="#"><i class="bi bi-google"></i></a></li>
                    <li id="2"><a href="#"><i class="bi bi-envelope-fill"></i></a></li>
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
                          <li><a href="#">Reviews</a></li>
                      </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* END-REVIEW */}
      <div className="container">
      <div className="col-md-12">
        <h2 className="text-center p-2">Related Products</h2>
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
      
    </>
  );
};

export default ProductPage;