import React from 'react';
import './style.css'
const AddressPage = () => {
    return (
        <>
            {/* <div id='breadcrumb' className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className='breadcumb-header'>STOREADDRESS</h3>
                            <ul className='breadcumb-tree'>
                                <li><a href='#'>Home </a></li>
                                <li className='active'> / StoreAddress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                        
                            <div className='address-detail'>
                            <h3 className='title'>Get In Touch</h3>
                                <div className='detail-list'>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <ul className='list-unstyled list-icon'>
                                        <li>
                                            <a href='#'>
                                                <i className='bi bi-telephone'></i> (+84) 0334982576
                                            </a>
                                        </li>
                                        <li>
                                            <a href='mailto:hieuaptech@gmail.com'>
                                                <i className='bi bi-envelope'></i> hieuaptech@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className='bi bi-geo-alt'></i> 285 Doi Can, Ba Dinh, Ha Noi
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='social-links'>
                                    <h4 className='social'>Social Links</h4>
                                    <ul className='d-flex list-unstyled'>
                                        <li><a href='#' className='bi bi-facebook'></a></li>
                                        <li><a href='#' className='bi bi-twitter'></a></li>
                                        <li><a href='#' className='bi bi-instagram'></a></li>
                                        <li><a href='#' className='bi bi-pinterest'></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9232491378366!2d105.81641017449773!3d21.03575678061532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d127a01e7%3A0xab069cd4eaa76ff2!2zMjg1IFAuIMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1722021534378!5m2!1svi!2s"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
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

export default AddressPage;