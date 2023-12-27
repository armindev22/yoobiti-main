import React from "react";
// components
import InputSearch from "../../../common/Inputes/InputSearch";
import TaxTable from "./TaxTable";
// SVGs
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg";

const Tax = ({ setStage }) => {
  return (
    <>
      <div className="flex flex-col gap-4 border-l px-4">
        {/* question */}
        <div
          className="flex justify-between p-4 rounded-lg "
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <p className="text-primary-20">
            Do you want to collect tax on your customers?
          </p>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <input type="radio" className="cursor-pointer" />
              <label className="text-primary-20 font-semibold">no</label>
            </div>

            <div className="flex gap-1">
              <input type="radio" className="cursor-pointer" />
              <label className="text-primary-20 font-semibold">yes</label>
            </div>
          </div>
        </div>

        {/* tax setting */}

        <div
          className=" p-4 rounded-lg flex flex-col gap-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <h2 className="text-h8 capitalize font-semibold text-primary-20 ">
            tax setting
          </h2>
          <p className="text-text-20 mb-2">
            How would you like to collect tax?
          </p>
          <div className="flex gap-1">
            <input type="radio" className="cursor-pointer" />
            <label className="text-primary-20 font-semibold">
              Tax should be added at checkout
            </label>
          </div>
          <div className="flex gap-1">
            <input type="radio" className="cursor-pointer" />
            <label className="text-primary-20 font-semibold">
              Tax is already included in the price of my items
            </label>
          </div>
        </div>

        {/* tax location */}
        <div
          className=" p-4 rounded-lg flex flex-col gap-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="flex gap-3 justify-between">
            <div className="flex flex-col gap-2 w-1/3">
              <h2 className="text-h8 capitalize font-semibold text-primary-20 ">
                Tax locations
              </h2>
              <p className="text-text-20 mb-2">
                You'll only be collecting tax for locations that appear in this
                list.
              </p>
            </div>
            <div className="flex gap-4 items-center  ">
              <div className="">
                <InputSearch />
              </div>
              <button className="px-3.5 py-2.5 rounded-md bg-primary-5 text-white flex gap-1 items-center">
                <PlusIcon />
                add location
              </button>
            </div>
          </div>

          {/*  table */}
          <div>
            <TaxTable setStage={setStage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tax;
