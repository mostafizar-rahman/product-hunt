import React from "react";
import { TfiClose } from "react-icons/tfi";

import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";

const Cart = ({ isOpen, setIsOpen }) => {

  return (
    <aside
      className={`max-w-[420px] w-full h-full fixed top-0 transition-all duration-700  ${
        isOpen ? "right-0" : "-right-full"
      } z-50 overflow-y-auto bg-gray-50`}
    >
      <div
        className={`fixed bg-gray-50 w-8 h-8 flex justify-center items-center cursor-pointer right-[420px] transition-all duration-700  ${
          isOpen ? "top-0" : "top-full"
        } z-50`}
        onClick={() => setIsOpen(false)}
      >
        <TfiClose />
      </div>

      {/* ------------ Product List */}
      <div className="flex flex-col  p-2 space-y-4 sm:p-5 ">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <CartProducts />
        <div className="flex justify-end ">
          <Link
            to={"/checkout"}
            className="px-9 py-3 border rounded-sm bg-lime-600 text-white text-lg "
          >
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
