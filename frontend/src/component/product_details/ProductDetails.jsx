
import React from 'react';

const ProductDetails = ({productcategory}) => {
    const averageRating = parseFloat(productcategory.average_rating) || 0;
    const imageUrl = `http://127.0.0.1:8000/${productcategory.avatar_product}`;

    return (
      <div className="col-md-3 col-sm-6">
        <div className="product-card">
          <div className="product-img">
            <img src={imageUrl} alt={productcategory.name} />
          </div>
          <div className="product-info">
            <p className="product-category">{productcategory.category_name}</p>
            <h3 className="product-name">{productcategory.name}</h3>
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
                className={`bi ${
                  index < Math.round(averageRating) ? "bi-star-fill" : "bi-star"
                }`}
              ></i>
            ))}
          </div>
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
            <a href={`add/product/${productcategory.product_id}`} className="btn btn-danger">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;