import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// SVGs
import ProfileSara from "../../../assets/support/support-2.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-right-white.svg";
const OrdersTable = ({ setStage }) => {
  const data = [
    {
      name: "shop test 1",
      dateRequest: "2023/12/4",
      areaOfExpertise: "Clothes sale",
      buyer: "sara azimi",
      profile: ProfileSara,
    },
    {
      name: "shop test 1",
      dateRequest: "2023/12/4",
      areaOfExpertise: "Clothes sale",
      buyer: "sara azimi",
      profile: ProfileSara,
    },
    {
      name: "shop test 1",
      dateRequest: "2023/12/4",
      areaOfExpertise: "Clothes sale",
      buyer: "sara azimi",
      profile: ProfileSara,
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "order", key: "order" },
    { name: "date request", key: "daterequest" },
    { name: "area of expertise", key: "areaoFexpertise" },
    { name: "manager name", key: "managername" },
  ]);
  const history = useHistory();

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6 my-6">
      <div className="grid grid-cols-6 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div key={index} className="">
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
          <div className="  ">
            <p className=" text-h9 font-normal capitalize text-primary-20  ">
              {item.name}
            </p>
          </div>
          <div className=" ">
            <p className=" py-1 text-sm font-medium text-primary-20  whitespace-pre-wrap">
              {item.dateRequest}
            </p>
          </div>
          <div className="">
            <p className="text-h9 font-normal capitalize text-primary-20">
              {item.areaOfExpertise}
            </p>
          </div>
          <div className="flex items-center justify-start">
            <img src={item.profile} className="rounded-full mr-3  w-9" />
            <p className="text-h8 font-normal capitalize text-primary-5">
              {item.buyer}
            </p>
          </div>
          <div className=" flex justify-between mx-2 col-span-2">
            <button className="bg-primary-5 text-primary-10 py-1.5 px-3.5 rounded-10 mx-1">
              View request
            </button>
            <button className="bg-error-10 text-primary-10 py-1.5 px-3.5 rounded-10 mx-1">
              reject
            </button>{" "}
            <button className="bg-tertiary-70 text-primary-10 py-1.5 px-3.5 rounded-10 mx-1 flex items-center">
              <ArrowIcon className="w-5 mr-2" />
              confirm
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersTable;
