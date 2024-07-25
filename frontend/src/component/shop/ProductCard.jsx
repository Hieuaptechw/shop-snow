import React from "react";

const ProductCard = ({ product }) => {
  const averageRating = parseFloat(product.average_rating) || 0;

  return (
    <div className="col-md-4">
      <div className="product-card">
        <div className="product-img">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">
            ${product.price}
            {product.price_sale && (
              <del className="product-old-price">${product.price_sale}</del>
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
          <a href={`shop/product/${product.product_id}`} className="btn btn-danger">
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
