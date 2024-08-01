import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../../api/api";
import product from "../Theme/assets/product01.png";
import banner from "../Theme/assets/hotdeal.png";
import ProductHome from "../../../component/home/ProductHome";

const HomePage = () => {
  const [newproducts, setNewProducts] = useState([]);
  const [topsellings, setTopSellings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchnewProducts = async () => {
      try {
        const productData = await api.getNewProducts();
        setNewProducts(productData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchTopSelling = async () => {
      try {
        const productData = await api.getTopSelling();
        setTopSellings(productData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchnewProducts();
    fetchTopSelling();
  }, []);
console.log(newproducts);
  return (
    <>
      {/* START TOP-MAIN */}
      <div className="section">
        <div className="container">
          <div className="row">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src={product} alt="Product" />
                  </div>
                  <div className="shop-body">
                    <h3>Laptop Collection</h3>
                    <a className="cta-btn" href="#">
                      SHOP NOW <i className="bi bi-arrow-right-circle-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {newproducts.map((newproduct, index) => (
                  <ProductHome key={index} newproduct={newproduct} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END LIST-PRODUCTS */}

      {/* START BANNER */}
      <div id="hot-deal" className="section">
        <img src={banner} alt="Hot Deal Banner" />
        <div className="hot-deal">
          <ul className="hot-deal-countdown d-flex justify-content-center">
            <li><div><h3>02</h3><span>DAYS</span></div></li>
            <li><div><h3>10</h3><span>HOURS</span></div></li>
            <li><div><h3>34</h3><span>MINS</span></div></li>
            <li><div><h3>60</h3><span>SECS</span></div></li>
          </ul>
          <h2>HOT DEAL THIS WEEK</h2>
          <p>NEW COLLECTION UP TO 50% OFF</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>
      {/* END BANNER */}

      {/* START SELLING-PRODUCT */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="section-nav d-flex">
                  <h2>TOP SELLING</h2>
                  <ul className="tab-nav d-flex">
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {topsellings.map((topselling, index) => (
                  <ProductHome key={index} newproduct={topselling} index={index} />
                ))}
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
                  <i className="bi bi-envelope"></i> Subscribe
                </button>
              </form>
              <ul className="d-flex newsLetter-follow justify-content-center">
                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
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
