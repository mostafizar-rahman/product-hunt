import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import SortingBar from "../Components/SortingBar";
import Card from "../Components/Card";


import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";

const productsData = [
  {
    id: 1,
    img: img1,
    name: "Shart",
    price: 20,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 5,
    brand: "esy",
    color: "black",
    sizes: ["xl", "xxl"],
  },
  {
    id: 2,
    img: img2,
    name: "Shart",
    price: 55,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 4,
    brand: "esy",
    color: "black",
    sizes: ["m", "xl", "l"],
  },
  {
    id: 3,
    img: img3,
    name: "T-Shart",
    price: 15,

    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 3,
    brand: "guess",
    color: "black",
    sizes: [ "xl", "m"],
  },
  {
    id: 4,
    img: img4,
    name: "T-Shart Full",
    price: 20,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "lee",
    color: "black",
    sizes: ["m", "xxl", "l"],
  },
  {
    id: 5,
    img: img5,
    name: "Shart",
    price: 35,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "lee",
    color: "black",
    sizes: ["l", "xxl"],
  },
  {
    id: 6,
    img: img6,
    name: "Shart",
    price: 45,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "guess",
    color: "black",
    sizes: ["m", "l"],
  },
  {
    id: 7,
    img: img7,
    name: "Pant",
    price: 80,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "calvin klein",
    color: "black",
    sizes: ["m", "xl"],
  },
  {
    id: 8,
    img: img8,
    name: "Pant",
    price: 60,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "wrnggler",
    color: "black",
    sizes: ["xl", "m"],
  },
  {
    id: 9,
    img: img9,
    name: "T-Shart",
    price: 15,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "wrnggler",
    color: "black",
    sizes: ["l", "xxl"],
  },
  {
    id: 10,
    img: img10,
    name: "T-Shart",
    price: 15,
    desc: "consectetur adipisicing elit. Molestias id dicta ad, inventore voluptatum fugit!",
    rating: 1,
    brand: "calvin klein",
    color: "black",
    sizes: ["xl", "xxl"],
  },
];

const Products = () => {

  const [products, setProducts] = useState(productsData);

  return (
    <>
      <section className="max-w-[1370px] mx-auto px-5 mt-7">
        <div className="grid lg:grid-cols-[20%_auto] sm:grid-cols-[30%_auto] grid-cols-1 gap-3">
          <SideBar setProducts={setProducts} products={products} />
          <div className="mt-9 sm:mt-0">
            <SortingBar
              setProducts={setProducts}
              products={products}
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
