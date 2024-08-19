import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [tolalPrice, setTotalprice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shippingAddress, setShippingAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [payment, setPayment] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleCheckOut = () => {
    if (!isChecked) {
      toast.warning("Please accept the terms & conditions to proceed.");
      return;
    }

    if (tolalPrice > 0 && shippingAddress.trim() !== '' && payment.trim() !== '') {
      api.orderProduct(shippingAddress, notes, payment)
        .then(response => {
          toast.success('Success to checkout!')
          localStorage.setItem('order_code', response.data.order.order_code);
          const thankYouUrl = `/checkout/thanksyou/${response.data.order.order_code}`;
          navigate(thankYouUrl);

        })
        .catch(error => {
          console.error('Error Checkout:', error.message);
          toast.error('Failed to Checkout!');
        });
    } else if (shippingAddress.trim() === '') {
      toast.warning('Shipping address cannot be empty!');
    } else if (payment.trim() === '') {
      toast.warning('Please select a payment method!');
    } else if (tolalPrice <= 0) {
      toast.warning('Total price must be greater than 0 to proceed with checkout!');
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await api.getProfile();
        if (response.data.status) {
          setProfile(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching profile data.");
      }
    };
    const fetchProductCart = async () => {
      try {
        const productData = await api.getProductsCart();
        setProductCart(productData.data.products);
        setTotalprice(productData.data.cart.total_price)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductCart();
    fetchProfile();
  }, [navigate]);
  console.log(tolalPrice);
  return (
    <>
      <div className="section">
        {loading && (
          <div className="overlay">
            <div className="spinner"></div>
          </div>
        )}
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-7">
                <div className="billing-details">
                  <h3 className="title">BILLING ADDRESS</h3>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      value={profile.name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={profile.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address details"
                      value={shippingAddress}
                      onChange={e => setShippingAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="city"
                      placeholder="City"
                      value="Ha Noi"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="country"
                      placeholder="Country"
                      value="VIET NAM"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="tel"
                      name="tel"
                      placeholder="Telephone"
                      value={profile.phone}
                    />
                  </div>
                </div>
                <div className="shiping-details">
                  <div className="section-title">
                    <h3 className="title">Shiping address</h3>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="shiping-address" />
                    <label for="shiping-address">
                      Ship to a difrent address?
                    </label>
                  </div>
                </div>
                <div className="order-notes">
                  <textarea
                    className="input"
                    placeholder="Order Notes"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-5 order-details">
                <div className="section-title text-center">
                  <h3 className="title">Your Order</h3>
                </div>
                <div className="order-summary">
                  <div className="order-col">
                    <div>
                      <strong>PRODUCT</strong>
                    </div>
                    <div>
                      <strong>TOTAL</strong>
                    </div>
                  </div>
                  <div className="order-products">
                    {productCart.map((productCartItem, index) => (
                      <div className="order-col" key={index}>
                        <div>
                          <span>{productCartItem.quantity}x  | {productCartItem.name}</span>
                          <span>|{productCartItem.size ? productCartItem.size : ''}</span>
                          <span>|{productCartItem.weight ? productCartItem.weight : ''}</span>
                          <span>|{productCartItem.color ? productCartItem.color : ''}</span>
                        </div>
                        <div><span>${productCartItem.price_sale * productCartItem.quantity}</span></div>
                      </div>
                    ))}
                  </div>
                  <div className="order-col">
                    <div><span>Shiping</span></div>
                    <div>
                      <strong>FREE</strong>
                    </div>
                  </div>
                  <div className="order-col">
                    <div>
                      <strong>TOTAL</strong>
                    </div>
                    <div>
                      <strong className="order-total">${tolalPrice}</strong>
                    </div>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="input-radio">
                    <input
                      type="radio"
                      name="payment"
                      id="payment-1"
                      value="direct-bank-transfer"
                      checked={payment === 'direct-bank-transfer'}
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="payment-1">Direct Bank Transfer</label>
                  </div>
                  <div className="input-radio">
                    <input
                      type="radio"
                      name="payment"
                      id="payment-2"
                      value="cod"
                      checked={payment === 'cod'}
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="payment-2">COD - Cash on Delivery</label>
                  </div>
                </div>
                <div className="input-checkbox">
                  <input type="checkbox" id="terms" checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)} />
                  <label for="terms">
                    I've read and accpet the  <a href="#">-terms & conditions</a>
                  </label>
                </div>

                <button type="button" className="primary-btn order-submit" onClick={handleCheckOut}>
                  Place order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
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
                    <i className="bi bi-facebook"></i>
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

export default CheckoutPage;
