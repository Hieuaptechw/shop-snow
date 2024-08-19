import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import api from "../../../api/api";
import ProductDetails from "../../../component/product_details/ProductDetails";
import { toast } from "react-toastify";
const ProductPage = () => {
  const { id, category } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantitys, setQuantity] = useState(1);
  const [colors, setColor] = useState(null);
  const [sizess, setSize] = useState(null);
  const [weights, setWeight] = useState(null);
  const [priceSale, setPriceSale] = useState(null);
  const [imgProductDetails, setImgProductDetails] = useState([]);
  const [attributeProductDetails, setAttributeProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [review, setReview] = useState("");
  const [reviewProduct, setReviewProduct] = useState([]);
  const [rating, setRating] = useState(null);
  const [reviewStats, setReviewStats] = useState({});
  const [averageRating, setAverageRating] = useState(0);

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handleWeight = (e) => {
    const newWeight = parseFloat(e.target.value);
    setWeight(newWeight);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("You must be logged in to add products to the cart.");
      return;
    }
    const productId = id;
    const quantity = quantitys;
    const price = priceSale;
    const size = sizess;
    const color = colors;
    const weight = weights;

    api
      .AddToCart(productId, quantity, price, size, color, weight)
      .then((response) => {
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error.message);
        toast.error("Failed to add product to cart.");
      });
  };
  const handleReview = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to review the product!");
      return;
    }

    const product_id = id;
    const comment = review;

    try {
      const response = await api.ReviewProduct(
        product_id,
        rating,
        comment,
        token
      );
      if (response.data.status) {
        toast.success("Review submitted successfully!");
        setReview("");
        setRating(0);
      } else {
        console.log("Error response:", response.data);
        toast.error(response.data.message || "Failed to submit review.");
      }
    } catch (error) {
      const errorMessage = error.response.data.message;
      console.error("Error caught in catch block:", errorMessage);
      toast.error(errorMessage || "Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const fetchDetailsProduct = async () => {
      setLoading(true);
      try {
        const productData = await api.getProductsDetails(id);
        setProductDetails(productData.data.product);

        setPriceSale(productData.data.product[0].price_sale);
        setAttributeProductDetails(productData.data.details);
        setImgProductDetails(productData.data.images);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const product = await api.getProductsCategoryDetails(category);
        setProducts(product.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchReview = async () => {
      setLoading(true);
      try {
        const review = await api.getProductReview(id);
        setReviewProduct(review.data.reviews);
        console.log(review.data.reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchReviewStats = async () => {
      setLoading(true);
      try {
        const reviewstats = await api.getProductReviewStats(id);
        setReviewStats(reviewstats.data.review_stats);
        setAverageRating(parseFloat(reviewstats.data.average_rating) || 0);
        console.log(reviewstats.data.average_rating);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailsProduct();
    fetchProducts();
    fetchReview();
    fetchReviewStats();
  }, [id]);
  const color = attributeProductDetails.filter(
    (attributeProductDetails) =>
      attributeProductDetails.attribute_name === "color"
  );
  const sizes = attributeProductDetails.filter(
    (attributeProductDetails) =>
      attributeProductDetails.attribute_name === "inch"
  );
  const weight = attributeProductDetails.filter(
    (attributeProductDetails) =>
      attributeProductDetails.attribute_name === "weight"
  );
  const displayStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? 'bi-star-fill' : 'bi-star');
    }
    return stars;
  };

  return (
    <>
      <div className="section">
        {loading && (
          <div className="overlay1">
            <div className="spinner1"></div>
          </div>
        )}
        <div className="container">
          {productDetails.map((product, index) => (
            <div key={index} className="row">
              <div className="col-2">
                <div className="product-imgg">
                  {imgProductDetails.map((imgDetail, index) => (
                    <div key={index} className="product-image-item">
                      <img
                        src={`http://127.0.0.1:8000/${imgDetail.image_url}`}
                        alt={`Product Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-5">
                <div className="product-main-img">
                  <img
                    src={`http://127.0.0.1:8000/${product.avatar_product}`}
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="product-details">
                  <h2 className="product-name">{product.name}</h2>
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi bi-star-fill ${
                            i < Math.floor(product.average_rating)
                              ? "text-warning"
                              : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                    <a
                      className="review-link align-items-center d-flex"
                      href="#"
                    >
                      {product.average_rating} Review(s) | Add your review
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="product-price m-0">
                      ${product.price_sale}
                      <del className="product-old-price">${product.price}</del>
                    </h3>
                    <span className="product-available">In Stock</span>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                  <div className="product-options">
                    {sizes.length > 0 && (
                      <label>
                        SIZE :
                        <select
                          className="input-select"
                          onChange={handleSize}
                          value={sizess || ""}
                        >
                          <option value="">Select</option>
                          {sizes.map((size, index) => (
                            <option key={index} value={size.attribute_value}>
                              {size.attribute_value}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                    {color.length > 0 && (
                      <label>
                        COLOR :
                        <select
                          className="input-select"
                          onChange={handleColor}
                          value={colors || ""}
                        >
                          <option value="">Select</option>
                          {color.map((color, index) => (
                            <option key={index} value={color.attribute_value}>
                              {color.attribute_value}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                    {weight.length > 0 && (
                      <label>
                        WEIGHT :
                        <select
                          className="input-select"
                          onChange={handleWeight}
                          value={weights || ""}
                        >
                          <option value="">Select</option>
                          {weight.map((weight, index) => (
                            <option key={index} value={weight.attribute_value}>
                              {weight.attribute_value}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                  </div>

                  <div className="add-to-cart">
                    <div className="qty-label d-flex align-items-center">
                      <label>QTY</label>
                      <div className="input-number">
                        <input
                          type="text"
                          value={quantitys}
                          onChange={handleQuantity}
                        />
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleAddToCart(product.product_id)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                    <ul className="product-btns d-flex align-items-center">
                      <li>
                        <a href="/wishlist">
                          <i className="bi bi-heart"></i>
                          <span>ADD TO WISHLIST</span>
                        </a>
                      </li>
                      <li>
                        <a href="/wishlist">
                          <i className="bi bi-arrow-left-right"></i>
                          <span>ADD TO COMPARE</span>
                        </a>
                      </li>
                    </ul>
                    <ul className="product-links d-flex">
                      <li>CATEGORY:</li>
                      <li>
                        <a href="#">{product.category_name}</a>
                      </li>
                      <li>
                        <a href="#">{product.subcategory_name}</a>
                      </li>
                    </ul>
                    <ul className="product-links d-flex">
                      <li>SHARE:</li>
                      <li>
                        <a href="https://facebook.com">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/?lang=vi">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://google.com">
                          <i className="bi bi-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://example.com">
                          <i className="bi bi-envelope-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="product-tab">
                <ul className="tab-nav d-flex justify-content-center">
                  <li>
                    <a>Description</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div id="product-tab">
                <ul className="tab-nav d-flex justify-content-center">
                  <li>
                    <a>Reviews</a>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <div className="row">
                  <div className="col-3">
                    <div className="rating-content">
                      <div className="rating-avg d-flex">
                        <span>{averageRating.toFixed(1)}</span>
                        <div className="rating-star">
                          {displayStars(Math.round(averageRating)).map(
                            (starClass, index) => (
                              <i key={index} className={`bi ${starClass}`}></i>
                            )
                          )}
                        </div>
                      </div>
                      <ul className="rating-content">
                        {Object.entries(reviewStats)
                          .reverse()
                          .map(([rating, count]) => (
                            <li key={rating}>
                              <div className="rating-stars">
                                {displayStars(parseInt(rating)).map(
                                  (starClass, index) => (
                                    <i
                                      key={index}
                                      className={`bi ${starClass}`}
                                    ></i>
                                  )
                                )}
                              </div>
                              <span className="sum-1">({count})</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="review-1">
                      <ul className="reviews-1">
                        {reviewProduct.map((review, index) => (
                          <li key={index}>
                            <div className="review-heading">
                              <h5 className="name">{review.user_name}</h5>
                              <p className="date">
                                {new Date(review.created_at).toLocaleDateString(
                                  "en-VN",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </p>
                              <div className="review-rating">
                                {[...Array(review.rating)].map((_, i) => (
                                  <i key={i} className="bi bi-star-fill"></i>
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                  <i
                                    key={i + review.rating}
                                    className="bi bi-star"
                                  ></i>
                                ))}
                              </div>
                            </div>
                            <div className="review-body">
                              <p>{review.comment}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-3">
                    <div id="review-form">
                      <form className="review-form" onSubmit={handleReview}>
                        <textarea
                          className="input"
                          placeholder="Your Review"
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                        <div className="input-rating">
                          <div className="stars">
                            {" "}
                            <span>Your Rating: </span>
                            {[1, 2, 3, 4, 5].map((value) => (
                              <React.Fragment key={value}>
                                <input
                                  id={`star${value}`}
                                  name="rating"
                                  value={value}
                                  type="radio"
                                  checked={rating === value}
                                  onChange={() => setRating(value)}
                                />
                                <label htmlFor={`star${value}`}>
                                  <i
                                    className={`bi bi-star${
                                      rating >= value ? "-fill" : ""
                                    }`}
                                  ></i>
                                </label>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <button className="primary-btn" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <h2 className="text-center p-2">Related Products</h2>
          <div className="row">
            {products.map((product, index) => (
              <ProductDetails key={index} productcategory={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
