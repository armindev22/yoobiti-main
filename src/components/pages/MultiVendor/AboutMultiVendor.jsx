import React from "react";
// SVGs
import { ReactComponent as TrashIcon } from "../../../assets/icons/Trash Bin.svg";
import { ReactComponent as ChatIcon } from "../../../assets/icons/Chat.svg";
import { ReactComponent as AttentionIcon } from "../../../assets/icons/Attention-Circle.svg";
import { ReactComponent as ProfileImg } from "../../../assets/support/Frame 11236.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as VectorNewOrder } from "../../../assets/Shop/Vector 280.svg";
import { ReactComponent as VectorTotalProfile } from "../../../assets/Shop/Vector-total-profile.svg";
import { ReactComponent as VectorTotalEarnings } from "../../../assets/Shop/Vector-total-earnings.svg";
// Pngs
import AllCategoryImg from "../../../assets/product/category/Lips.png";
// components
import ShopOrderTable from "../../../components/Tables/OrdersTable";
import ShopPaymentTable from "../../../components/Tables/PaymentsTable";

const AboutMultiVendor = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header>
        <div>
          <div className="flex items-center mb-3 font-semibold text-h10">
            <h3 className="text-text-20">multi-vender</h3>{" "}
            <ArrowIcon className="text-text-20 w-6 mx-1.5" />{" "}
            <h3>shop test 1</h3>
          </div>
        </div>
        <div
          onClick={() => {
            setStage("mainMultiVendor");
          }}
          className="flex items-center gap-x-1 cursor-pointer mb-3"
        >
          <ArrowIcon className="text-text-30 w-5 rotate-180" />
          <p className="text-black text-h9  font-medium">back</p>
        </div>
      </header>

      {/* section top */}
      <section
        className="rounded-md p-4"
        style={{
          boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* top */}
        <div className="flex items-center justify-between pb-4 ">
          <div className="flex items-center ">
            <img src={AllCategoryImg} className="rounded-full w-10 h-10" />
            <div className="mx-2">
              <h4 className="font-semibold text-h8">shop test 1</h4>
              <p className="text-text-20 flex items-center cursor-pointer">
                shoptest-1.sarashop.ir
                <ArrowIcon className="text-primary-5 w-4 ml-1" />
              </p>
            </div>
          </div>
          <div className="flex items-center   ">
            <button className="text-white flex items-center justify-center error-gradient px-3 py-2 rounded-lg">
              <TrashIcon className="mr-1 w-5" />
              remove shop
            </button>
            <button className="text-white flex items-center justify-center bg-tertiary-40 px-3 py-2 rounded-lg mx-3 ">
              <AttentionIcon className="mr-1 w-5" />
              block shop
            </button>
            <button className="text-white flex items-center justify-center  bg-primary-5 px-3 py-2 rounded-lg">
              <ChatIcon className="mr-1 w-5" />
              send message
            </button>
          </div>
        </div>
        <hr className="border" />
        {/* middle */}
        <div className="py-4 grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-text-20 mb-3">manager name : </h3>
            <div className="flex items-center">
              <ProfileImg className="mr-1 w-7 h-7 rounded-full" />
              <p className="text-primary-5 capitalize font-semibold">
                ali azimi
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-text-20 mb-3">manager email : </h3>
            <p className="text-primary-5 font-semibold">
              aliazimi234@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-text-20 mb-3">manager phone number : </h3>
            <p className="font-semibold">+1 2345665312</p>
          </div>
        </div>
        <hr className="border" />

        {/* bottom */}
        <div className="pt-4 grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-text-20 mb-3">address : </h3>
            <p className="font-semibold">
              Texas, Temple, 3820 Lucius McCelvey Dr
            </p>
          </div>{" "}
          <div>
            <h3 className="text-text-20 mb-3">area of expertise : </h3>
            <p className="font-semibold">Clothes sale</p>
          </div>{" "}
          <div>
            <h3 className="text-text-20 mb-3">date of register : </h3>
            <p className="font-semibold">2021/10/4</p>
          </div>
        </div>
      </section>

      {/* chart section */}
      <section className="my-4">
        <div className="w-full grid grid-cols-3 gap-4 capitalize ">
          <div
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px] "
          >
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">new orders</h4>
              <span className="text-[#B7A92D] font-semibold">4,734</span>
            </div>
            <div className="mx-2.5">
              <VectorNewOrder />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF] text-tertiary-70">
              <ArrowIcon className=" -rotate-90 w-5 " />
              <p>
                <span className="ml-1">0.7</span>%
              </p>
            </div>
          </div>
          <div
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px]"
          >
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">
                Total profit this week
              </h4>
              <span className="text-primary-5 font-semibold">$ 10,345</span>
            </div>
            <div className="mx-2.5">
              <VectorTotalProfile />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF] text-[#F44]">
              <ArrowIcon className="w-5 rotate-90" />
              <p>
                <span className="ml-1">5</span>%
              </p>
            </div>
          </div>
          <div
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px]"
          >
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">
                total earnings this week
              </h4>
              <span className="text-[#718DEE] font-semibold">$ 45,596.65</span>
            </div>
            <div className="mx-2.5">
              <VectorTotalEarnings />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF] text-tertiary-70">
              <ArrowIcon className="-rotate-90 w-5" />
              <p>
                <span className="ml-1">10</span>%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tables */}
      <section className="capitalize">
        <h1 className="font-semibold text-2xl my-4">activity</h1>
        <div className="grid grid-cols-2 gap-2 items-center">
          <ShopOrderTable />
          <ShopPaymentTable />
        </div>
      </section>
    </>
  );
};

export default AboutMultiVendor;
