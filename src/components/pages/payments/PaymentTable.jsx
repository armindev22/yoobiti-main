import React, { useState } from "react";
// SVGs
import ProductImg from "../../../assets/product/product1.svg";
import ProfileAli from "../../../assets/support/Frame 11236.svg";
import ProfileSara from "../../../assets/support/support-2.svg";

const PaymentTable = ({ setStage }) => {
  const data = [
    {
      date: "2023/10/22",
      customer: "sara azimi",
      profile: ProfileSara,
      product1: "product test 1",
      ProductImg1: ProductImg,
      product2: "product test 2",
      PaymentMethod: "online",
      status: "Successful",
      amount: "$234.54",
    },
    {
      date: "2023/10/22",
      customer: "ali rezaei",
      profile: ProfileAli,
      product1: "product test 1",
      ProductImg1: ProductImg,
      product2: "product test 2",
      PaymentMethod: "online",
      status: "Successful",
      amount: "$234.54",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "date", key: "date" },
    { name: "customer", key: "customer" },
    { name: "Product/Services", key: "product" },
    { name: "Payment method", key: "paymentMethod" },
    { name: "Status", key: "status" },
    { name: "Amount", key: "amount" },
  ]);
  // const history = useHistory();

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6">
      <div className="grid grid-cols-7 gap-4 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}
        {headerEvenetTable.map((item, index) => (
          <div
            key={index}
            className={`${
              item.name === "Product/Services" ? "col-span-2" : null
            }`}
          >
            <p className="text-text-20 text-h9 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-7 gap-4 items-center mb-2 px-2 mt-3 cursor-pointer"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
          onClick={() => setStage("paymentDetail")}
        >
          <div className="">
            <p className="text-sm  capitalize text-primary-20 ">{item.date}</p>
          </div>
          <div className="flex items-center">
            <img src={item.profile} className="rounded-full mr-2 w-9" />
            <p className="text-sm  capitalize text-primary-5">
              {item.customer}
            </p>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center mr-1">
              <img src={ProductImg} className="w-9 mr-2 rounded-full" />
              <p className="py-4 text-sm font-semibold capitalize text-primary-20 whitespace-pre-wrap">
                {item.product1}
              </p>
            </div>
            ,
            <div className="flex items-center">
              <img src={ProductImg} className="w-9 mr-2 rounded-full" />
              <p className="py-4 text-sm font-semibold capitalize text-primary-20 whitespace-pre-wrap">
                {item.product2}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">
              {item.PaymentMethod}
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-tertiary-70">
              {item.status}
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">{item.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentTable;
