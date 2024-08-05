import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../../../api/api";

const SearchPage = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleAddToCart = (productId, price) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in to add products to the cart.');
            return;
        }
        const quantity = 1;

        api.AddToCart(productId, quantity, price)
            .then(response => {
                alert('Product added to cart successfully!');
            })
            .catch(error => {
                console.error('Error adding product to cart:', error.message);
                alert('Failed to add product to cart.');
            });
    };

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const response = await api.getSearch(query);
                if (response.data.status) {
                    setResults(response.data.products);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                setError("An error occurred while fetching search results.");
            } finally {
                setLoading(false);
            }
        };

        fetchResult();
    }, [query]);

    return (
        <div className='section'>
           
            {loading && (
                <div className="overlay">
                    <div className="spinner"></div>
                </div>
            )}

            <div className='container'>
                <h3>Search Results for: {query}</h3>
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <div>
                        {results.length > 0 ? (
                            <div className="row">
                                {results.map((result) => {
                                    const imageUrl = `http://127.0.0.1:8000/${result.avatar_product}`;
                                    return (
                                        <div className="col-md-3 col-sm-6" key={result.product_id}>
                                            <div className="product-card">
                                                <Link to={`/shop/product/${result.product_id}`}>
                                                    <div className="product-img">
                                                        <img src={imageUrl} alt={result.name} />
                                                    </div>
                                                    <div className="product-info">
                                                        <p className="product-category">Category Name</p>
                                                        <h3 className="product-name">{result.name}</h3>
                                                        <p className="product-price">
                                                            ${result.price_sale}
                                                            {result.price && (
                                                                <del className="product-old-price">${result.price}</del>
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="product-rating">
                                                        {[...Array(5)].map((_, index) => (
                                                            <i
                                                                key={index}
                                                                className={`bi ${index < Math.round(result.average_rating) ? "bi-star-fill" : "bi-star"}`}
                                                            ></i>
                                                        ))}
                                                    </div>
                                                </Link>
                                                <div className="product-btns">
                                                    <button>
                                                        <i className="bi bi-heart"></i>
                                                    </button>
                                                    <button>
                                                        <i className="bi bi-arrow-left-right"></i>
                                                    </button>
                                                    <button>
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </div>
                                                <div className="product-addtc">
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleAddToCart(result.product_id, result.price_sale)}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
