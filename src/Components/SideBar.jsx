import React, { useEffect, useState } from "react";
import { productsData } from "../Utlits/ProductsData";
import Checkbox from "./Common/Checkbox";
import Rating from "./Rating";
import { FaChevronDown } from "react-icons/fa";

const SideBar = ({ setProducts, products }) => {
  const ratingNum = [1, 2, 3, 4, 5];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // -------- filter unique brand name
  let brandsName = [];
  for (const product of productsData) {
    if (!brandsName.includes(product.brand)) {
      brandsName.push(product.brand);
    }
  }

  //  ---------- filter unique size
  let uniqueSize = [];
  for (const product of productsData) {
    for (const size of product.sizes) {
      if (!uniqueSize.includes(size)) {
        uniqueSize.push(size);
      }
    }
  }

  //   --------- Get selected Brand name
  const handleBrandName = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // ------- get selected  Size
  const handleSize = (size) => {
    if (selectedSize.includes(size)) {
      setSelectedSize(selectedSize.filter((item) => item !== size));
    } else {
      setSelectedSize([...selectedSize, size]);
    }
  };

  const handleRating = (rating) => {
    if (selectedRating.includes(rating)) {
      setSelectedRating(selectedRating.filter((item) => item !== rating));
    } else {
      setSelectedRating([...selectedRating, rating]);
    }
  };

  //   console.log(selectedRating)

  useEffect(() => {
    // Function to apply size filter
    const applySizeFilter = (data, size) => {
      if (size.length) {
        const filteredProducts = productsData.filter((product) => {
          return selectedSize.some((size) => product.sizes.includes(size));
        });
        setProducts(filteredProducts);
      } else {
        setProducts(data);
        // setFilteredProducts(data);
      }
    };

    // Function to apply brand filter
    const applyBrandFilter = (data, brand) => {
      if (brand.length) {
        const filteredProducts = data.filter((product) =>
          brand.includes(product.brand)
        );
        setProducts(filteredProducts);
      } else {
        // setFilteredProducts(data);
        console.log(data);
        setProducts(data);
      }
    };

    let filteredBrand = productsData.filter((product) => {
      return selectedBrands.some((v) => product.brand.includes(v));
    });
    if (filteredBrand.length) {
      // filterProducts.push(...filteredBrand);
      applySizeFilter(filteredBrand, selectedSize);
    }

    let filteredSizes = productsData.filter((product) => {
      return selectedSize.some((size) => product.sizes.includes(size));
    });

    if (filteredSizes.length) {
      // filterProducts.push(...filteredSizes);
      applyBrandFilter(filteredSizes, selectedBrands);
    }

    let filteredRating = productsData.filter((product) => {
      return selectedRating.some((v) => product.rating.includes(v));
    });
    if (filteredRating.length) {
      setProducts(filteredRating);
    }

    if (
      !selectedBrands.length &&
      !selectedSize.length &&
      !selectedRating.length
    ) {
      setProducts(productsData);
    }
  }, [selectedBrands, selectedSize, selectedRating]);

  return (
    <aside className="">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">Filter</h5>
        <FaChevronDown
          className=" block sm:hidden"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>
      <div
        className={`grid grid-cols-2 sm:block ${
          isFilterOpen ? "block" : "hidden"
        }  mt-3 `}
      >
        <div>
          <b className="text-base">Brand</b>
          <ul className="ml-3 mt-1">
            {brandsName.map((brand, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <Checkbox name={brand} handleChange={handleBrandName} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-3">
          <b className="text-base">Size</b>
          <ul className="ml-3 mt-1">
            {uniqueSize.map((size, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <Checkbox name={size} handleChange={handleSize} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-3">
          <b className="text-base">Rating</b>
          <ul className="ml-3 mt-1">
            {ratingNum.map((num) => {
              return (
                <li key={num} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    name="rating"
                    id={num}
                    onChange={() => handleRating(num)}
                    className="w-4 h-4"
                  />
                  <label htmlhtmlFor={num} className="capitalize">
                    <Rating star={num} />
                    {/* {num} */}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
