import React from "react";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as ProfileImg } from "../../../assets/support/Frame 11236.svg";
// PNGs
import ProductImg from "../../../assets/product/product2.png";
const PaymnetDetail = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header>
        <div>
          <div className="flex items-center mb-3 font-semibold text-h10">
            <h3 className="text-text-20">payments</h3>{" "}
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />{" "}
            <h3>$234.54 payments</h3>
          </div>
        </div>
        <div
          onClick={() => {
            setStage("payment");
          }}
          className="flex items-center gap-x-1 cursor-pointer mb-3"
        >
          <ArrowIcon className="text-text-30 w-5 rotate-180" />
          <p className="text-black text-h9  font-medium">back</p>
        </div>
      </header>
      {/* nav */}
      <nav>
        <h1 className="text-h5 text-primary-5 font-semibold my-2">
          Order #10001
        </h1>
        <p className="text-text-20">
          Placed on<span> Oct 9, 2023, 3:39 PM </span>
        </p>
      </nav>
      {/* section main */}
      <section className="my-5">
        {/* div top */}
        <div
          style={{
            boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="py-3 px-4 rounded-xl my-3.5"
        >
          <div className="flex gap-4 items-center">
            <h3 className="text-h7 font-semibold">€34.00</h3>
            <p className="px-4 py-2 rounded-full bg-tertiary-80 text-tertiary-70">
              Successful
            </p>
          </div>

          <hr className="border  my-4" />

          <div className=" grid grid-cols-4 gap-4">
            <div>
              <h3 className="text-text-20 ">Date </h3>
              <p className="text-primary-20 capitalize font-semibold my-3">
                Oct 15, 2023
              </p>
              <span className="text-text-20">05:13 PM</span>
            </div>
            <div>
              <h3 className="text-text-20 ">Payment method </h3>
              <p className="text-primary-20 font-semibold my-3">
                Pay in Person
              </p>
              <p className="text-text-20">Offline Payments</p>
            </div>
            <div>
              <h3 className="text-text-20 mb-3">Customer</h3>
              <div className="flex items-center gap-2">
                <ProfileImg className=" w-7 h-7 rounded-full" />
                <p className="text-primary-5 capitalize font-semibold ">
                  sara azimi
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-text-20 ">Order type</h3>
              <p className="text-primary-20 font-semibold my-3">
                eCom Platform
              </p>
              <p className="text-primary-5 font-semibold flex items-center gap-2 cursor-pointer">
                order #10001 <ArrowIcon className="text-text-20 w-6" />
              </p>
            </div>
          </div>
        </div>
        {/* middle */}
        <div
          style={{
            boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="py-3 px-4 rounded-xl my-3.5 "
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-h7 text-primary-20 font-semibold">
              Payment details
            </h1>
            <div className="grid grid-cols-2 w-4/5">
              <h4 className="text-text-20">Payment provider</h4>
              <p className="text-primary-20 font-semibold">Offline Payments</p>
            </div>
            <div className="grid grid-cols-2 w-4/5">
              <h4 className="text-text-20">Method</h4>
              <p className="text-primary-20 font-semibold">Pay in Person</p>
            </div>
            <div className="grid grid-cols-2 w-4/5">
              <h4 className="text-text-20">Offline Payments payment ID</h4>
              <p className="text-primary-5 font-semibold flex gap-2 items-center cursor-pointer">
                87017c8a-a71b-49fd-a3b1-674b96615b96
                <ArrowIcon className="w-6 text-text-20" />
              </p>
            </div>
          </div>
          <hr className="border my-3" />
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-primary-20 text-h7">
              Billing details
            </h1>
            <div className="grid grid-cols-2 w-4/5">
              <h4 className="text-text-20">Billing name</h4>
              <p className="text-primary-5 font-semibold">sara azimi</p>
            </div>
            <div className="grid grid-cols-2 w-4/5">
              <h4 className="text-text-20">Billing address</h4>
              <p className="text-primary-5 font-semibold">sara azimi</p>
            </div>
            <div className="grid grid-cols-2 w-4/5">
              <h4 className="text-text-20">Email</h4>
              <p className="text-primary-20 font-semibold">
                saraazimi34@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          style={{
            boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="py-3 px-4 rounded-xl my-3.5 flex flex-col gap-6"
        >
          <div className="flex justify-between gap-3">
            <h1 className="text-h7 font-semibold">
              Order <span className="text-primary-5">#10003</span> details
            </h1>
            <p className="text-primary-5 flex items-center gap-2 cursor-pointer font-semibold">
              view order <ArrowIcon className="text-text-20 w-6" />
            </p>
          </div>
          <h2 className="text-h8 text-primary-20 ">Products or services</h2>
          <div className="flex justify-between gap-3 ">
            <div className="flex gap-3 items-center">
              <img src={ProductImg} className="rounded-full w-11" />
              <p className="font-semibold">product test 1</p>
            </div>
            <div className="flex justify-between items-center gap-5 font-semibold w-[15%]">
              <p className="capitalize">QTY: 1</p>
              <span className="text-primary-5">$23</span>
            </div>
          </div>

          <div className="flex justify-between gap-3 ">
            <div className="flex gap-3 items-center">
              <img src={ProductImg} className="rounded-full w-11" />
              <p className="font-semibold">product test 2</p>
            </div>
            <div className="flex justify-between items-center gap-5 font-semibold w-[15%]">
              <p className="capitalize">QTY: 1</p>
              <span className="text-primary-5">$23.43</span>
            </div>
          </div>

          <div>
            <h2 className="text-primary-20 font-semibold text-h8">
              Total amount
            </h2>
            <hr className="border my-4" />
            <div className="flex justify-between gap-3">
              <h2 className="text-primary-20 font-semibold text-h8">
                Total amount
              </h2>
              <span className="text-primary-5 font-semibold">$45.43</span>
            </div>
          </div>
        </div>

        {/* footer  */}
        <div
          style={{
            boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="py-3 px-4 rounded-xl my-3.5 flex flex-col gap-6"
        >
          <h1 className="text-primary-20 text-h7 font-semibold">
            Payment history
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-tertiary-70 rounded-full"></div>
            <p className="text-text-20 mr-6">October 15, 2023, 05:13 PM</p>
            <p className="px-4 py-2 rounded-full bg-tertiary-80 text-tertiary-70">
              Successful
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymnetDetail;
