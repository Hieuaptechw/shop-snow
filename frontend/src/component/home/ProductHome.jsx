import React from "react";
import api from "../../api/api";



const ProductHome = ({ newproduct }) => {
  const handleAddToCart = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to add products to the cart.');
      return;
    }
    const productId = newproduct.product_id;
    const quantity = 1; 
    const price = newproduct.price_sale;

    api.AddToCart(productId, quantity, price)
      .then(response => {
        console.log('Product added to cart successfully:', response.data);
        alert('Product added to cart successfully!');
      })
      .catch(error => {
        console.error('Error adding product to cart:', error.message);
        alert('Failed to add product to cart.');
      });
  };
  const averageRating = parseFloat(newproduct.average_rating) || 0;
  const imageUrl = `http://127.0.0.1:8000/${newproduct.avatar_product}`;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-card">
        <a href={`shop/${newproduct.slug}/${newproduct.product_id}`}>
        <div className="product-img">
          <img src={imageUrl} alt={newproduct.name} />
        </div>
        <div className="product-info">
          <p className="product-category">{newproduct.category_name}</p>
          <h3 className="product-name">{newproduct.name}</h3>
          <p className="product-price">
          ${newproduct.price_sale}
            {newproduct.price && (
              <del className="product-old-price">${newproduct.price}</del>
            )}
          </p>
        </div>
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`bi ${
                index < Math.round(averageRating) ? "bi-star-fill" : "bi-star"
              }`}
            ></i>
          ))}
        </div>
        
        </a>

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
          <div className="product-addtc">
            <button
              className="btn btn-danger"
              onClick={() => handleAddToCart(newproduct.product_id)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
