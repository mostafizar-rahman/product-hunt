import React, { useState } from "react";
import { productsData } from "../Utlits/ProductsData";

const SortingBar = ({ setProducts, products, setProductLayout, productLayout }) => {
  const layout = [2, 3, 4, 5];
  // ----------------- Short product by name
  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "a-z") {
      const sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setProducts(sortedProducts);
    }
    if (value === "z-a") {
      const sortedProducts = [...products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setProducts(sortedProducts);
    }
    if (value === "") {
      setProducts(productsData);
    }
  };

  //   ---------------- Layout
  const handleProductLayout = (value) => {
    setProductLayout(value);
  };

  return (
    <div className="flex justify-between  sm:mb-9 mb-5">
      <div className={` gap-3 lg:flex hidden `}>
        {layout.map((num) => (
          <div
          key={num}
            className={` ${productLayout === num ? "border-lime-500 border":"border"} flex gap-1 p-1 cursor-pointer`}
            onClick={() => handleProductLayout(num)}
          >
            {num === 2 && (
              <>
                <Span />
                <Span />
              </>
            )}
            {num === 3 && (
              <>
                <Span />
                <Span />
                <Span />
              </>
            )}
            {num === 4 && (
              <>
                <Span />
                <Span />
                <Span />
                <Span />
              </>
            )}
            {num === 5 && (
              <>
                <Span />
                <Span />
                <Span />
                <Span />
                <Span />
              </>
            )}
          </div>
        ))}
      </div>
      <select name="" id="" className="border p-2" onChange={handleSort}>
        <option value="">Short</option>
        <option value="a-z">Alphabetically, A-Z</option>
        <option value="z-a">Alphabetically, Z-A</option>
      </select>
    </div>
  );
};

export default SortingBar;

const Span = () => {
  return <span className={`bg-gray-600  block w-4 h-full`}></span>;
};
