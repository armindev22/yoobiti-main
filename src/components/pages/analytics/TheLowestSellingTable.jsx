import React, { useState } from "react";
// SVGs
import ProductOne from "../../../assets/product/product1.svg";

const TheLowestSellingTable = ({ setStage }) => {
  const data = [
    {
      name: "product test 1",
      ProductOne: ProductOne,
      price: "$356",
      salesNumber: "12",
    },
    {
      name: "product test 2",
      ProductOne: ProductOne,
      price: "$356",
      salesNumber: "12",
    },
    {
      name: "product test 3",
      ProductOne: ProductOne,
      price: "$356",
      salesNumber: "12",
    },
    {
      name: "product test 3",
      ProductOne: ProductOne,
      price: "$356",
      salesNumber: "12",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "name", key: "name" },
    { name: "price", key: "price" },
    { name: "salesNumber", key: "salesNumber" },
  ]);

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6   h-96 overflow-auto">
      <div className="grid grid-cols-3 gap-2 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div key={index} className="">
            <p className="text-text-20 text-h10 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-3  gap-2 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center   ">
            <img className="rounded-full mr-3" src={item.ProductOne} />
            <p className=" py-1 text-sm  text-black  whitespace-pre-wrap">
              {item.name}
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">{item.price}</p>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-sm  capitalize text-primary-20">
              {item.salesNumber}
            </p>
            <div className=" flex mx-2">
              <button className="text-primary-5 text-sm  bg-primary-10 px-3 py-1.5 rounded-md mx-1">
                see
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheLowestSellingTable;
