import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// SVGs
import ProductOne from "../../../assets/product/product1.svg";
import ProfileSara from "../../../assets/support/support-2.svg";
import { ReactComponent as NoteIcon } from "../../../assets/icons/Note.svg";
const OrdersTable = ({ setStage }) => {
  const data = [
    {
      order: "#123445-a32",
      product: "product test 1",
      ProductOne: ProductOne,
      date: "2023/10/11",
      buyer: "sara azimi",
      profile: ProfileSara,
      payment: "paid",
      total: "$443.54",
    },
    {
      order: "#123445-a32",
      product: "product test 2",
      ProductOne: ProductOne,
      date: "2023/10/11",
      buyer: "sara azimi",
      profile: ProfileSara,
      payment: "paid",
      total: "$443.54",
    },
    {
      order: "#123445-a32",
      product: "product test 1",
      ProductOne: ProductOne,
      date: "2023/10/11",
      buyer: "sara azimi",
      profile: ProfileSara,
      payment: "paid",
      total: "$443.54",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "order", key: "order" },
    { name: "product", key: "product" },
    { name: "date", key: "date" },
    { name: "buyer", key: "buyer" },
    { name: "payment", key: "payment" },
    { name: "total", key: "total" },
  ]);
  const history = useHistory();

  return (
    <div
      className=" bg-white rounded-[20px] py-3 px-6 my-6"
      style={{
        boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="grid grid-cols-6 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.name === "order" ? (
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
          className="bg-white rounded-10 grid grid-cols-6 gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center  ">
            <div className="justify-self-start ml-2 mr-3 px-3 border-r">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <p className=" text-h10 font-normal capitalize text-[#365687]  ">
              {item.order}
            </p>
          </div>
          <div className="flex items-center justify-start ">
            <img className="rounded-full mr-3" src={item.ProductOne} />
            <p className=" py-1 text-sm font-medium text-black  whitespace-pre-wrap">
              {item.product}
            </p>
          </div>
          <div className="">
            <p className="text-h8 font-normal capitalize text-black">
              {item.date}
            </p>
          </div>
          <div className="flex items-center justify-start">
            <img src={item.profile} className="rounded-full mr-3  w-9" />
            <p className="text-h8 font-normal capitalize text-primary-5">
              {item.buyer}
            </p>
          </div>
          <div className="">
            <p
              className={
                item.payment === "paid"
                  ? "text-h8 font-normal capitalize text-[#0F5232]"
                  : "text-h8 font-normal capitalize text-[#F44]"
              }
            >
              {item.payment}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-h8 font-normal capitalize text-black">
              {item.total}
            </p>
            <div className="mx-4 px-2">
              <button
                className="text-primary-5 bg-primary-10 p-2 rounded-10"
                onClick={() => {
                  setStage("ordersdetails");
                }}
              >
                <NoteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersTable;
