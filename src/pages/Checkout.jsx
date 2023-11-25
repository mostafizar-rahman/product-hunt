import React, { useEffect, useState } from "react";
import AddressFiled from "../Components/AddressFiled";
import CartProducts from "../Components/CartProducts";
import { useSelector } from "react-redux";
import ShippingMethods from "../Components/ShippingMethods";

const Checkout = () => {
  const [info, setInfo] = useState({
    name: "",
    number: "",
    email: "",
    division: "",
    district: "",
    zip: "",
  });
  const [shipping, setShipping] = useState({
    shippingName: "",
    shippingPrice: "",
  });

  //   -------- Function for personal Input filed
  const handleChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInfo({ ...info, [name]: value });

  };

  //   ------- Funtion for selected shiping method
  const handleShippingMethod = (price_in_dhaka, price_outside_dhaka, name) => {
    const divisionName = info.division.toLocaleLowerCase();
    if (divisionName !== "dhaka") {
      setShipping({ shippingPrice: price_outside_dhaka, shippingName: name });
    } else {
      setShipping({ shippingPrice: price_in_dhaka, shippingName: name });
    }
  };

  //   --------- Calclut Price
  const { cart } = useSelector((state) => state.cart);
  const subTotalPrice = cart.reduce(
    (total, product) => total + product?.price * product?.quantity,
    0
  );
  let totalPrice = 0;
  if (shipping.shippingPrice === "") {
    totalPrice = 0;
  } else {
    totalPrice = subTotalPrice + parseFloat(shipping.shippingPrice);
  }

  //   useEffect(() => {
  //     if (info.division !== "") {

  //     }
  //   }, [info.division]);

  return (
    <div className="max-w-[1370px] mx-auto mt-7 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 gap-10">
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Summary</p>
        <p className="text-gray-400">
          Check your items. And select a suitable shipping method.
        </p>
        <CartProducts />
        <ShippingMethods handleShippingMethod={handleShippingMethod} />
      </div>
      <div className="mt-10  px-4 pt-8 lg:mt-0">
        <AddressFiled handleChangeInput={handleChangeInput} />
        <div className="mt-9 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">${subTotalPrice}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">
              ${shipping.shippingPrice === "" ? 0 : shipping.shippingPrice}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">${totalPrice}</p>
        </div>
        <button className="mt-4 mb-8 w-full rounded-sm text-lg bg-lime-600 px-6 py-3 font-medium text-white">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
