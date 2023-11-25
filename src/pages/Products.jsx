import React, { useState } from "react";
import { productsData } from "../Utlits/ProductsData";
import SideBar from "../Components/SideBar";
import SortingBar from "../Components/SortingBar";
import Card from "../Components/Card";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [productLayout, setProductLayout] = useState(4);

  return (
    <>
      <section className="max-w-[1370px] mx-auto px-5 mt-7">
        <div className="grid lg:grid-cols-[20%_auto] sm:grid-cols-[30%_auto] grid-cols-1 gap-3">
          <SideBar setProducts={setProducts} products={products} />
          <div className="mt-9 sm:mt-0">
            <SortingBar
              setProducts={setProducts}
              products={products}
              setProductLayout={setProductLayout}
              productLayout={productLayout}
            />
            <div
              className={`grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5 `}
            >
              {products.map(
                ({ id, brand, color, desc, img, name, price, sizes }) => (
                  <Card
                    key={id}
                    id={id}
                    brand={brand}
                    color={color}
                    desc={desc}
                    img={img}
                    name={name}
                    price={price}
                    sizes={sizes}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
