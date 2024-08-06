import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import api from "../../../api/api";
import ProductDetails from "../../../component/product_details/ProductDetails";

const ProductPage = () => {
  const { id, category } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [priceSale, setPriceSale] = useState(null);
  const [imgProductDetails, setImgProductDetails] = useState([]);
  const [attributeProductDetails, setAttributeProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleAddToCart = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to add products to the cart.');
      return;
    }
    const productId = id;
    const quantity = 1; 
    const price = priceSale;

    api.AddToCart(productId, quantity, price)
      .then(response => {
        alert('Product added to cart successfully!');
      })
      .catch(error => {
        console.error('Error adding product to cart:', error.message);
        alert('Failed to add product to cart.');
      });
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 const [activeTab, setActiveTab] = useState('description');
  useEffect(() => {
    const fetchDetailsProduct = async () => {
      setLoading(true);
      try {
        const productData = await api.getProductsDetails(id);
        setProductDetails(productData.data.product);
        
        setPriceSale(productData.data.product[0].price_sale);
        setAttributeProductDetails(productData.data.details);
        setImgProductDetails(productData.data.images);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const product = await api.getProductsCategory(category);
        setProducts(product.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailsProduct();
    fetchProducts();
  }, [id]);


console.log(priceSale)
  return (
    <>
      <div className="section">
      {loading && (
        <div className="overlay1">
          <div className="spinner1"></div>
        </div>
      )}
        <div className="container">
          {productDetails.map((product, index) => (
            <div key={index} className="row">
              <div className="col-2">
                <div className="product-imgg">
                  {imgProductDetails.map((imgDetail, index) => (
                    <div key={index} className="product-image-item">
                       <img
                        src={`http://127.0.0.1:8000/${imgDetail.image_url}`}
                        alt={`Product Image ${index + 1}`}
                      /> 
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-5">
                <div className="product-main-img">
                   <img
                    src={`http://127.0.0.1:8000/${product.avatar_product}`}
                    alt={product.name}
                  /> 
                </div>
              </div>
              <div className="col-5">
                <div className="product-details">
                  <h2 className="product-name">{product.name}</h2>
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi bi-star-fill ${
                            i < Math.floor(product.average_rating)
                              ? "text-warning"
                              : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                    <a
                      className="review-link align-items-center d-flex"
                      href="#"
                    >
                      {product.average_rating} Review(s) | Add your review
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="product-price m-0">
                      ${product.price_sale}
                      <del className="product-old-price">${product.price}</del>
                    </h3>
                    <span className="product-available">In Stock</span>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                  <div className="product-options">
                    <label>
                      SIZE
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
                    <div className="qty-label d-flex align-items-center">
                      QTY
                      <div className="input-number">
                        <input type="text" defaultValue="1"></input>
                      </div>
                      <button
            className="btn btn-danger"
            onClick={() => handleAddToCart(product.product_id)}
          >
            ADD TO CART
          </button>
                    </div>
                    <ul className="product-btns d-flex align-items-center">
                      <li>
                        <a href="/wishlist">
                          <i className="bi bi-heart"></i>
                          <span>ADD TO WISHLIST</span>
                        </a>
                      </li>
                      <li>
                        <a href="/wishlist">
                          <i className="bi bi-arrow-left-right"></i>
                          <span>ADD TO COMPARE</span>
                        </a>
                      </li>
                    </ul>
                    <ul className="product-links d-flex">
                      <li>CATEGORY:</li>
                      <li>
                        <a href="#">{product.category_name}</a>
                      </li>
                      <li>
                        <a href="#">{product.subcategory_name}</a>
                      </li>
                    </ul>
                    <ul className="product-links d-flex">
                      <li>SHARE:</li>
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-envelope-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
                <div className="tab-content">
                  <h3>Product Reviews</h3>
                  <div className="review-item">
                    <p><strong>John Doe</strong> - ★★★★☆</p>
                    <p>This product is amazing!</p>
                  </div>
                  <div className="review-item">
                    <p><strong>Jane Smith</strong> - ★★★☆☆</p>
                    <p>Good value for the price.</p>
                  </div>
                  <p><a href="#">Add your review</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <h2 className="text-center p-2">Related Products</h2>
          <div className="row">
            {products.map((product, index) => (
                <ProductDetails key={index} productcategory={product} />
              ))}
          </div>
        </div>  
      </div>
    </>
  );
};

export default ProductPage;
