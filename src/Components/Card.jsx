import React from "react";
import { TfiEye, TfiHeart, TfiShoppingCart } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const Card = ({ id, name, price, desc, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="  p-1 transition-all hover:shadow-md group ">
      <div className="relative after:absolute after:top-1/2 after:left-1/2 after:transition-all after:duration-700 after:group-hover:top-0 after:group-hover:left-0 after:w-0 after:h-0 after:group-hover:w-full after:group-hover:h-full after:bg-white after:bg-opacity-40  ">
        <img
          src={img}
          alt=""
          className="w-full h-[230px] object-contain relative bg-gray-200 "
        />

        <div className="">
          <div
            onClick={() => dispatch(addToCart({ id, name, price, img }))}
            title="Add To Cart"
            className="bg-white overflow-hidden p-3 absolute top-1/2 left-0 -translate-y-1/2 opacity-0 transition-all duration-500 cursor-pointer group-hover:left-[18%] group-hover:opacity-100 z-40 group/cartIcon  "
          >
            <TfiShoppingCart className="text-2xl transition-all duration-700  group-hover/cartIcon:-translate-y-10  group-hover/cartIcon:h-0  group-hover/cartIcon:visible" />
            <TfiShoppingCart className="text-2xl transition-all duration-700 translate-y-10 h-0 invisible group-hover/cartIcon:translate-y-0 group-hover/cartIcon:h-auto group-hover/cartIcon:visible " />
          </div>
          <div
            title="View Details"
            className="bg-white p-3 absolute top-1/2 right-0 -translate-y-1/2 opacity-0 transition-all duration-500 cursor-pointer group-hover:right-[18%] group-hover:opacity-100 z-40"
          >
            <TfiEye className="text-2xl" />
          </div>
          <div
            title="Add To Whitlist"
            className="bg-white p-3 absolute top-[70%] left-1/2 -translate-x-1/2 opacity-0 transition-all duration-700 cursor-pointer group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100 z-40"
          >
            <TfiHeart className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-1">
        <p className="text-[17px]">{name}</p>
        <p className="text-gray-500 text-[15px]">${price}</p>
        <small className="leading-[20px] block mt-1 text-gray-500">
          consectetur adipisicing elit. Molestias id dicta ad, inventore
          voluptatum fugit! ...
        </small>
      </div>
    </div>
  );
};

export default Card;
