import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import ProductCard from "../../../component/shop/ProductCard";
import { getProducts } from "../../../api/productAPI";
import { getBrand } from "../../../api/brandAPI";
import Brand from "../../../component/shop/Brand";
import { useParams } from "react-router-dom";
import api from "../../../api/api";
import Subcategory from "../../../component/shop/Subcategory";

const ShopPage = () => {
  const { category } = useParams();
  const [categories,setCategories] = useState([])
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = await api.getProductsCategory(category);
        setProducts(product.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchBrand = async () => {
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
  }, []);


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
              {categories.map((categories, index) => (
                  <Subcategory key={index} categories={categories} />
                ))}
              </div>
            </div>
            <div className="aside">
              <h3>Price</h3>
              <div className="slider">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max="10000"
                  defaultValue="2500"
                  step="100"              
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="10000"
                    defaultValue="2500"
                  step="100"              
                />
              </div>
              <div className="price-input">
                <div className="field">
                  <input
                    type="number"
                    className="input-min"
                    defaultValue="2500"
                  />
                </div>
                <div className="field">
                  <input
                    type="number"
                    className="input-max"
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
