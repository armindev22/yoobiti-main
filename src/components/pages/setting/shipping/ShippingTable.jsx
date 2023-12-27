import React, { useState } from "react";
// SVGs
import { ReactComponent as EditIcon } from "../../../../assets/icons/Edit.svg";
import { ReactComponent as TrashIcon } from "../../../../assets/icons/Trash Bin.svg";

// PNGs
import flag from "../../../../assets/flag/US_flag_49_stars 1.png";

const ShippingTable = ({ setStage }) => {
  const data = [
    {
      flag: flag,
      locationCountries: [
        "United State",
        "United Kingdom",
        " France ",
        "United State",
        "United Kingdom",
        " France ",
        "United State",
        "United Kingdom",
        " France ",
        "United State",
        "United Kingdom",
        " France ",
        "United State",
        "United Kingdom",
        " France ",
      ],
      region: "Region 1",
      deliveryOption: "shopping, pickup",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "region", key: "region" },
    { name: "delivery option", key: "deliveryOption" },
  ]);

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6 ">
      <div className="grid grid-cols-2 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div key={index} className={`flex items-center   `}>
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
          className="bg-white rounded-10 grid grid-cols-2  gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center gap-2  ">
            <div className="w-9 relative">
              <img src={item.flag} className="rounded-full  w-full" />
              <div className="bg-primary-10 w-5 rounded-full h-5 absolute  -top-1 right-0 flex justify-center items-center text-[8px]">
                <p className="text-primary-5 ">
                  +{item.locationCountries.length - 1}
                </p>
              </div>
            </div>
            {/* <img src={item.flag} className="rounded-full  w-9" /> */}
            <div>
              <h4 className="font-semibold text-primary-20">{item.region}</h4>
              <p className=" py-1 text-sm  capitalize  text-primary-20  whitespace-pre-wrap">
                {item.locationCountries.slice(0, 3).join(", ")}
                <span className="text-text-20">
                  {item.locationCountries.length > 3 &&
                    `+${item.locationCountries.length - 3} other`}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-h10 text-sm  text-primary-20">
              {item.deliveryOption}
            </p>
            <div className=" flex mx-2 items-center gap-2 ">
              <div className="dashboard-blue-gradient w-10 h-5 rounded-full flex justify-end items-center">
                <div className="bg-primary-10 rounded-full w-3 h-3 mx-1 cursor-pointer"></div>
              </div>
              <button
                className="text-primary-5 bg-primary-10 p-2 rounded-10 "
                onClick={() => {
                  setStage("shippingAdd");
                }}
              >
                <EditIcon />
              </button>
              <button className={` p-2 rounded-10  text-error-10 bg-error-20 `}>
                <TrashIcon />
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShippingTable;
