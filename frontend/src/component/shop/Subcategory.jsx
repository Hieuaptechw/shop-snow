import React from "react";

const Subcategory = ({ categories, isChecked, onChange }) => {
  return (
    <div className="input-checkbox">
      <input type="checkbox" id={categories.name} />
      <label htmlFor={categories.name} checked={isChecked} onChange={onChange}>
        <span></span>
        {categories.name}
        {/* <small>(12)</small> */}
      </label>
    </div>
  );
};

export default Subcategory;
