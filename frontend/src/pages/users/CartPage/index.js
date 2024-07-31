import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const CartPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className='section'>
            <div className='container'>                      
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart'>
                            <div className='cart-container'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h2 className='title-cart'>Shopping Cart</h2>
                                    <span className='status-cart'>3 items</span>
                                </div>
                                <div className='card-product d-flex justify-content-between align-items-center'>
                                    <div className='card-product-img'>
                                        <img src='#' alt='Product' />
                                    </div>
                                    <div className='card-product-name'>
                                        <p>Product Name</p>
                                    </div>
                                    <div className="input-container">
                                        <button className="btn-decrement">-</button>
                                        <input type="text" className="input-field" value="0" />
                                        <button className="btn-increment">+</button>
                                    </div>
                                    <div className='card-product-price'>
                                        <p className='m-0'>$900.00</p>
                                    </div>
                                    <div className='card-product-delete'>
                                        <i className="bi bi-trash"></i>
                                    </div>
                                </div>
                                <div className='card-product d-flex justify-content-between align-items-center'>
                                    <div className='card-product-img'>
                                        <img src='#' alt='Product' />
                                    </div>
                                    <div className='card-product-name'>
                                        <p>Product Name</p>
                                    </div>
                                    <div className="input-container">
                                        <button className="btn-decrement">-</button>
                                        <input type="text" className="input-field" value="0" />
                                        <button className="btn-increment">+</button>
                                    </div>
                                    <div className='card-product-price'>
                                        <p className='m-0'>$900.00</p>
                                    </div>
                                    <div className='card-product-delete'>
                                        <i className="bi bi-trash"></i>
                                    </div>
                                </div>
                                <div className='card-product d-flex justify-content-between align-items-center'>
                                    <div className='card-product-img'>
                                        <img src='#' alt='Product' />
                                    </div>
                                    <div className='card-product-name'>
                                        <p>Product Name</p>
                                    </div>
                                    <div className="input-container">
                                        <button className="btn-decrement">-</button>
                                        <input type="text" className="input-field" value="0" />
                                        <button className="btn-increment">+</button>
                                    </div>
                                    <div className='card-product-price'>
                                        <p className='m-0'>$900.00</p>
                                    </div>
                                    <div className='card-product-delete'>
                                        <i className="bi bi-trash"></i>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='sum'>
                            <div className='sum-container d-flex justify-content-between align-items-center'>
                                <div className='sum-qty'>
                                <h2 className='title-cart text-center m-0'>Summary</h2>
                                </div>
                                <div className='sum-total d-flex align-items-center'>
                                    <h3 className='m-0'>Total price:</h3>
                                    <p className='m-0'>$99.00</p>
                                </div>
                                <div className='submit d-flex align-items-center'>
                                    <button className='sum-btn'>CHECKOUT</button>
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
