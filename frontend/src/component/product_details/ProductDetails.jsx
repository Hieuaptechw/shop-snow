
import React from 'react';
import { Link } from 'react-router-dom';
import api from "../../api/api";
import {  toast } from 'react-toastify';
const ProductDetails = ({ productcategory }) => {
  const handleAddToCart = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to add products to the cart.');
      return;
    }
    const productId = productcategory.product_id;
    const quantity = 1;
    const price = productcategory.price_sale;
    const color = productcategory.color || "";
    const size = productcategory.size || ""; 
    const weight = productcategory.weight || ""; 

    api.AddToCart(productId,quantity,price,size,color,weight)
      .then(response => {
        toast.success('Product added to cart successfully!');
      })
      .catch(error => {
        console.error('Error adding product to cart:', error.message);
        toast.error('Failed to add product to cart.');
      });
  };
  const averageRating = parseFloat(productcategory.average_rating) || 0;
  const imageUrl = `http://127.0.0.1:8000/${productcategory.avatar_product}`;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-card">
      <Link to={`/shop/${productcategory.slug}/${productcategory.product_id}`}>
          <div className="product-img">
            <img src={imageUrl} alt={productcategory.name} />
          </div>
          <div className="product-info">
            <p className="product-category">{productcategory.category_name}</p>
            <h3 className="product-name">{productcategory.name} </h3>
            <p className="product-price">
              ${productcategory.price}
              {productcategory.price_sale && (
                <del className="product-old-price">${productcategory.price_sale}</del>
              )}
            </p>
          </div>
          <div className="product-rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`bi ${index < Math.round(averageRating) ? "bi-star-fill" : "bi-star"
                  }`}
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
            onClick={() => handleAddToCart(productcategory.product_id)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;