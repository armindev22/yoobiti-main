import React, { useState } from "react";
import { ReactComponent as TrashBinIcon } from "../../assets/icons/Trash Bin.svg";
import ViewButton from "../../components/common/Button/ViewButton";

const CommunicationsTable = ({ setStage }) => {
  const data = [
    {
      name: "sara azimi",
      email: "saraazimi45@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores possimus fugit aspernatur aliquid maxime magni placeat natus ex culpa. Nisi consectetur odit deserunt tempor...",
    },
    {
      name: "sara azimi",
      email: "saraazimi45@gmail.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores possimus fugit aspernatur aliquid maxime magni placeat natus ex culpa. Nisi consectetur odit deserunt tempor...",
    },
  ];
  const [headerEvenetTable] = useState([
    { name: "name", key: "name" },
    { name: "email", key: "email" },
    { name: "message", key: "message" },
  ]);
  // const history = useHistory();
  // const [stage , setStage] = useState("communication")
  return (
    <div className=" bg-white rounded-[20px] py-3 px-6">
      <h2 className="font-semibold  text-lg capitalize ">all communications</h2>
      <hr className="border-2 border-surface-20 w-full my-3" />
      <div className="grid grid-cols-6 gap-4 py-3 border-y-[1px] border-[#EFEFEF]">
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
          className="bg-white rounded-10 grid grid-cols-6 gap-4 items-center mb-2 px-2 mt-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          key={index}
        >
          <div>
            <p className=" font-normal  text-primary-20 ">{item.name}</p>
          </div>
          <div>
            <p className=" py-1 text-sm font-medium whitespace-pre-wrap">
              {item.email}
            </p>
          </div>
          <div className=" truncate  items-center col-span-3">
            <p className=" truncate	py-4 text-sm font-medium  text-black whitespace-pre-wrap line-clamp-1">
              {item.message}
            </p>
          </div>
          <div className=" truncate grid grid-cols-2 gap-4  items-center ">
            <ViewButton title={"view"} changeState={() => setStage("view")} />
            <button className="flex justify-center items-center h-10 rounded-10 cursor-pointer px-1 bg-[#FFEDED]">
              <TrashBinIcon className="text-[#FF4444]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunicationsTable;
