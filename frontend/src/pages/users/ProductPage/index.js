import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../../api/api";
import NavComponent from "./nav";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Test();
  }, []);

  const Test = async () => {
    // let res = await api.Product_Details();
    // console.log(res);
    // if (res) {
    //   setProduct(res.data);
    // }
  };

  //check up down sản phẩm
  const [QtyValue, setQtyValue] = useState(0);

  const up = () => {
    let Up = QtyValue;
    setQtyValue(Up + 1);
  };

  const down = () => {
    let Down = QtyValue;
    if (Down > 0) {
      setQtyValue(Down - 1);
    } else {
      setQtyValue(Down);
    }
  };

  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">All Categories</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Accessories</a>
            </li>
          </ol>
        </nav>

        <div className="row align-items-start">
          <div className="product-img-main col">
            <img
              src="https://themewagon.github.io/electro/img/product06.png"
              alt=""
            />
            <div className="product-img-slide d-flex justify-content-center">
              <div className="product-img-slide-item">
                <img
                  src="https://themewagon.github.io/electro/img/product06.png"
                  alt=""
                />
              </div>
              <div className="product-img-slide-item">
                <img
                  src="https://themewagon.github.io/electro/img/product06.png"
                  alt=""
                />
              </div>
              <div className="product-img-slide-item">
                <img
                  src="https://themewagon.github.io/electro/img/product06.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="product-info col">
        
                <>
                  <h2>PRoductName</h2>
                  <div>
                    <span>
                      <div className="rating">
                        <div className="product-rating">
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                        </div>

                        <a className="review-link ml-10">
                          {" "}
                          10 review(s) | Add your review
                        </a>
                      </div>
                    </span>

                    <div className="product-detail d-flex align-items-center">
                      <h3 className="inline-block">
                        $980.00
                        <del className="product-old-price d-flex align-items-center ml-10">
                          $990.00
                        </del>
                      </h3>
                      <span className="product-available">IN STOCK</span>
                    </div>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="row gap">
                      <div className="col-5">
                        <label>
                          SIZE
                          <select className="input-select">
                            <option value="0">X</option>
                          </select>
                        </label>
                      </div>
                      <div className="col-7">
                        <label>
                          COLOR
                          <select className="input-select">
                            <option value="0"> Red</option>
                          </select>
                        </label>
                      </div>
                    </div>

                    <div className="row gap">
                      <div className="col-5">
                        Qty
                        <button className="btn btn-primary" onClick={up}>
                          +
                        </button>
                        <input
                          className="input-qty"
                          type="number"
                          value={QtyValue}
                        />
                        <button className="btn btn-primary" onClick={down}>
                          -
                        </button>
                      </div>

                      <div className="col-7">
                        <button className="btn btn-danger justify-content-evenly">
                          <i className="fa fa-shopping-cart"></i>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row gap">
                    <div className="col-5">
                      <a href="#">
                        <i className="fa fa-heart-o"></i>
                        Add to wishlist
                      </a>
                    </div>
                    <div className="col-7">
                      <a href="#" className="ml-100">
                        <i className="fa fa-exchange"></i>
                        Add to compare
                      </a>
                    </div>
                  </div>

                  <div className="d-flex gap">
                    <p>Category:</p>
                    <ul className="product-links d-flex">
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                    </ul>
                  </div>

                  <span className="product-links">
                    Share:
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-google"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-envelope"></i>
                    </a>
                  </span>
                </>
           
          </div>
        </div>

        <div>
          <NavComponent />
        </div>

        <div>
          <div>
            <div class="container text-center">
              <div class="row a gn-items-start">
                <div class="col-3">
                  <div class="card">
                    <img
                      src="https://themewagon.github.io/electro/img/product01.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h7>CATEGORY</h7>
                      <h5 className="name-card">PRODUCT NAME GOES HERE</h5>
                      <h3 className="price-card inline-block">
                        $980.00
                        <del className="product-old-price d-flex align-items-center ml-10">
                          $990.00
                        </del>
                      </h3>
                    </div>
                    <a href="#" className="btn btn-danger hidden-button">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="col-3">
                  <div className="card">
                    <img
                      src="https://themewagon.github.io/electro/img/product01.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h7>CATEGORY</h7>
                      <h5 className="name-card">PRODUCT NAME GOES HERE</h5>
                      <h3 className="price-card inline-block">
                        $980.00
                        <del className="product-old-price d-flex align-items-center ml-10">
                          $990.00
                        </del>
                      </h3>
                    </div>
                    <a href="#" className="btn btn-danger hidden-button">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="col-3">
                  <div className="card">
                    <img
                      src="https://themewagon.github.io/electro/img/product01.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h7>CATEGORY</h7>
                      <h5 className="name-card">PRODUCT NAME GOES HERE</h5>
                      <h3 className="price-card inline-block">
                        $980.00
                        <del className="product-old-price d-flex align-items-center ml-10">
                          $990.00
                        </del>
                      </h3>
                    </div>
                    <a href="#" className="btn btn-danger hidden-button">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="col-3">
                  <div className="card">
                    <img
                      src="https://themewagon.github.io/electro/img/product01.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h7>CATEGORY</h7>
                      <h5 className="name-card">PRODUCT NAME GOES HERE</h5>
                      <h3 className="price-card inline-block">
                        $980.00
                        <del className="product-old-price d-flex align-items-center ml-10">
                          $990.00
                        </del>
                      </h3>
                    </div>
                    <a href="#" className="btn btn-danger hidden-button">
                      Add to Cart
                    </a>
                  </div>
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