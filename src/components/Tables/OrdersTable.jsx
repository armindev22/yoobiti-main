import React, { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";
// import imgpr from "../../assets/product/product1.svg";
import ProductOne from "../../assets/product/product1.svg";
import ProfileAli from "../../assets/support/Frame 11236.svg";
import ProfileSara from "../../assets/support/support-2.svg";
const ShopOrderTable = () => {
  const data = [
    {
      name: "product test 1",
      number: "3",
      price: "$43",
      buyer: "sara azimi",
      ProductOne: ProductOne,
      profile: ProfileSara,
    },
    {
      name: "product test 1",
      number: "5",
      price: "$234",
      buyer: "reza amiri",
      ProductOne: ProductOne,
      profile: ProfileAli,
    },
    {
      name: "product test 1",
      number: "1",
      price: "$45",
      buyer: "ali shams",
      ProductOne: ProductOne,
      profile: ProfileAli,
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "name", key: "name" },
    { name: "number", key: "number" },
    { name: "price", key: "price" },
    { name: "buyer", key: "buyer" },
  ]);
  // const history = useHistory();

  return (
    <div
      className=" bg-white rounded-[20px] py-3 px-6"
      style={{
        boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <p className="font-semibold  text-lg capitalize ">last's orders</p>
      <hr className="border-2 border-surface-20 w-full my-3" />
      <div className="grid grid-cols-4 gap-4 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}
        {headerEvenetTable.map((item, index) => (
          <div key={index} className="">
            <p className="text-text-20 text-h9 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-4 gap-4 items-center mb-2 px-2 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="grid grid-cols-2 gap-2 items-center">
            <img className="rounded-full mx-2" src={item.ProductOne} />
            <p className="text-h10 font-normal capitalize text-primary-20 ">
              {item.name}
            </p>
          </div>
          <div>
            <p className=" py-1 text-sm font-medium text-primary-5  whitespace-pre-wrap">
              {item.number}
            </p>
          </div>
          <div className="flex items-center">
            <p className="py-4 text-sm font-medium capitalize text-black whitespace-pre-wrap">
              {item.price}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 items-center">
            <img src={item.profile} className="rounded-full mx-1 w-9" />
            <p className="text-h10 font-normal capitalize text-primary-5">
              {item.buyer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopOrderTable;
