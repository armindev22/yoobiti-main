import React from "react";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../../../../assets/icons/Tick.svg";
import { ReactComponent as PercentIcon } from "../../../../assets/icons/Percent.svg";

const TaxEdit = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header>
        <div>
          <div className="flex items-center mb-3 font-semibold text-h10">
            <h3 className="text-text-20">setting</h3>
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />
            <h3 className="text-text-20">tax</h3>
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />
            <h3 className="text-primary-20">Alabama</h3>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setStage("mainSetting");
            }}
            className="flex items-center gap-x-1 cursor-pointer mb-3"
          >
            <ArrowIcon className="text-primary-20 w-5 rotate-180" />
            <p className="text-primary-20 text-h9  font-semibold">back</p>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-text-10 rounded-10 text-white">
              cancle
            </button>
            <button className="px-4 py-2 dashboard-blue-gradient  text-white flex gap-1 items-center">
              <TickIcon />
              save
            </button>
          </div>
        </div>
      </header>
      {/* main */}

      <section
        className=" p-4 rounded-lg my-4"
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <h2 className="font-semibold capitalize text-primary-20 text-h8 mb-2">
          Tax rates
        </h2>
        <p className="text-text-20 mb-3">
          Set up the tax rates customers will be charged when they order from
          this location.
        </p>
        <div>
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <label className="font-semibold text-primary-20">
                Shipping and delivery
              </label>
              <div className="border rounded-md p-2 flex items-center mt-2">
                <div className="border-r pr-2 mr-2">
                  <PercentIcon className=" text-text-20" />
                </div>
                <input type="text" placeholder="for example 10" className="" />
              </div>
            </div>
            <div className="w-full">
              <label className="font-semibold text-primary-20">Products</label>
              <div className="border rounded-md p-2 flex items-center mt-2">
                <div className="border-r pr-2 mr-2">
                  <PercentIcon className=" text-text-20" />
                </div>
                <input type="text" placeholder="for example 3" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxEdit;
