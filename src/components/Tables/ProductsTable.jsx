import React, { useState } from "react";
// SVGs
import ProductOne from "../../assets/product/product1.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/Edit.svg";
import { ReactComponent as ShowIcon } from "../../assets/icons/Show.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
const ProductsTable = ({ setStage }) => {
  const data = [
    {
      name: "product test 1",
      ProductOne: ProductOne,
      sku: "364215376135191",
      type: "physical",
      price: "$ 490.65",
      inventory: "in stock",
      brand: "brand test",
    },
    {
      name: "product test 2",
      ProductOne: ProductOne,
      sku: "364215376135191",
      type: "Digital",
      price: "$ 490.65",
      inventory: "in stock",
      brand: "brand test",
    },
    {
      name: "product test 3",
      ProductOne: ProductOne,
      sku: "364215376135191",
      type: "physical",
      price: "$ 490.65",
      inventory: "in stock",
      brand: "brand test",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "name", key: "name" },
    { name: "SKU", key: "sku" },
    { name: "type", key: "type" },
    { name: "price", key: "price" },
    { name: "inventory", key: "inventory" },
    { name: "brand", key: "brand" },
  ]);

  return (
    <div
      className=" bg-white rounded-[20px] py-3 px-6 my-6"
      style={{
        boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="grid grid-cols-8 gap-2 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              item.name === "name" ? "col-span-2" : ""
            } ${item.name === "brand" ? "col-span-2" : ""} `}
          >
            {item.name === "name" ? (
              <div className="justify-self-start  ml-2 mr-3 px-3 border-r">
                <input type="checkbox" className="cursor-pointer" />
              </div>
            ) : (
              ""
            )}
            <p className="text-text-20 text-h8 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-8 font-semibold gap-2 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center col-span-2  ">
            <div className="justify-self-start ml-2 mr-3 px-3 border-r">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <img className="rounded-full mr-3" src={item.ProductOne} />
            <p className=" py-1 text-sm  text-black  whitespace-pre-wrap">
              {item.name}
            </p>
          </div>

          <div className="">
            <p className="text-sm  capitalize text-black">{item.sku}</p>
          </div>
          <div className="flex items-center justify-start">
            <p className="text-sm  capitalize text-black">{item.type}</p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-5">{item.price}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm  capitalize text-black">{item.inventory}</p>
          </div>
          <div className="flex items-center justify-between col-span-2">
            <p className="text-sm  capitalize text-black">{item.brand}</p>
            {/* </div>
          <div> */}
            <div className=" flex mx-2">
              <button
                className="text-primary-5 bg-primary-10 p-2 rounded-10 mx-1"
                onClick={() => {
                  setStage("productdetail");
                }}
              >
                <EditIcon />
              </button>
              <button
                className="text-primary-5 bg-primary-10 p-2 rounded-10 mx-1"
                onClick={() => {
                  setStage("productdetail");
                }}
              >
                <ShowIcon />
              </button>{" "}
              <button className="text-primary-5 bg-primary-10 p-2 rounded-10 mx-1">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsTable;
