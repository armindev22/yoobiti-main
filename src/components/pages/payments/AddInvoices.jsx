import React from "react";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as YobitiLogo } from "../../../assets/logo/yobiti-logo-2.svg";
// PNGs
import SignPng from "../../../assets/landing/1663831182 1.png";
// components
import PurchasedproductsTable from "./PurchasedproductsTable";

const AddInvoices = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header>
        <div>
          <div className="flex items-center mb-3 font-semibold text-h10">
            <h3 className="text-text-20">payments</h3>{" "}
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />
            <h3 className="text-text-20">invoices</h3>
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />
            <h3 className="text-primary-20">add a new invoice</h3>
          </div>
        </div>
        <div
          onClick={() => {
            setStage("invoices");
          }}
          className="flex items-center gap-x-1 cursor-pointer mb-3"
        >
          <ArrowIcon className="text-text-30 w-5 rotate-180" />
          <p className="text-black text-h9  font-medium">back</p>
        </div>
      </header>
      {/* main section */}
      <section
        style={{
          boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
        }}
        className="p-4 rounded-xl my-3.5 w-11/12 mx-auto"
      >
        {/* logo */}
        <nav className="flex items-center gap-1">
          <YobitiLogo />
          <h2 className="text-primary-20 ">Yoobiti</h2>
        </nav>
        {/* order id */}
        <div className="flex justify-between my-5">
          <div>
            <h1 className="text-h5 text-primary-5 font-semibold my-2">
              Order #10001
            </h1>
            <p className="text-text-20">
              Placed on<span> Oct 9, 2023, 3:39 PM </span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="capitalize flex flex-col gap-3">
              <h4 className="text-text-20">Issue Date</h4>
              <p className="font-semibold text-primary-20">Oct 15, 2023</p>
            </div>
            <hr className="border h-full" />
            <div className="capitalize flex flex-col gap-3">
              <h4 className="text-text-20">Due Date</h4>
              <p className="font-semibold text-primary-20">Oct 16, 2023</p>
            </div>
          </div>
        </div>

        <hr className="border" />

        {/*  */}
        <div className="my-5 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-text-20">Sales representative</h4>
            <p className="font-semibold text-primary-20">sara shop</p>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h4 className="text-text-20">PO number</h4>
            <p className="font-semibold text-primary-20">2345662</p>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h4 className="text-text-20">Reference number</h4>
            <p className="font-semibold text-primary-20">24235364587658769</p>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h4 className="text-text-20">Tracking number </h4>
            <p className="font-semibold text-primary-20">24987ds6578FG65523</p>
          </div>
        </div>

        <hr className="border" />

        {/* customer info : */}
        <div className="my-5 flex flex-col gap-3">
          <h3 className="text-text-20">customer info :</h3>
          <h2 className="font-semibold text-primary-5 capitalize text-h8">
            Sara Azimi
          </h2>
          <p className="text-primary-20 font-semibold">
            {" "}
            saraazimi342@gmail.com
          </p>
        </div>

        <hr className="border" />

        {/* table */}

        <div className="my-5">
          <h1 className="text-primary-20 text-h7 font-semibold px-6 my-2">
            Purchased products
          </h1>
          <PurchasedproductsTable />
        </div>

        <hr className="border" />

        {/* bottom */}

        <div className="flex  justify-end my-4 px-2">
          <div className=" w-[30%] p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center px-3">
              <h4 className="text-text-20">Subtotal :</h4>
              <p className="font-semibold text-primary-20">$160</p>
            </div>
            <div className="flex justify-between items-center px-3">
              <h4 className="text-text-20">tax 1 :</h4>
              <p className="font-semibold text-primary-20">%3</p>
            </div>{" "}
            <div className="flex justify-between items-center px-3">
              <h4 className="text-text-20">tax 2 :</h4>
              <p className="font-semibold text-primary-20">%10</p>
            </div>
            <hr className="border w-full" />
            <div className="flex justify-between items-center px-3">
              <h4 className="text-text-20">Invoice Total :</h4>
              <p className="font-semibold text-primary-20">$180.8</p>
            </div>{" "}
            <div className="flex justify-between items-center px-3">
              <h4 className="text-text-20">Amount Paid :</h4>
              <p className="font-semibold text-primary-20">$0</p>
            </div>
            <div className="rounded-xl py-2 px-3 bg-primary-10 w-full flex justify-between">
              <h4 className="text-primary-20 ">Balance Due :</h4>
              <p className="font-semibold text-primary-5">$180.8</p>
            </div>
          </div>
        </div>

        <hr className="border" />

        {/* sign section */}

        <div className="flex justify-between my-5">
          <div>
            <p className="text-text-20 mb-3">Thanks for your purchase</p>
            <h4 className="font-semibold text-primary-20 text-h8">
              Yoobiti team
            </h4>
          </div>
          <img src={SignPng} />
        </div>
      </section>
    </>
  );
};

export default AddInvoices;
