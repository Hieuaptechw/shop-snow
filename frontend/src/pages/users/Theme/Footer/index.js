import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-6'>
                            <div className='footer'>
                                <h3 className='footer-title'>ABOUT US</h3>
                                <p>Adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                <ul className='footer-link'>
                                    <li><a href='#'><i className="bi bi-geo-alt"></i> 1734 Stonecoal Road</a></li>
                                    <li><a href='#'><i className="bi bi-telephone"></i> +021-95-51-84</a></li>
                                    <li><a href='#'><i className="bi bi-envelope"></i> email@email.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <div className='footer'>
                                <h3 className='footer-title'>CATEGORIES</h3>
                                <ul className='footer-link'>
                                    <li><a href='#'>Hot deals</a></li>
                                    <li><a href='#'>Laptops</a></li>
                                    <li><a href='#'>Smartphones</a></li>
                                    <li><a href='#'>Cameras</a></li>
                                    <li><a href='#'>Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <div className='footer'>
                                <h3 className='footer-title'>INFORMATION</h3>
                                <ul className='footer-link'>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Contact Us</a></li>
                                    <li><a href='#'>Privacy Policy</a></li>
                                    <li><a href='#'>Orders and Return</a></li>
                                    <li><a href='#'>Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <div className='footer'>
                                <h3 className='footer-title'>SERVICE</h3>
                                <ul className='footer-link'>
                                    <li><a href='#'>My Account</a></li>
                                    <li><a href='#'>View Cart</a></li>
                                    <li><a href='#'>Wishlist</a></li>
                                    <li><a href='#'>Track My Order</a></li>
                                    <li><a href='#'>Help</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 text-center copyright'>
                                <p>&copy; 2024 Your Company. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
