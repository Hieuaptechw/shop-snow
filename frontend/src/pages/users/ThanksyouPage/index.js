import React from 'react';
import './style.css'

const ThanksyouPage = () => {
    return (
        <div className='section'>
            <div className='container-successfully'>
                <div className='top text-center'>
                    <h1>THANK YOU</h1>
                    <p>Your oder was completed successfully</p>
                </div>

                <div className='main  d-flex align-items-center'>
                    <i class="bi bi-envelope-at"></i>
                    <span>An email recept including the details bout your oder has been sent to the email address provided. Please keep it for your records</span>
                </div>

                <div className='footer-1 d-flex align-items-center'>
                    <span>Your can visit the My Account page at any time to check the status of your order. Or click here to print a copy of your receipt </span>
                    <div className='d-flex'>
                    <i class="bi bi-laptop"></i>
                    <i class="bi bi-printer"></i>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ThanksyouPage;