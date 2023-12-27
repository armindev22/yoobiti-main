import React from "react";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as PayPal } from "../../../../assets/support/payPal 1.svg";

const Payment = () => {
  return (
    <>
      <section className="border-l px-4">
        <div
          className=" p-4 rounded-lg my-4"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* top */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h2 className="font-semibold capitalize text-primary-20 text-h8 mb-2">
                Accept Payments
              </h2>
              <p className="text-text-20">
                Connect payment options so your customers can pay. You can add
                or switch payment options at any time.
              </p>
            </div>
            <div>
              <h3 className="capitalize text-primary-20 mb-3">
                Your business location
              </h3>
              <div className="border px-3 py-2 flex justify-between items-center cursor-pointer">
                <p className="text-primary-5">United State</p>
                <ArrowIcon className="text-text-40 w-5 rotate-90" />
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className=" p-4 rounded-lg my-4 flex justify-between"
            style={{
              boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="flex gap-2 items-center">
              <PayPal />
              <div className="flex flex-col gap-1">
                <h4 className="text-primary-20  ">PayPal</h4>
                <p className="text-text-20">
                  Allows you to accept PayPal payments.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-primary-5 px-3 py-2 rounded-lg text-white">
                {" "}
                connect
              </button>
            </div>
          </div>
          {/*  */}
          <div
            className=" p-4 rounded-lg my-4 flex justify-between"
            style={{
              boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="flex gap-2 items-center">
              <PayPal />
              <div className="flex flex-col gap-1">
                <h4 className="text-primary-20  ">PayPal</h4>
                <p className="text-text-20">
                  Allows you to accept PayPal payments.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-3 py-2 text-tertiary-70">connected</button>
              <button className="error-gradient px-3 py-2 rounded-lg text-white">
                {" "}
                delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
