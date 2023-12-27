import React, { useState } from "react";
// SVGs
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as ShowIcon } from "../../../assets/icons/Show.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
// PNGs
import ProfileSara from "../../../assets/support/support-2.svg";

const UsersTable = ({ setStage }) => {
  const data = [
    {
      profile: ProfileSara,
      name: "sara azimi",
      email: "saraazimi23@gmail.com",
      status: "member",
      NumberOfPurchases: "34",
      dateOfRegister: "2022/12/13",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "name", key: "name" },
    { name: "email", key: "email" },
    { name: "status", key: "status" },
    { name: "Number of purchases", key: "NumberOfPurchases" },
    { name: "date of register", key: "dateOfRegister" },
  ]);

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6 ">
      <div className="grid grid-cols-8 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div
            key={index}
            className={`flex items-center  ${
              item.name === "date of register"
                ? "col-span-2"
                : item.name === "email"
                ? "col-span-2"
                : item.name === "name"
                ? "col-span-2"
                : null
            } `}
          >
            {item.name === "name" ? (
              <div className="justify-self-start  ml-2 mr-3 px-3 border-r">
                <input type="checkbox" className="cursor-pointer" />
              </div>
            ) : null}
            <p className="text-text-20 text-h8 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-8  gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center col-span-2  ">
            <div className="justify-self-start ml-2 mr-3 px-3 border-r">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <img src={item.profile} className="rounded-full mr-2 w-9" />
            <p className=" py-1 text-sm font-semibold capitalize  text-primary-5  whitespace-pre-wrap">
              {item.name}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-h10 text-sm  text-primary-20">{item.email}</p>
          </div>

          <div className="">
            <p className="text-sm  capitalize bg-tertiary-80 px-1.5 py-2 w-4/5 rounded-full text-tertiary-70 flex justify-center">
              {item.status}
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="text-sm  capitalize text-primary-20">
              {item.NumberOfPurchases}
            </p>
          </div>

          <div className="flex items-center justify-between col-span-2">
            <p className={`text-sm  capitalize `}>{item.dateOfRegister}</p>{" "}
            <div className=" flex mx-2">
              <button
                className="text-primary-5 bg-primary-10 p-2 rounded-10 mx-1"
                onClick={() => {
                  setStage("usersDetail");
                }}
              >
                <ShowIcon />
              </button>
              <button
                className={` p-2 rounded-10 mx-1 text-primary-5 bg-primary-10 `}
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

export default UsersTable;
