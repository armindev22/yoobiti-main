import React, { useState } from "react";

const UsersTable = () => {
  const data = [
    {
      number: "0000002",
      issueDate: "Oct 15, 2023",
      dueDate: "Nov 14, 2023",
      Total: "$324.4",
      status: "paid",
    },
    {
      number: "0000002",
      issueDate: "Oct 15, 2023",
      dueDate: "Nov 14, 2023",
      Total: "$324.4",
      status: "draft",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "Number", key: "number" },
    { name: "Issue Date", key: "issueDate" },
    { name: "Due Date", key: "dueDate" },
    { name: "Total", key: "Total" },
    { name: "status", key: "status" },
  ]);

  return (
    <div className=" bg-white rounded-[20px] py-3 px-6 ">
      <div className="grid grid-cols-5 gap-4 px-2 py-3 border-y-[1px] border-[#EFEFEF]">
        {/* Header */}

        {headerEvenetTable.map((item, index) => (
          <div key={index} className={`flex items-center  `}>
            <p className="text-text-20 text-h8 font-normal">{item.name}</p>
          </div>
        ))}
      </div>
      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          className="bg-white rounded-10 grid grid-cols-5  gap-4 items-center mb-2 px-2 py-3 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div className="  ">
            <p className="  text-sm  capitalize  text-primary-20  ">
              {item.number}
            </p>
          </div>
          <div className="">
            <p className=" text-sm capitalize  text-primary-20">
              {item.issueDate}
            </p>
          </div>

          <div className="">
            <p className="text-sm  capitalize text-primary-20">
              {item.dueDate}
            </p>
          </div>
          <div className="">
            <p className="text-sm  capitalize text-primary-20">{item.Total}</p>
          </div>

          <div className="flex items-center  justify-between  ">
            <p
              className={`text-sm  capitalize px-3 py-2 rounded-full ${
                item.status === "paid"
                  ? " bg-tertiary-80 text-tertiary-70"
                  : item.status === "draft"
                  ? " bg-surface-20 text-primary-20"
                  : null
              } `}
            >
              {item.status}
            </p>{" "}
            <button className="bg-primary-5 text-white px-3 py-2 rounded-md">
              view
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersTable;
