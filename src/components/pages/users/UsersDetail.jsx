import React, { useState } from "react";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as ChatIcon } from "../../../assets/icons/Chat.svg";
import { ReactComponent as AttentionIcon } from "../../../assets/icons/Attention-Circle.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/Trash Bin.svg";
// PNGs
import ProfileSara from "../../../assets/support/support-2.svg";
// components
import UsersDetailTable from "./UsersDetailTable";

const UsersDetail = ({ setStage }) => {
  const [myPage, setMyPage] = useState("invoices");
  return (
    <>
      {/* header */}
      <header>
        <div>
          <div className="flex items-center mb-3 font-semibold text-h10">
            <h3 className="text-text-20">users</h3>{" "}
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />{" "}
            <h3>sara azimi</h3>
          </div>
        </div>
        <div
          onClick={() => {
            setStage("users");
          }}
          className="flex items-center gap-x-1 cursor-pointer mb-3"
        >
          <ArrowIcon className="text-primary-20 w-5 rotate-180" />
          <p className="text-primary-20 text-h9  font-semibold">back</p>
        </div>
      </header>
      {/* section top */}

      <section
        className="px-4 py-3 rounded-md"
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* top */}
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-2 items-center">
            <div className="rounded-full relative  w-16  h-16 ">
              <img src={ProfileSara} className="w-full" />
              <div
                style={{
                  boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                }}
                className="absolute rounded-full bg-white cursor-pointer w-7 h-7 right-0 bottom-0 flex justify-center items-center"
              >
                <EditIcon className="  text-primary-20 w-4" />
              </div>
            </div>
            <h4 className="font-semibold text-h8 text-primary-20 capitalize">
              sara azimi
            </h4>
          </div>
          <div className="flex  items-center gap-2">
            <button className="px-4 py-2 rounded-lg error-gradient text-white flex items-center gap-2">
              <TrashIcon className="w-5" />
              remove user
            </button>
            <button className="px-4 py-2 rounded-lg bg-tertiary-40 text-tertiary-50 flex items-center gap-2">
              <AttentionIcon className="w-5" />
              block user
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary-5 text-white flex items-center gap-2">
              <ChatIcon className="w-5" />
              send message
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary-5 text-white flex items-center gap-2">
              <EditIcon className="w-5" />
              edit
            </button>
          </div>
        </div>

        <hr className="border" />

        {/* middle */}
        <div className="grid grid-cols-3 gap-3 my-4 ">
          <div className="flex flex-col gap-2">
            <h4 className="text-text-20">name : </h4>
            <p className="text-primary-20 font-semibold capitalize">
              sara azimi
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-text-20">email : </h4>
            <p className="text-primary-5 font-semibold">
              saraazimi234@gmail.com
            </p>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <h4 className="text-text-20">phone number : </h4>
            <p className="text-primary-20 font-semibold">+1 2345665312</p>
          </div>
        </div>

        <hr className="border" />

        {/* bottom */}

        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-text-20">address : </h4>
            <p className="text-primary-20 font-semibold capitalize">
              Texas, Temple, 3820 Lucius McCelvey Dr
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-text-20">status :</h4>
            <p className="text-primary-20 font-semibold">member</p>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <h4 className="text-text-20">date of register : </h4>
            <p className="text-primary-20 font-semibold">2021/10/4</p>
          </div>
        </div>
      </section>

      {/* navbar table */}
      <div className=" border-b pb-3 my-5 ">
        <ul className="flex items-center px-3  gap-8 capitalize ">
          <li
            onClick={() => setMyPage("note")}
            className={`cursor-pointer font-semibold text-text-20 text-h9  ${
              myPage === "MyVender" ? "text-primary-5" : ""
            }`}
          >
            note
          </li>
          <li
            onClick={() => setMyPage("invoices")}
            className="cursor-pointer font-semibold text-text-20 text-h9  "
          >
            Invoices
          </li>
          <li
            onClick={() => setMyPage("orders")}
            className="cursor-pointer font-semibold text-text-20 text-h9  "
          >
            Orders
          </li>
        </ul>
      </div>

      {/* table */}
      {myPage === "invoices" && <UsersDetailTable />}
    </>
  );
};

export default UsersDetail;
