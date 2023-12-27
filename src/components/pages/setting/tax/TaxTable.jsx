import React, { useState } from "react";
// SVGs
import { ReactComponent as EditIcon } from "../../../../assets/icons/Edit.svg";
import { ReactComponent as TrashIcon } from "../../../../assets/icons/Trash Bin.svg";

// PNGs
import flag from "../../../../assets/flag/US_flag_49_stars 1.png";

const TaxTable = ({ setStage }) => {
  const data = [
    {
      flag: flag,
      locationCountry: "United States",
      locationCity: "Alabama",
      txRate: "%10",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "location", key: "location" },
    { name: "tx rate", key: "txRate" },
  ]);

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6 ">
      <div className="grid grid-cols-3 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div
            key={index}
            className={`flex items-center  ${
              item.name === "tx rate" ? "col-span-2" : null
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
          className="bg-white rounded-10 grid grid-cols-3  gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="flex items-center gap-2  ">
            <img src={item.flag} className="rounded-full  w-9" />
            <div>
              <h4 className="font-semibold text-primary-20">
                {item.locationCity}
              </h4>
              <p className=" py-1 text-sm  capitalize  text-text-20  whitespace-pre-wrap">
                {item.locationCountry}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between col-span-2">
            <p className="text-h10 text-sm  text-primary-20">{item.txRate}</p>
            <div className=" flex mx-2">
              <button
                className="text-primary-5 bg-primary-10 p-2 rounded-10 mx-1"
                onClick={() => {
                  setStage("taxEdit");
                }}
              >
                <EditIcon />
              </button>
              <button
                className={` p-2 rounded-10 mx-1 text-error-10 bg-error-20 `}
              >
                <TrashIcon />
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaxTable;
