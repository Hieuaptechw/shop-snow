import React from "react";

const Brand = ({ brand }) => {
  return (
    <div className="input-checkbox">
      <input type="checkbox" id={brand.name} />
      <label htmlFor={brand.name}>
        <span></span>
       {brand.name}
        <small>(12)</small>
      </label>
    </div>
  );
};

export default Brand;
