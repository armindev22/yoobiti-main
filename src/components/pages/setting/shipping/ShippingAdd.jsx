import React from "react";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../../../../assets/icons/Tick.svg";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/close.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/Edit.svg";
import { ReactComponent as TrashIcon } from "../../../../assets/icons/Trash Bin.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg";
// PNGs
import flag from "../../../../assets/flag/US_flag_49_stars 1.png";
import flag2 from "../../../../assets/flag/Flag_of_the_United_Kingdom_(1-2) 1.png";

const ShippingAdd = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header>
        <div>
          <div className="flex items-center mb-3 font-semibold text-h10">
            <h3 className="text-text-20">setting</h3>
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />
            <h3 className="text-text-20">shipping</h3>
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />
            <h3 className="text-primary-20">add a new region</h3>
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
      {/* top */}

      <section
        className=" p-4 rounded-lg my-4"
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <h2 className="font-semibold capitalize text-primary-20 text-h8 mb-2">
          Region
        </h2>
        <p className="text-text-20 mb-3">
          Add a single destination or group of destinations to manage this
          region's shipping, delivery, and pickup options.
        </p>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 flex-col">
              <label className="font-semibold text-primary-20">
                region name
              </label>
              <input
                type="text"
                placeholder="enter a name for region..."
                className="border rounded-md p-3 w-full"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label className="font-semibold text-primary-20">
                Add the destinations in this region:
              </label>
              <div className="p-3 rounded-md w-full border flex gap-4 items-center">
                <div className="  px-3 h-7 rounded-full bg-primary-10 flex gap-2 items-center justify-center">
                  <img src={flag} className="rounded-full w-5" />
                  <h5 className="text-primary-20  text-xs">United State</h5>
                  <CloseIcon className="w-3 cursor-pointer" />
                </div>
                <div className="  px-3 h-7 rounded-full bg-primary-10 flex gap-2 items-center justify-center">
                  <img src={flag2} className="rounded-full w-5" />
                  <h5 className="text-primary-20  text-xs">United Kingdom </h5>
                  <CloseIcon className="w-3 cursor-pointer" />
                </div>
              </div>
            </div>

            <p className="text-text-20">
              Press Enter or add a comma after each choice.
            </p>
          </div>
        </div>
      </section>

      {/* bottom */}
      <section
        className=" p-4 rounded-lg my-4"
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <h2 className="font-semibold capitalize text-primary-20 text-h8 mb-2">
          Shipping
        </h2>
        <p className="text-text-20 mb-3">
          Apply shipping rates to this region.
        </p>
        {/* input */}
        <div className="flex items-center gap-5">
          <div className="flex gap-1">
            <input type="radio" />
            <label className="text-primary-20">free shopping</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" />
            <label className="text-primary-20">flat rate</label>
          </div>{" "}
          <div className="flex gap-1">
            <input type="radio" />
            <label className="text-primary-20">rate by weight</label>
          </div>{" "}
          <div className="flex gap-1">
            <input type="radio" />
            <label className="text-primary-20">rate by price</label>
          </div>
        </div>

        {/*  */}
        <div
          className=" p-4 rounded-lg my-4 grid grid-cols-4 content-center"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <p className="text-primary-20 flex items-center">free shopping</p>
          <p className="text-primary-20 flex items-center">
            3 - 5 business days
          </p>
          <div className="flex justify-between col-span-2">
            <p className="text-primary-20 flex items-center">free</p>
            <div className="flex gap-2">
              <button className="text-primary-5 bg-primary-10 p-2 rounded-10 ">
                <EditIcon />
              </button>
              <button className={` p-2 rounded-10  text-error-10 bg-error-20 `}>
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex">
          <button className="flex gap-1 items-center">
            <PlusIcon className="w-5 text-text-20" />
            <p className="text-primary-5">Add new option</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default ShippingAdd;
