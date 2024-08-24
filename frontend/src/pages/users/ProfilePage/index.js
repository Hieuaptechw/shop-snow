import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../../api/api";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [userOrder, setUserOrder] = useState([]);
  const [cartItem, setCartItem] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      try {
        const userData = await api.getProfile();
        setUser(userData.data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    const fetchCart = async () => {
      setLoading(true)
      try {
        const userData = await api.getProductsCart();
        setCartItem(userData.data.products.length);
      } catch (error) {
        setError(error.message);
      }
    };
    const fetchUserOrders = async () => {
      setLoading(true)
      try {
        const userData = await api.getUserOrders();
        setUserOrder(userData.data.orders);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
    fetchProfile();
    fetchUserOrders();
  }, []);
  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "status-pending";
      case "processing":
        return "status-processing";
      case "canceled":
        return "status-canceled";
      case "completed":
          return "status-completed";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="background">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-infor card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="avatar"
                  />
                  <h5 className="my-3">{user.name}</h5>
                  <p className="text-muted mb-4">{user.address}</p>
                </div>
              </div>
              
            </div>
           
            <div className="col-lg-8">
              {userOrder.map(order => (
                <div key={order.order_id} className="card mb-4">
                  <div className="card-body-infor ">
                    <h5>ID: #{order.order_id}   <p className={`card_body_status ${getStatusClass(order.status)}`}>
                      Status: {order.status}
                    </p></h5>
                 
               
                    <p>Shipping Address: {order.shipping_address}</p>
                    <p>Order Code: #{order.order_code}</p>

                    <div className="order-items ">
                      {order.order_items.map(item => (
                        <div key={item.order_item_id} className="card-product d-flex justify-content-between align-items-center row">
                          <div className='card-product-img col-2'>
                            <img src={`http://127.0.0.1:8000/${item.product.avatar_product}`} alt={item.product.name} />
                          </div>
                          <div className='card-product-name col-2'>
                            <p>{item.product.name}</p>
                          </div>
                          <div className='card-product-price col-2'>
                            <p className='m-0'>${item.price}</p>
                          </div>
                          <div className='card-product-quantity col-2'>
                          <p><span>Quantity:</span> {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                          <div className="totalprice">
                          <p className="total-price">Total Price: ${order.total_price}</p>
                          </div>
                    </div>
                  </div>
                </div>
              ))}
               <div className="card card-infor mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">{user.email}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-github fa-lg text-body"></i>
                      <p className="mb-0">{user.phone}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-twitter fa-lg text-twitter"></i>
                      <p className="mb-0">Order: {userOrder.length}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-instagram fa-lg text-instagram"></i>
                      <p className="mb-0">Cart: {cartItem}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg text-facebook"></i>
                      <p className="mb-0"></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
