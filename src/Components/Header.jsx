import React, { useState } from "react";
import { TfiHeart, TfiShoppingCart } from "react-icons/tfi";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const totalProduct = cart.reduce(
    (total, product) => total + product?.quantity,
    0
  );
  return (
    <header className="flex justify-between items-center py-7 px-7 shadow-md">
      <div>
        <a href="" className="text-2xl font-bold">
          PRODUCT<span className="text-lime-500">HUNT</span>{" "}
        </a>
      </div>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link to={"/"}>Products</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <div>
          <TfiHeart className="text-2xl" />
        </div>
        <div className="relative">
          <TfiShoppingCart
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <span className="absolute -top-3 -right-3 bg-lime-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">{totalProduct}</span>
        </div>
      </div>
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
