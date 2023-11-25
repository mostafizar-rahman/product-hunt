import React from "react";

const methodsList = [
  {
    id: 1,
    name: "Sundarban Courier Service",
    logo: "https://www.sundarbancourierltd.com/FontendStyle/img/scsLogo20.jpg",
    time: "2-4",
    price_in_dhaka: 10,
    price_outside_dhaka: 15,
  },
  {
    id: 2,
    name: "RedX",
    logo: "https://redx.com.bd/images/new-redx-logo.svg",
    time: "2-4",
    price_in_dhaka: 10,
    price_outside_dhaka: 15,
  },
  {
    id: 3,
    name: "eCourier",
    logo: "https://ecourier.com.bd/wp-content/themes/ecourier-2.0/images/logo.svg",
    time: "2-4",
    price_in_dhaka: 10,
    price_outside_dhaka: 15,
  },
];
const ShippingMethods = ({handleShippingMethod}) => {
  return (
    <>
      <p className="mt-8 text-lg font-medium">Shipping Methods</p>
      <form className="mt-5 grid gap-6">
        {methodsList.map(
          ({ id, logo, name, price_in_dhaka, price_outside_dhaka, time }) => {
            return (
              <div key={id} className="relative">
                <input
                  className="peer hidden"
                  id={id}
                  type="radio"
                  name="radio"
                  // checked
                  onChange={()=> handleShippingMethod(price_in_dhaka, price_outside_dhaka, name)}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor={id}
                >
                  <img
                    className="w-14 object-contain"
                    src={logo}
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">{name}</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: {time} Days
                    </p>
                    <small className="text-slate-500 text-xs">
                      Delivery Charge out-side Dhaka ${price_outside_dhaka} and
                      in-side Dhaka {price_in_dhaka}
                    </small>
                  </div>
                </label>
              </div>
            );
          }
        )}
      </form>
    </>
  );
};

export default ShippingMethods;
