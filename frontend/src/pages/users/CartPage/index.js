import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
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
                <div className='row d-flex'>
                    <div className='col-8'>
                        <div className='cart'>
                            <div className='cart-container'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                <h2 className='title-cart'>Shopping Cart</h2>
                                <span className='status-cart'>3 items</span>
                            </div>
                            <div className='card-product d-flex justify-content-between align-items-center'>
                                <div className='card-product-img'>
                                    <img src='#' />
                                </div>
                                <div className='card-product-name'>
                                    <p>Product Name</p>
                                </div>
                                <div class="input-container">
                                    <button class="btn-decrement">-</button>
                                    <input type="text" class="input-field" value="0" />
                                    <button class="btn-increment">+</button>
                                </div>
                                <div className='card-product-price'>
                                    <p className='m-0'>$900.00</p>
                                </div>
                                <div className='card-product-delete'>
                                    <i class="bi bi-trash"></i>
                                </div>
                            </div>
                            <div className='card-product d-flex justify-content-between align-items-center'>
                                <div className='card-product-img'>
                                    <img src='#' />
                                </div>
                                <div className='card-product-name'>
                                    <p>Product Name</p>
                                </div>
                                <div class="input-container">
                                    <button class="btn-decrement">-</button>
                                    <input type="text" class="input-field" value="0" />
                                    <button class="btn-increment">+</button>
                                </div>
                                <div className='card-product-price'>
                                    <p className='m-0'>$900.00</p>
                                </div>
                                <div className='card-product-delete'>
                                    <i class="bi bi-trash"></i>
                                </div>
                            </div>
                            <div className='card-product d-flex justify-content-between align-items-center'>
                                <div className='card-product-img'>
                                    <img src='#' />
                                </div>
                                <div className='card-product-name'>
                                    <p>Product Name</p>
                                </div>
                                <div class="input-container">
                                    <button class="btn-decrement">-</button>
                                    <input type="text" class="input-field" value="0" />
                                    <button class="btn-increment">+</button>
                                </div>
                                <div className='card-product-price'>
                                    <p className='m-0'>$900.00</p>
                                </div>
                                <div className='card-product-delete'>
                                    <i class="bi bi-trash"></i>
                                </div>
                            </div>
                            </div>
                        
                        </div>

                    </div>
                    <div className='col-4'>
                        <div className='sum'>
                            <div className='sum-container'>
                                <h2 className='title-cart'>Summary</h2>
                                <div className='d-flex justify-content-between'>
                                    <p>ITEMS 3</p>
                                    <p className='sum-price'>$900.00</p>
                                </div>
                                <label className='sum-label'>SHIPPING</label>
                                <div className='form-group'>
                                    <select className='sum-select'>
                                        <option>Iphone 12 promax</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </div>
                                <label className='sum-label'>GIVE CODE</label>
                                <div className='form-group'>
                                    <select className='sum-select'>
                                        <option>Iphone 12 promax</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </div>
                                <div className='sum-total-price d-flex justify-content-between'>
                                    <p>TOTAL PRICE</p>
                                    <p className='sum-price'>$2700.00</p>
                                </div>
                                <div className='sum-submit'>
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