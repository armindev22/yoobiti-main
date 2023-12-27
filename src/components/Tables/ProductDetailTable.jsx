import React, { useState } from "react";

const ProductDetailTable = () => {
  const [data] = useState([
    {
      colorName: "green",
      color: "tertiary-70",
      priceDifference: "$45.6",
      variantPrice: "$145.6",
      status: "in stock",
    },
    {
      colorName: "yellow",
      color: "tertiary-40",
      priceDifference: "$45.6",
      variantPrice: "$145.6",
      status: "in stock",
    },
    {
      colorName: "blue",
      color: "primary-5",
      priceDifference: "$45.6",
      variantPrice: "$145.6",
      status: "in stock",
    },
    {
      colorName: "red",
      color: "error-10",
      priceDifference: "$45.6",
      variantPrice: "$145.6",
      status: "in stock",
    },

    {
      ProductOption: [
        {
          colorName: "green",
          color: "tertiary-70",
        },
        {
          colorName: "yellow",
          color: "tertiary-40",
        },
        {
          colorName: "blue",
          color: "primary-5",
        },
        {
          colorName: "red",
          color: "error-10",
        },
      ],
    },
  ]);
  const [headerEvenetTable] = useState([
    { name: "Variant", key: "variant" },
    { name: "Price difference (+/-)", key: "Pricedifference" },
    { name: "Variant price", key: "variantprice" },
    { name: "Status", key: "status" },
  ]);
  // const history = useHistory();

  return (
    <div className=" bg-white rounded-[20px]  px-6">
      <hr className="border-2 border-surface-20 w-full my-3" />
      <div className="grid grid-cols-4 gap-4 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}
        {headerEvenetTable.map((item, index) => (
          <div key={index} className="">
            <p className="text-text-20  text-base font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-4 gap-4 items-center my-3 px-2 "
          key={index}
        >
          {/* {item.ProductOption.map((option, index) => {
            return (
              <div key={index} className="flex items-center mx-1.5">
                <div
                  className={`rounded-full w-3 h-3 bg-${option.color} mr-1`}
                ></div>
                <p>{option.colorName}</p>
              </div>
            );
          })} */}
          <div className="flex items-center mx-1.5 text-primary-20 ">
            <div className={`rounded-full w-3 h-3 bg-${item.color} mr-1`}></div>
            <p>{item.colorName}</p>
          </div>

          <div className="">
            <p className="text-sm  font-normal capitalize  ">
              {item.priceDifference}
            </p>
          </div>
          <div>
            <p className="  text-sm font-medium  whitespace-pre-wrap">
              {item.variantPrice}
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-sm font-medium capitalize  whitespace-pre-wrap">
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailTable;
