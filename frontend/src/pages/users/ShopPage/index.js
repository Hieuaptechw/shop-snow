import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import ProductCard from "../../../component/shop/ProductCard";
import { useParams } from "react-router-dom";
import api from "../../../api/api";


const ShopPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [activeRange, setActiveRange] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.getProductsCategory(
          category,
          selectedCategories,
          selectedBrands,
          minPrice,
          maxPrice
        );
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchBrand = async () => {
      setLoading(true);
      try {
        const brand = await api.getBrand(category);
        setBrands(brand.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const subcategories = await api.getSubcategory(category);
        setCategories(subcategories.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    fetchBrand();
    fetchCategory();

  }, [category, selectedCategories, selectedBrands,minPrice,maxPrice]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleBrandChange = (brandId) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brandId)) {
        return prev.filter((id) => id !== brandId);
      } else {
        return [...prev, brandId];
      }
    });
  };
  const handlePriceRangeChange = (min, max,range) => {
    setMinPrice(min);
    setMaxPrice(max);
    setActiveRange(range);
  };
  return (
    <div className="section">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="container">
        <div className="shop-product row">
          <div className="shop-product-aside col-md-3">
            <div className="aside">
              <h3>Categories</h3>
              <div className="checkbox-filter">
                {categories.map((category, index) => (
                  <div key={index} className="input-checkbox">
                    <input
                      type="checkbox"
                      id={`category-${category.subcategory_id}`}
                      checked={selectedCategories.includes(
                        category.subcategory_id
                      )}
                      onChange={() =>
                        handleCategoryChange(category.subcategory_id)
                      }
                    />
                    <label htmlFor={`category-${category.subcategory_id}`}>
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="aside">
              <h3>Price</h3>
              <div className="price-range-buttons">
  <div className="buttons-btn">
    <button
      onClick={() => handlePriceRangeChange(0, 100, "0-100")}
      className={activeRange === "0-100" ? "active" : ""}
    >
      0$ - 100$
    </button>
  </div>
  <div className="buttons-btn">
    <button
      onClick={() => handlePriceRangeChange(100, 200, "100-200")}
      className={activeRange === "100-200" ? "active" : ""}
    >
      100$ - 200$
    </button>
  </div>
  <div className="buttons-btn">
    <button
      onClick={() => handlePriceRangeChange(200, 500, "200-500")}
      className={activeRange === "200-500" ? "active" : ""}
    >
      200$ - 500$
    </button>
  </div>
  <div className="buttons-btn">
    <button
      onClick={() => handlePriceRangeChange(500, 1000, "500-1000")}
      className={activeRange === "500-1000" ? "active" : ""}
    >
      500$ - 1000$
    </button>
  </div>
  <div className="buttons-btn">
    <button
      onClick={() => handlePriceRangeChange(1000, 10000, "1000-10000")}
      className={activeRange === "1000-10000" ? "active" : ""}
    >
      1000$ - 10000$
    </button>
  </div>
  <div className="buttons-btn">
    <button
      onClick={() => handlePriceRangeChange(0, 10000, "All")}
      className={activeRange === "All" ? "active" : ""}
    >
      All
    </button>
  </div>
</div>

            </div>
            <div className="aside">
              <h3>Brand</h3>
              <div className="checkbox-filter">
                {brands.map((brand, index) => (
                  <div key={index} className="input-checkbox">
                    <input
                      type="checkbox"
                      id={`brand-${brand.brand_id}`}
                      checked={selectedBrands.includes(brand.brand_id)}
                      onChange={() => handleBrandChange(brand.brand_id)}
                    />
                    <label htmlFor={`brand-${brand.brand_id}`}>
                      <span></span>
                      {brand.brand_name}
                      <small>({brand.product_count})</small>{" "}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shop-product-item col-md-9">
            <div className="row">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
