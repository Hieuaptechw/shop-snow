import React from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductHome = ({ newproduct }) => {
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("You must be logged in to add products to the cart.");
      return;
    }
    const productId = newproduct.product_id;
    const quantity = 1;
    const price = newproduct.price_sale;
    const color = newproduct.color || "";
    const size = newproduct.size || ""; 
    const weight = newproduct.weight || ""; 
    api
      .AddToCart(productId,quantity,price,size,color,weight)
      .then((response) => {
        toast.success("Product added to cart successfully!")
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error.message);
        toast.error("Failed to add product to cart.");
      });
  };
  const averageRating = parseFloat(newproduct.average_rating) || 0;
  const imageUrl = `https://hieuaptech.shop/${newproduct.avatar_product}`;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-card">
        <Link to={`/shop/${newproduct.slug}/${newproduct.product_id}`}>
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
