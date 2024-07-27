import React from "react";

const Brand = ({ brand }) => {
  return (
    <div className="input-checkbox">
      <input type="checkbox" id={brand.brand_name} />
      <label htmlFor={brand.brand_name}>
        <span></span>
       {brand.brand_name}
        <small>(  {brand.product_count})</small>
      </label>
    </div>
  );
};

export default Brand;
