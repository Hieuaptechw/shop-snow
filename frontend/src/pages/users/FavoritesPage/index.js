import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './style.css';

const FavoritesPage = () => {
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
                <h1 className='title text-center'>Your Wishlist</h1>
                <div className='row'>
                    <div className='col-12'>
                        <div className='prd-card d-flex'>
                            <div className='prd-img'>
                                <img src="" />
                            </div>
                            <div className='prd-info'>
                                <h3 className='prd-name'>Product Name</h3>
                                <p className='prd-price'>$900.00</p>
                                <div className='prd-qty'>
                                    <h4>Quantity</h4>
                                </div>
                                <input type='text' />
                            </div>
                            <div className='prd-status'>
                                <p className='prd-price'>$900.00</p>
                                <p className='status'>Stocking</p>
                                <button><i class="bi bi-cart-plus"></i></button>
                                <button><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;