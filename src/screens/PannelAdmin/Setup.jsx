import React from "react";
import { ReactComponent as SuccessIcon } from "../../../src/assets/icons/success.svg";
import { ReactComponent as ErrorIcone } from "../../../src/assets/icons/Error-icon.svg";
import { ReactComponent as ArrowRight } from "../../../src/assets/icons/arrow-right-white.svg";

const Setup = () => {
  return (
    <div className="mt-32 mx-2.5 w-full">
      <div className=" my-[50px] mx-2.5 h-[450px] w-full ">
        <div className="m-5 flex flex-col h-full justify-between capitalize ">
          <div className="flex items-center border-b-[1px] border-[#EFEFEF] pb-[50px]">
            <div className="flex-1">
              <p className="text-[#365687]">Let's set up your store</p>
            </div>
            <div>3/4 Completed</div>
            <div className="bg-[#EEF2F8] w-36 h-3 rounded-10 ml-5">
              <div className="w-28 h-3  bg-gradient-to-r from-[#246CDA] to-[#609FFF] bg- rounded-10"></div>
            </div>
          </div>
          <div className=" flex flex-col justify-between h-[336px]">
            <div className=" dashboard-boxshadow py-3 px-4 flex">
              <p className="flex-1">Update Your Store Type</p>
              <SuccessIcon />
            </div>
            <div className=" dashboard-boxshadow py-3 px-4 border-solid border-[1px] border-[#FF4444] flex  items-center">
              <p className="flex-1"> Connect A Custom Domin</p>
              <ErrorIcone className="mx-[15px]" />
              <span className="text-[#609FFF] ">Set Domain</span>
              <ArrowRight className="text-[#609FFF]" />
            </div>
            <div className="dashboard-boxshadow py-3 px-4 flex">
              <p className="flex-1">Set Up Payment Method</p>
              <SuccessIcon />
            </div>
            <div className="py-3 px-4 dashboard-boxshadow flex">
              <p className="flex-1">Design Your Website</p>
              <SuccessIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
