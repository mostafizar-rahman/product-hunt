import React from "react";
import {
  dicrementProduct,
  incrementProduct,
  removeToCart,
} from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartProducts = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <ul className="flex flex-col divide-y divide-gray-300">
      {cart?.map(({ id, quantity, name, price, img }) => {
        return (
          <li
            key={id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-contain w-16 h-16  rounded outline-none sm:w-24 sm:h-24 bg-gray-200"
                src={img}
                alt="Set of travel chargers"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className=" font-semibold leadi sm:pr-8">{name}</h3>
                    <p className="text-sm dark:text-gray-400">Black</p>
                  </div>
                  <div className="text-right">
                    <p className=" font-semibold">${price}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm gap-4">
                  <button
                    onClick={() => dispatch(removeToCart(id))}
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1 pr-4 border-r border-r-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <div className="flex gap-3 w-[120px]">
                    <button
                      onClick={() => dispatch(incrementProduct(id))}
                      className=" text-xl px-2"
                    >
                      +
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="w-[30px] text-center outline-none bg-slate-50 "
                      readOnly
                    />
                    <button
                      onClick={() => dispatch(dicrementProduct(id))}
                      className=" text-xl px-2"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartProducts;
