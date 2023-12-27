import React from "react";
// SVGs
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as RotateIcon } from "../../../assets/icons/Rotate Left.svg";
import { ReactComponent as InfoIcon } from "../../../assets/icons/Info-Circle.svg";
import { ReactComponent as ChatIcon } from "../../../assets/icons/Chat.svg";
import { ReactComponent as ProfileUser } from "../../../assets/dashboard/user-img.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as TickIcon } from "../../../assets/icons/Tick.svg";

import OrderDetailTable from "./OrderDetailTable";

const DetailOrders = ({ setStage }) => {
  const OrderActivityData = [
    {
      message: "Order marked as Paid.",
      time: "12:10 am",
    },
    {
      message: "Order marked as Paid.",
      time: "12:10 am",
    },
    {
      message: "sara azimi placed an order.",
      time: "12:10 am",
    },
  ];
  return (
    <>
      <div className="flex items-center font-semibold">
        <h5 className=" text-text-20">orders</h5>
        <ArrowRightIcon className=" text-text-20  w-6" />
        <h5>Order #10001</h5>
      </div>
      <div className="my-3">
        <button
          className="flex items-center"
          onClick={() => {
            setStage("orders");
          }}
        >
          <ArrowRightIcon className=" text-text-20 rotate-180 w-6" />
          back
        </button>
      </div>
      <header>
        <h2 className="text-primary-5 text-h4 font-semibold">Order #10001</h2>
        <div className="flex items-center justify-between w-full my-2">
          <div className="text-text-20">
            <p>
              Placed on<span> Oct 9, 2023, 3:39 PM</span>
            </p>
          </div>
          <div className="flex items-center ">
            <button className="flex items-center text-white error-gradient py-2 px-4 rounded-10 mx-3">
              <RotateIcon className="mr-2" />
              Return product
            </button>
            <div className="border py-2 px-3 flex items-center justify-between w-52 cursor-pointer">
              <span>more action</span>
              <ArrowRightIcon className="rotate-90 text-text-20 " />
            </div>
          </div>
        </div>
      </header>
      {/* nav */}
      <nav>
        <div>
          <h6 className="text-h9 font-semibold my-3">status :</h6>
          <div className="border py-2 px-3 flex items-center justify-between w-52 text-white dashboard-blue-gradient cursor-pointer">
            <span>delivered</span>
            <ArrowRightIcon className="rotate-90  " />
          </div>
        </div>
        <div
          className="w-full rounded-[6px] px-4 py-4 my-4 flex items-center"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="w-10 h-1 dashboard-blue-gradient rounded-10 rotate-90"></div>
          <InfoIcon className="text-primary-5 mr-3" />
          <div>
            <h6 className="font-semibold text-h8">
              This order has been registered manually!
            </h6>
            <p className="text-text-20">
              This order was registered manually by the website administrator.
            </p>
          </div>
        </div>
      </nav>
      {/* section top */}

      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <OrderDetailTable />
        </div>
        {/* left section */}
        <div
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
          className="p-3 rounded-10 my-6 capitalize  h-3/5 "
        >
          <h1 className=" font-semibold mt-3">Order info</h1>
          <hr className="border my-3" />
          <div className="flex flex-col">
            <h3 className="text-secondary-10 font-semibold">contact info</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center my-4">
                <ProfileUser className="rounded-full w-9 h-9" />
                <h2 className="text-h8 text-primary-5 mx-2">sara azimi</h2>
              </div>
              <button className="text-primary-20 p-2 bg-primary-10 rounded-full">
                <ChatIcon />
              </button>
            </div>
            <span className="text-text-20">sara_azimi32@gmail.com</span>
          </div>
          <hr className="border my-3" />
          <h1 className="text-secondary-10 font-semibold">address</h1>
          <div className="flex justify-between items-center my-3">
            <span className="text-primary-5">sara azimi</span>
            <button className="flex items-center bg-primary-10 text-primary-5 px-3 py-2 rounded-3xl">
              <EditIcon className="mr-2" />
              change
            </button>
          </div>
        </div>
      </section>
      {/* payment info section  */}

      <section
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
        className=" rounded-10 w-3/4 py-3 px-6"
      >
        <div className="capitalize flex items-center">
          <h1 className="font-semibold">payment info</h1>
          <button className=" mx-3 rounded-3xl px-2.5 py-1 bg-tertiary-80 text-tertiary-70">
            paid
          </button>
        </div>
        <hr className="border my-3" />
        <div className="font-semibold capitalize">
          <div className="flex items-center justify-between my-3">
            <span>item 1</span>
            <span>$10.4</span>
          </div>
          <div className="flex items-center justify-between my-3">
            <span>item 2</span>
            <span>$11</span>
          </div>
          <div className="flex items-center justify-between my-3">
            <span>item 3</span>
            <span>$34.4</span>
          </div>
          <div className="flex items-center justify-between my-3">
            <span>item 4</span>
            <span>$12.4</span>
          </div>
          <div className="text-primary-5 flex items-center justify-between my-3">
            <span className="font-semibold ">total</span>
            <span>$67.4</span>
          </div>
        </div>
        <hr className="border my-3" />
        <div className="capitalize">
          <h3 className="font-semibold my-3">payment method </h3>
          <div className="my-3 ">
            <span className="font-semibold">online -</span>
            <span className="text-primary-5"> pay pal</span>
          </div>
          <div className="flex items-center my-3 ">
            <h4 className="font-semibold">payment ID :</h4>
            <span className="text-text-20 mx-2">
              686dfd6f-6156-4510-a659-06ca90662e52
            </span>
            <ArrowRightIcon className="text-primary-5 w-6" />
          </div>
        </div>
      </section>
      {/* order activity section */}
      <section
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
        className="rounded-10 w-3/4 py-3 px-6 my-6"
      >
        <h1 className="font-semibold text-h">Order activity</h1>
        <hr className="border my-3" />
        <div className="">
          <p className="my-3">Add a note (Your customer won't see this)</p>

          <div className="flex items-end">
            <textarea
              placeholder="enter a note..."
              className="border px-3 py-2 w-96 h-52 resize-none outline-none"
            />
            <div className="mx-3">
              <button className="p-2.5 bg-primary-10 rounded-full text-primary-5 mx-1">
                <TickIcon />
              </button>
              <button className="p-2.5 bg-surface-20 rounded-full text-primary-20 mx-1">
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="w-2/5 my-5  border-l-4 pl-8">
            <span className="text-primary-5 font-semibold">Oct 15, 2023</span>
            {OrderActivityData.map((item, index) => (
              <div key={index} className="my-3">
                <div className="px-4 py-3 rounded-t-10 rounded-br-10 bg-surface-20">
                  {item.message}
                </div>
                <p className="text-text-20 text-sm m-2 text-end ">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailOrders;
