import React, { useState } from "react";
// SVGs
import ProfileAli from "../../../assets/support/Frame 11236.svg";
import ProfileSara from "../../../assets/support/support-2.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as ShowIcon } from "../../../assets/icons/Show.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";

const PaymentTable = () => {
  const data = [
    {
      number: "0000002",
      customer: "sara azimi",
      profile: ProfileSara,
      issueDate: "2023/12/10",
      dueDate: "2023/12/12",
      total: "$345.54",
      status: "paid",
    },
    {
      number: "0000002",
      customer: "Ali Rezaei",
      profile: ProfileAli,
      issueDate: "2023/12/10",
      dueDate: "2023/12/12",
      total: "$345.54",
      status: "draft",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "Number", key: "number" },
    { name: "Customer", key: "customer" },
    { name: "Issue Date", key: "issueDate" },
    { name: "Due Date", key: "dueDate" },
    { name: "Total", key: "total" },
    { name: "status", key: "status" },
  ]);

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6 my-6">
      <div className="grid grid-cols-7 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div
            key={index}
            className={`flex items-center  ${
              item.name === "status" ? "col-span-2" : ""
            } `}
          >
            {item.name === "Number" ? (
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
          className="bg-white rounded-10 grid grid-cols-7  gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center   ">
            <div className="justify-self-start ml-2 mr-3 px-3 border-r">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <p className=" py-1 text-sm  text-primary-20  whitespace-pre-wrap">
              {item.number}
            </p>
          </div>
          <div className="flex items-center">
            <img src={item.profile} className="rounded-full mr-2 w-9" />
            <p className="text-h10 text-sm capitalize text-primary-5">
              {item.customer}
            </p>
          </div>

          <div className="">
            <p className="text-sm  capitalize text-primary-20">
              {item.issueDate}
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="text-sm  capitalize text-primary-20">
              {item.dueDate}
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">{item.total}</p>
          </div>

          <div className="flex items-center justify-between col-span-2">
            <p
              className={`text-sm  capitalize ${
                item.status === "paid"
                  ? "px-3 py-2 bg-tertiary-80 text-tertiary-70 rounded-full"
                  : item.status === "draft"
                  ? "px-3 py-2 bg-surface-20 text-text-70 rounded-full"
                  : null
              }`}
            >
              {item.status}
            </p>{" "}
            <div className=" flex mx-2">
              <button className="text-primary-5 bg-primary-10 p-2 rounded-10 mx-1">
                <ShowIcon />
              </button>
              <button
                className={` p-2 rounded-10 mx-1 ${
                  item.status === "draft"
                    ? "text-primary-5 bg-primary-10"
                    : item.status === "paid"
                    ? "text-text-20 bg-surface-20 "
                    : null
                }`}
              >
                <EditIcon />
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

export default PaymentTable;
