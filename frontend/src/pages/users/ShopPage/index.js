import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import ProductCard from "../../../component/shop/ProductCard";
import { getProducts } from "../../../api/productAPI";
import { getBrand } from "../../../api/brandAPI";
import Brand from "../../../component/shop/Brand";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);

  const rangeMinRef = useRef(null);
  const rangeMaxRef = useRef(null);
  const progressRef = useRef(null);
  const priceMinRef = useRef(null);
  const priceMaxRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = await getProducts();
        setProducts(product);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchBrand = async () => {
        try {
          const brand = await getBrand();
          setBrands(brand);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
    fetchProducts();
    fetchBrand();
  }, []);

  useEffect(() => {
    const handleRangeChange = () => {
      if (rangeMinRef.current && rangeMaxRef.current && progressRef.current) {
        const min = parseInt(rangeMinRef.current.value);
        const max = parseInt(rangeMaxRef.current.value);

        if (max - min < 1000) {
          if (rangeMinRef.current === document.activeElement) {
            rangeMinRef.current.value = max - 1000;
            setMinPrice(max - 1000);
          } else {
            rangeMaxRef.current.value = min + 1000;
            setMaxPrice(min + 1000);
          }
        } else {
          setMinPrice(min);
          setMaxPrice(max);
        }

        const minPercent = (min / 10000) * 100;
        const maxPercent = (max / 10000) * 100;
        progressRef.current.style.left = `${minPercent}%`;
        progressRef.current.style.right = `${100 - maxPercent}%`;
      }
    };

    if (rangeMinRef.current && rangeMaxRef.current) {
      rangeMinRef.current.addEventListener("input", handleRangeChange);
      rangeMaxRef.current.addEventListener("input", handleRangeChange);
    }

    return () => {
      if (rangeMinRef.current && rangeMaxRef.current) {
        rangeMinRef.current.removeEventListener("input", handleRangeChange);
        rangeMaxRef.current.removeEventListener("input", handleRangeChange);
      }
    };
  }, []);

  useEffect(() => {
    if (priceMinRef.current) priceMinRef.current.value = minPrice;
    if (priceMaxRef.current) priceMaxRef.current.value = maxPrice;
  }, [minPrice, maxPrice]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="section">
      <div className="container">
        <div className="shop-product row">
          <div className="shop-product-aside col-md-3">
            <div className="aside">
              <h3>Categories</h3>
              <div className="checkbox-filter">
                {/* Các checkbox categories */}
              </div>
            </div>
            <div className="aside">
              <h3>Price</h3>
              <div className="slider">
                <div className="progress" ref={progressRef}></div>
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max="10000"
                  defaultValue="2500"
                  step="100"
                  ref={rangeMinRef}
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="10000"
                  defaultValue="7500"
                  step="100"
                  ref={rangeMaxRef}
                />
              </div>
              <div className="price-input">
                <div className="field">
                  <input
                    type="number"
                    className="input-min"
                    ref={priceMinRef}
                    defaultValue="2500"
                    onChange={(e) => setMinPrice(parseInt(e.target.value))}
                  />
                </div>
                <div className="field">
                  <input
                    type="number"
                    className="input-max"
                    ref={priceMaxRef}
                    defaultValue="7500"
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="aside">
              <h3>Brand</h3>
              <div className="checkbox-filter">
                {brands.map((brand, index) => (
                  <Brand key={index} brand={brand} />
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
