import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// import imgpr from "../../assets/product/product1.svg";
import ProductOne from "../../assets/product/product1.svg";

const ShopPaymentTable = () => {
  const data = [
    {
      orderNumber: "#123445-a32",
      product: "product test 1",
      ProductOne: ProductOne,

      price: "$234.54",
      date: "2023/10/11",
      state: "paid",
    },
    {
      orderNumber: "#123445-a32",
      product: "product test 2",
      ProductOne: ProductOne,

      price: "$234.54",
      date: "2023/10/11",
      state: "unpaid",
    },
    {
      orderNumber: "#123445-a32",
      product: "product test 3",
      ProductOne: ProductOne,

      price: "$234.54",
      date: "2023/10/11",
      state: "paid",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "orderNumber", key: "ordernumber" },
    { name: "product", key: "product" },
    { name: "price", key: "price" },
    { name: "date", key: "date" },
    { name: "state", key: "state" },
  ]);
  const history = useHistory();

  return (
    <div
      className=" bg-white rounded-[20px] py-3 px-6"
      style={{
        boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <p className="font-semibold  text-lg capitalize ">last's payments</p>
      <hr className="border-2 border-surface-20 w-full my-3" />
      <div className="grid grid-cols-5 gap-5 py-3 border-y-[1px] border-[#EFEFEF]">
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
          className="bg-white rounded-10 grid grid-cols-5 gap-5 items-center mb-2 px-2 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <p className="text-h10 font-normal capitalize text-[#365687] ">
            {item.orderNumber}
          </p>
          <div className="grid grid-cols-2 gap-2 items-center">
            <img className="rounded-full mx-2" src={item.ProductOne} />
            <p className=" py-1 text-sm font-medium text-black  whitespace-pre-wrap">
              {item.product}
            </p>
          </div>
          <div className="flex items-center">
            <p className="py-4 text-sm font-medium capitalize text-primary-5 whitespace-pre-wrap">
              {item.price}
            </p>
          </div>
          <div className="">
            <p className="text-h8 font-normal capitalize text-black">
              {item.date}
            </p>
          </div>
          <div className="">
            <p
              className={
                item.state === "paid"
                  ? "text-h8 font-normal capitalize text-[#0F5232]"
                  : "text-h8 font-normal capitalize text-[#F44]"
              }
            >
              {item.state}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPaymentTable;
