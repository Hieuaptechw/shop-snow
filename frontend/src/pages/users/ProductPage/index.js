import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../../api/api";
import NavComponent from "./nav";

const ProductPage = () => {

  return (
    <>
      {/* START-HEADER */}
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="breadcrumb-tree d-flex">
                <li><a href="#">HOME</a></li>

                <li><a href="#">ALL CATEGORIES</a></li>

                <li><a href="#">ACCESSORIES</a></li>

                <li><a href="#">HEADPHONES</a></li>

                <li><a href="#">Product name goes here</a></li>
              </ul>

            </div>

          </div>

        </div>
      </div>
      {/* END-HEADER */}

      
      {/* START-MAIN */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="product-img">
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
                <div className="d-flex flex-wrap">
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
                    Size
                    <select className="input-select">
                      <option>S</option>
                      <option>L</option>
                    </select>
                  </label>
                  <label>
                    COLOR
                    <select className="input-select">
                      <option>red</option>
                      <option>green</option>
                    </select>
                  </label>
                </div>
                <div className="add-to-cart">
                  <div className="qty-label d-flex">
                    QTY
                    <div className="input-number">
                      <button className="qty-down">-</button>
                      <input type="text"></input>
                      <button className="qty-up">+</button>
                    </div>
                    <button className="btn btn-danger btn-add">ADD TO CART</button>
                  </div>
                  <ul className="product-btns d-flex">
                    <li>
                      <a href="/wishlist">
                        <i className="bi bi-heart"></i>
                        <span>ADD TO WISHLIST</span>
                      </a>
                    </li>
                    <li>
                      <a href="/wishlist">
                        <i class="bi bi-arrow-left-right"></i>
                        <span>ADD TO COMPARE</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="product-links d-flex">
                    <li>CATEGORY:</li>
                    <li><a href="#">HEADPHONES</a></li>
                    <li><a href="#">ACCESSORIES</a></li>
                  </ul>
                  <ul className="product-links d-flex">
                    <li>SHARE:</li>
                    {/* code... */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END-MAIN */}
    </>
  );
};

export default ProductPage;