import React from "react";
// SVGs
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg";
// components
import ShippingTable from "./ShippingTable";

const Shipping = ({ setStage }) => {
  return (
    <>
      <div className="flex flex-col gap-3 border-l px-4">
        <h1 className="font-semibold capitalize text-h7 text-primary-20">
          Shipping and Delivery
        </h1>

        {/* Shipping regions */}
        <div
          className=" p-4 rounded-lg flex flex-col gap-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="flex gap-3 ">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-h8 capitalize font-semibold text-primary-20 ">
                Shipping regions
              </h2>
              <p className="text-text-20 mb-2">
                Manage where you offer shipping, local delivery or pickup, and
                how much you charge for each option at checkout.
              </p>
            </div>
            <div className="w-1/3 flex items-center justify-end">
              <button
                className="px-3.5 py-2.5 rounded-md bg-primary-5 text-white flex gap-1 items-center"
                onClick={() => {
                  setStage("shippingAdd");
                }}
              >
                <PlusIcon />
                add regions
              </button>
            </div>
          </div>

          {/*  table */}
          <div>
            <ShippingTable setStage={setStage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
