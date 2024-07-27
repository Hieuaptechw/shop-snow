import React from "react";

const Subcategory = ({ categories }) => {
  return (
    <div className="input-checkbox">
      <input type="checkbox" id={categories.name} />
      <label htmlFor={categories.name}>
        <span></span>
       {categories.name}
        {/* <small>(12)</small> */}
      </label>
    </div>
  );
};

export default Subcategory;
