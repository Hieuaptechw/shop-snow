import React from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const averageRating = parseFloat(product.average_rating) || 0;
  const imageUrl = `http://127.0.0.1:8000/${product.avatar_product}`;
  return (
    <div className="col-md-4">
      <div className="product-card">
        <Link to={`${product.product_id}`}>
          <div className="product-img">
            <img src={imageUrl} alt={product.name} />
          </div>
          <div className="product-info">
            <p className="product-category">{product.category_name}</p>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
              ${product.price_sale}
              {product.price && (
                <del className="product-old-price">${product.price}</del>
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
            <button
              className="btn btn-danger"
            >
              ADD TO CART
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
