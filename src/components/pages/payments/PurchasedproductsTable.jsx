import React, { useState } from "react";
// SVGs
import ProductImg from "../../../assets/product/product1.svg";

const PurchasedproductsTable = ({ setStage }) => {
  const data = [
    {
      ProductImg1: ProductImg,
      ProductName: "product test 1",
      color: "black",
      price: "$20",
      Quantity: "4",
      taxes: "tax 1 ",
      PercentTaxes: "3",
      lineTotal: "$80",
    },
    {
      ProductImg1: ProductImg,
      ProductName: "product test 2",
      color: "black",
      price: "$20",
      Quantity: "4",
      taxes: "tax 2 ",
      PercentTaxes: "20",
      lineTotal: "$80",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "product name", key: "productName" },
    { name: "Price", key: "Price" },
    { name: "Quantity", key: "Quantity" },
    { name: "taxes", key: "taxes" },
    { name: "Line Total", key: "lineTotal" },
  ]);
  // const history = useHistory();

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6">
      <div className="grid grid-cols-6 gap-4 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}
        {headerEvenetTable.map((item, index) => (
          <div
            key={index}
            className={`${item.name === "product name" ? "col-span-2" : null}`}
          >
            <p className="text-text-20 text-h9 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-6 gap-4 items-center mb-2 px-2 mt-3 cursor-pointer"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
          onClick={() => setStage("paymentDetail")}
        >
          <div className=" flex items-center gap-1 col-span-2">
            <img src={ProductImg} className="w-9 mr-2 rounded-full" />
            <div>
              <p className="text-sm font-semibold  capitalize text-primary-20 ">
                {item.ProductName}
              </p>
              <span className="text-text-20 text-xs">{item.color}</span>
            </div>
          </div>

          <div className="flex items-center">
            <p className="text-sm  capitalize text-primary-5">{item.price}</p>
          </div>
          <div className=" ">
            <p className="text-sm  capitalize text-primary-20">
              {item.Quantity}
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">
              {item.taxes}(
              <span className="text-primary-5">%{item.PercentTaxes}</span>)
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">
              {item.lineTotal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchasedproductsTable;
