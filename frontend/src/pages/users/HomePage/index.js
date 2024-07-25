import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import productImg from '../Theme/assets/product01.png'; // Đổi tên cho dễ đọc
import bannerImg from '../Theme/assets/hotdeal.png'; // Đổi tên cho dễ đọc

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm state loading

  useEffect(() => {
    axios.get('https://api.hieuaptech.com/api/product.php') // Thay đổi URL API cho phù hợp
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* START TOP-MAIN */}
      <div className="section">
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-xs-6'>
              <div className='shop'>
                <div className='shop-img'>
                  <img src={productImg} />
                </div>
                <div className='shop-body'>'
                  <h3>Laptop Collection</h3>
                  <a className='cta-btn' href='#'>SHOP NOW <i class="bi bi-arrow-right-circle-fill"></i></a>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-xs-6'>
              <div className='shop'>
                <div className='shop-img'>
                  <img src={productImg} />
                </div>
                <div className='shop-body'>'
                  <h3>Laptop Collection</h3>
                  <a className='cta-btn' href='#'>SHOP NOW <i class="bi bi-arrow-right-circle-fill"></i></a>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-xs-6'>
              <div className='shop'>
                <div className='shop-img'>
                  <img src={productImg} />
                </div>
                <div className='shop-body'>'
                  <h3>Laptop Collection</h3>
                  <a className='cta-btn' href='#'>SHOP NOW <i class="bi bi-arrow-right-circle-fill"></i></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SHOP-MAIN */}

      {/* START LIST-PRODUCTS */}
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title'>
                <div className='section-nav d-flex'>
                  <h2>NEW PRODUCTS</h2>
                  <ul className='tab-nav d-flex'>
                    <li><a href='#'>Laptops</a></li>
                    <li><a href='#'>Smartphones</a></li>
                    <li><a href='#'>Cameras</a></li>
                    <li><a href='#'>Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='row'>
                {products.map(product => (
                  <div key={product.product_id} className='col-md-3 col-sm-6'>
                    <div className="product-card">
                      <div className="product-img">
                        <img src={product.image_url} alt={product.name} />
                      </div>
                      <div className="product-info">
                        <p className='product-category'>CATEGORY</p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">
                          ${product.price}
                          {product.price_sale && <del className="product-old-price">${product.price_sale}</del>}
                        </p>
                      </div>
                      <div className='product-rating'>
                      <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className='product-btns'>
                        <button><i className="bi bi-heart"></i></button>
                        <button><i className="bi bi-arrow-left-right"></i></button>
                        <button><i className="bi bi-eye"></i></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END LIST-PRODUCTS */}

      {/* START BANNER */}
      <div id='hot-deal' className='section'>
        <img src={bannerImg} alt="Hot Deal Banner" />
        <div className='hot-deal'>
          <ul className='hot-deal-countdown d-flex justify-content-center'>
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
          <a href='#'>SHOP NOW</a>
        </div>
      </div>
      {/* END BANNER */}

      {/* START SELLING-PRODUCT */}
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title'>
                <div className='section-nav d-flex'>
                  <h2>TOP SELLING</h2>
                  <ul className='tab-nav d-flex'>
                    <li><a href='#'>Laptops</a></li>
                    <li><a href='#'>Smartphones</a></li>
                    <li><a href='#'>Cameras</a></li>
                    <li><a href='#'>Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='row'>
                {[1, 2, 3, 4].map(index => (
                  <div key={index} className='col-md-3 col-sm-6'>
                    <div className="product-card">
                      <div className="product-img">
                        <img src={productImg} alt={`Top Selling Product ${index}`} />
                      </div>
                      <div className="product-info">
                        <p className='product-category'>CATEGORY</p>
                        <h3 className="product-name">Product Name</h3>
                        <p className="product-price">$99.99
                          <del className="product-old-price">$990.00</del>
                        </p>
                      </div>
                      <div className='product-rating'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className='product-btns'>
                        <button><i className="bi bi-heart"></i></button>
                        <button><i className="bi bi-arrow-left-right"></i></button>
                        <button><i className="bi bi-eye"></i></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SELLING-PRODUCT */}

      {/* START NEWSLETTER */}
      <div id='newsLetter' className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='newsLetter'>
                <p>Sign Up for the <strong>NEWSLETTER</strong></p>
              </div>
              <form>
                <input className='input' type='email' placeholder='Enter Your Email' />
                <button className='newsLetter-btn'><i className="bi bi-envelope"></i> Subscribe</button>
              </form>
              <ul className='d-flex newsLetter-follow justify-content-center'>
                <li><a href='#'><i className="bi bi-facebook"></i></a></li>
                <li><a href='#'><i className="bi bi-twitter"></i></a></li>
                <li><a href='#'><i className="bi bi-instagram"></i></a></li>
                <li><a href='#'><i className="bi bi-pinterest"></i></a></li>
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
