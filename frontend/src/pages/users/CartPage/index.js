import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";

const CartPage = () => {
  const navigate = useNavigate();
  const [productCart, setProductCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalprice] = useState("");

  const handleDelete = (productId) => {
    api
      .DeleteToCart(productId)
      .then((response) => {
        alert("Product removed from cart successfully!");
        setProductCart((prevCart) =>
          prevCart.filter((item) => item.product_id !== productId)
        );
      })
      .catch((error) => {
        console.error("Error removing product from cart:", error.message);
        alert("Failed to remove product from cart.");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchProductCart = async () => {
      setLoading(true);
      try {
        const productData = await api.getProductsCart();
        setProductCart(productData.data.products);
        console.log(productData);
        setTotalprice(
          productData.data.products
            .reduce(
              (acc, item) => acc + item.quantity * parseFloat(item.price_sale),
              0
            )
            .toFixed(2)
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductCart();
  }, [navigate]);

  return (
    <div className="section">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart">
              <div className="cart-container">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="title-cart">Shopping Cart</h2>
                  <span className="status-cart">
                    {productCart.length >= 1
                      ? `${productCart.length} Items`
                      : "0 Item"}
                  </span>
                </div>
                {productCart.length > 0 ? (
                  productCart.map((productCartItem, index) => (
                    <div
                      key={index}
                      className="card-product d-flex justify-content-between align-items-center"
                    >
                      <div className="card-product-img">
                        <img
                          src={`http://127.0.0.1:8000/${productCartItem.avatar_product}`}
                          alt={productCartItem.name}
                        />
                      </div>
                      <div className="card-product-name">
                        <p>{productCartItem.name}</p>
                      </div>
                      <div className="input-container">
                        <button className="btn-decrement">-</button>
                        <input
                          type="text"
                          className="input-field"
                          value={productCartItem.quantity}
                          readOnly
                        />
                        <button className="btn-increment">+</button>
                      </div>
                      <div className="card-product-price">
                        <p className="m-0">
                          $
                          {(
                            productCartItem.quantity *
                            parseFloat(productCartItem.price_sale)
                          ).toFixed(2)}
                        </p>
                      </div>
                      <div className="card-product-delete">
                        <i
                          className="bi bi-trash"
                          onClick={() =>
                            handleDelete(productCartItem.product_id)
                          }
                        ></i>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products in the cart</p> // Thông báo khi không có sản phẩm
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="sum">
              <div className="sum-container d-flex justify-content-between align-items-center">
                <div className="sum-qty">
                  <h2 className="title-cart text-center m-0">Summary</h2>
                </div>
                <div className="sum-total d-flex align-items-center">
                  <h3 className="m-0">Total price:</h3>
                  <p className="m-0">${totalPrice}</p>
                </div>
                <div className="submit d-flex align-items-center">
                  <Link to="/checkout">
                    <button className="sum-btn">CHECKOUT</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
