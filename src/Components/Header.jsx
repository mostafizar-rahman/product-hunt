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
    <header className="flex justify-between items-center py-7 px-7 ">
      <Link to={"/"} className="xl:text-3xl text-2xl font-bold ">
        PRODUCT<span className="text-lime-500">HUNT</span>{" "}
      </Link>

      <div className="flex items-center justify-between lg:basis-[70%]  ">
        <div className="lg:flex items-center  hidden">
          <input
            type="text"
            className="border border-lime-500 outline-none py-[9.6px] xl:w-96 lg:w-72"
          />
          <button className="bg-lime-500 border border-lime-500 text-white py-2 xl:px-7 px-5 text-lg">
            Search
          </button>
        </div>
        <div className="flex  sm:divide-x-2 divide-gray-500">
          <div className="sm:flex hidden items-center gap-2 xl:pr-10 pr-7">
            <Link to={""} className="text-sm">
              Login
            </Link>
            <span className="text-sm">|</span>
            <Link to={""} className="text-sm">
              Register
            </Link>
          </div>
          <div className="flex items-center xl:gap-9 gap-5 xl:pl-10 pl-7">
            <div>
              <TfiHeart className="xl:text-3xl text-2xl" />
            </div>
            <div className="relative">
              <TfiShoppingCart
                className="xl:text-3xl text-2xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
              <span className="absolute -top-3 -right-3 bg-lime-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">
                {totalProduct}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
