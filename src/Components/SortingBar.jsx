import React, { useState } from "react";
import { productsData } from "../Utlits/ProductsData";

const SortingBar = ({
  setProducts,
  products,
}) => {
  // ----------------- Short product
  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "a-z") {
      const sortedProducts = [...products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setProducts(sortedProducts);
    }
    if (value === "z-a") {
      const sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setProducts(sortedProducts);
    }
    if (value === "low-high") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    if (value === "high-low") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    if (value === "") {
      setProducts(productsData);
    }
  };

  return (
    <div className="flex justify-end  sm:mb-9 mb-5">
      <select name="" id="" className="border p-2" onChange={handleSort}>
        <option value="">Sort</option>
        <option value="a-z">Alphabetically, A-Z</option>
        <option value="z-a">Alphabetically, Z-A</option>
        <option value="low-high">Price, Low - High</option>
        <option value="high-low">Price, High-Low</option>
      </select>
    </div>
  );
};

export default SortingBar;

const Span = () => {
  return <span className={`bg-gray-600  block w-4 h-full`}></span>;
};
