import React from 'react';
import './style.css';
const HomePage = () => {
    return (
        <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 ml-2">1</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">2</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">3</div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">4</div>
        </div>
        <div class="col-md-12 text-center">
							<ul class="footer-payments">
								<li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i class="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
							</ul>
			
						</div>
      </div>
      
    );
};

export default HomePage;