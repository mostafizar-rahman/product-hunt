import React from "react";
import InputField from "./Common/InputField";

const AddressFiled = ({ handleChangeInput }) => {
  return (
    <>
      <p className="text-xl font-medium">Personal Info</p>
      <p className="text-gray-400">
        Complete your order by providing your Personal Info.
      </p>
      <div className="">
        <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">
          <span>Name</span>
          <InputField
            id={"name"}
            name={"name"}
            placeholder={"Jon Deo"}
            type={"text"}
            handleChangeInput={handleChangeInput}
          />
        </label>
        <label htmlFor="number" className="mt-4 mb-2 block text-sm font-medium">
          <span>Number</span>
          <InputField
            id={"number"}
            name={"number"}
            placeholder={"01575699193"}
            type={"number"}
            handleChangeInput={handleChangeInput}
          />
        </label>
        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
          <span>Email</span>
          <InputField
            id={"email"}
            name={"email"}
            placeholder={"your.email.com"}
            type={"email"}
            handleChangeInput={handleChangeInput}
          />
        </label>
        <label
          htmlFor="division"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Address
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <InputField
            type={"text"}
            id={"division"}
            name={"division"}
            placeholder={"Division"}
            handleChangeInput={handleChangeInput}
          />

          <InputField
            type={"text"}
            id={"district"}
            name={"district"}
            placeholder={"District"}
            handleChangeInput={handleChangeInput}
          />

          <input
            type="text"
            name="billing-zip"
            className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="ZIP"
          />
        </div>

      </div>
    </>
  );
};

export default AddressFiled;
