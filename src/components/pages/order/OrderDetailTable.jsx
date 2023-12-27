import React, { useState } from "react";
// SVGs
import ProductOne from "../../../assets/product/product1.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
const OrderDetailTable = () => {
  const data = [
    {
      productName: "product test 1",
      ProductOne: ProductOne,
      FullFilled: "#234",
      price: "$567.65",
      count: "10",
      total: "$5067.65",
    },
    {
      productName: "product test 2",
      ProductOne: ProductOne,
      FullFilled: "#234",
      price: "$567.65",
      count: "10",
      total: "$5067.65",
    },
  ];
  const secondData = [
    {
      productName: "product test 1",
      ProductOne: ProductOne,
      FullFilled: "-",
      price: "$567.65",
      count: "2",
      total: "$5067.65",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "product name", key: "productname" },
    { name: "Fulfilled", key: "fulfilled" },
    { name: "price", key: "price" },
    { name: "count", key: "count" },
    { name: "total", key: "total" },
  ]);

  return (
    <div
      className=" bg-white rounded-[20px] py-3 px-6 my-6"
      style={{
        boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h2 className=" my-3 text-h8 font-semibold">item’s</h2>
      <div className="grid grid-cols-5 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div key={index} className="flex items-center">
            <p className="text-text-20 text-h8 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* product to ship header */}
      <div className="text-primary-5 flex justify-between items-center my-3">
        <h3 className="font-semibold">Products to Ship</h3>
        <button className="bg-primary-10 px-4 py-2.5  rounded-3xl flex items-center capitalize">
          <EditIcon className="mr-3" />
          edit traking number
        </button>
      </div>

      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-5 gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center  ">
            <img className="rounded-full mr-3" src={item.ProductOne} />
            <p className=" text-h10 font-normal capitalize text-[#365687]  ">
              {item.productName}
            </p>
          </div>
          <div className="flex items-center justify-start ">
            <p className=" py-1 text-sm font-medium text-black  whitespace-pre-wrap">
              {item.FullFilled}
            </p>
          </div>
          <div className="">
            <p className="text-h8 font-normal capitalize text-black">
              {item.price}
            </p>
          </div>
          <div>
            <p className="text-h8 font-normal capitalize text-primary-5 ">
              {item.count}
            </p>
          </div>

          <div>
            <p className="text-h8 font-normal capitalize text-black">
              {item.total}
            </p>
          </div>
        </div>
      ))}
      {/* second data row */}
      <h3 className="text-primary-5 capitalize font-semibold my-3">
        custom item
      </h3>
      {secondData.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-5 gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center  ">
            <img className="rounded-full mr-3" src={item.ProductOne} />
            <p className=" text-h10 font-normal capitalize text-[#365687]  ">
              {item.productName}
            </p>
          </div>
          <div className="flex items-center justify-start ">
            <p className=" py-1 text-sm font-medium text-black  whitespace-pre-wrap">
              {item.FullFilled}
            </p>
          </div>
          <div className="">
            <p className="text-h8 font-normal capitalize text-black">
              {item.price}
            </p>
          </div>
          <div>
            <p className="text-h8 font-normal capitalize text-primary-5 ">
              {item.count}
            </p>
          </div>

          <div>
            <p className="text-h8 font-normal capitalize text-black">
              {item.total}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetailTable;
