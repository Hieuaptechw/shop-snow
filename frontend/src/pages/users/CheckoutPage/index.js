import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './style.css';
const CheckoutPage = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem('api_token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='billing-details'>
                                <div className='section-title'>
                                    <h3 className='title'>Billing address</h3>
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='text' name='first-name' placeholder='First Name' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='text' name='last-name' placeholder='Last Name' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='email' name='email' placeholder='Email' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='text' name='address' placeholder='Address' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='text' name='city' placeholder='City' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='text' name='country' placeholder='Country' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='text' name='zip-code' placeholder='ZIP Code' />
                                </div>
                                <div className='form-group'>
                                    <input className='input' type='tel' name='tel' placeholder='Telephone' />
                                </div>
                                <div className='form-group'>
                                    <div className='input-checkbox'>
                                        <input type='checkbox' id='create-account' />
                                        <label for='create-account'>Create Account?</label>
                                    </div>
                                </div>
                            </div>
                            <div className='shiping-details'>
                                <div className='section-title'>
                                    <h3 className='title'>Shiping address</h3>
                                </div>
                                <div className='input-checkbox'>
                                    <input type='checkbox' id='shiping-address' />
                                    <label for='shiping-address'>Ship to a difrent address?</label>
                                </div>
                            </div>
                            <div className='order-notes'>
                                <textarea className='input' placeholder='Order Notes'></textarea>
                            </div>
                        </div>
                        <div className='col-md-5 order-details'>
                            <div className='section-title text-center'>
                                <h3 className='title'>Your Order</h3>
                            </div>
                            <div className='order-summary'>
                                <div className='order-col'>
                                    <div>
                                        <strong>PRODUCT</strong>
                                    </div>
                                    <div>
                                        <strong>TOTAL</strong>
                                    </div>
                                </div>
                                <div className='order-products'>
                                    <div className='order-col'>
                                        <div>1x Product Name Goes Here</div>
                                        <div>$980.00</div>
                                    </div>
                                    <div className='order-col'>
                                        <div>2x Product Name Goes Here</div>
                                        <div>$980.00</div>
                                    </div>
                                </div>
                                <div className='order-col'>
                                    <div>Shiping</div>
                                    <div><strong>FREE</strong></div>
                                </div>
                                <div className='order-col'>
                                    <div><strong>TOTAL</strong></div>
                                    <div><strong className='order-total'>$2940.00</strong></div>
                                </div>
                            </div>
                            <div className='payment-method'>
                                <div className='input-radio'>
                                    <input type='radio' name='payment' id="payment-1" />
                                    <label for='payment-1'>Direct Bank Transfer</label>
                                </div>
                                <div className='input-radio'>
                                    <input type='radio' name='payment' id="payment-2" />
                                    <label for='payment-2'>Cheque Payment</label>
                                </div>
                                <div className='input-radio'>
                                    <input type='radio' name='payment' id="payment-3" />
                                    <label for='payment-3'>Paypal System</label>
                                </div>
                            </div>
                            <div className='input-checkbox'>
                                <input type='checkbox' id='terms' />
                                <label for='terms'>I've read and accpet the <a href='#'>terms & conditions</a></label>
                            </div>
                            <a href='#' className='primary-btn order-submit'>Place order</a>
                        </div>
                    </div>
                </div>
            </div>
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
                                <button className='newsLetter-btn'><i class="bi bi-envelope"></i> Subscribe</button>
                            </form>
                            <ul className='d-flex newsLetter-follow justify-content-center'>
                                <li><a href='#'><i class="bi bi-facebook"></i></a></li>
                                <li><a href='#'><i class="bi bi-twitter"></i></a></li>
                                <li><a href='#'><i class="bi bi-instagram"></i></a></li>
                                <li><a href='#'><i class="bi bi-pinterest"></i></a></li>
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