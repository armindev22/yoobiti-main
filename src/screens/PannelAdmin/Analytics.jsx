import React from "react";
// component
import UsersChart from "../../components/pages/analytics/UsersChart";
import ProductChart from "../../components/pages/analytics/ProductChart";
import NewUsersChart from "../../components/pages/analytics/NewUsersChart";
import SalesChart from "../../components/pages/analytics/SalesChart";
import FinancialChart from "../../components/pages/analytics/FinancialChart";
import TotalVisitChart from "../../components/pages/analytics/TotalVisitChart";
import BestSellingTable from "../../components/pages/analytics/BestSellinganTable";
import TheLowestSellingTable from "../../components/pages/analytics/TheLowestSellingTable";
// SVGs
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-right-white.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/Upload.svg";
import { ReactComponent as VectorNewOrder } from "../../assets/Shop/Vector 280.svg";
import { ReactComponent as VectorTotalProfile } from "../../assets/Shop/Vector-total-profile.svg";
import { ReactComponent as VectorTotalEarnings } from "../../assets/Shop/Vector-total-earnings.svg";
// import { ReactComponent as UploadIcon } from "../../assets/icons/Upload.svg";
const Analytics = () => {
  return (
    <>
      {/* header */}
      <header className="flex justify-between mb-4">
        <div>
          <h1 className="capitalize font-semibold text-primary-20 text-h8 ">
            analytics
          </h1>
          <p className="text-text-20 my-2">
            You can view product analytics in this section
          </p>
        </div>

        <div className="py-2.5 px-3.5 flex items-center justify-between border rounded-md w-1/4 cursor-pointer">
          <p className="text-primary-5">Last 30 Days (sep 1 - today)</p>
          <ArrowIcon className="text-text-40 w-5 rotate-90 " />
        </div>
      </header>
      {/* nav */}
      <nav className="mb-4">
        <div className="w-full grid grid-cols-3 gap-4 capitalize ">
          <div
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px] "
          >
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">All orders</h4>
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
                Orders delivered
              </h4>
              <span className="text-tertiary-70 font-semibold">4,500</span>
            </div>
            <div className="mx-2.5">
              <VectorTotalEarnings />
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
                Orders being processed
              </h4>
              <span className="text-[#718DEE] font-semibold">234</span>
            </div>
            <div className="mx-2.5">
              <VectorTotalProfile />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF] text-tertiary-70">
              <ArrowIcon className="-rotate-90 w-5" />
              <p>
                <span className="ml-1">10</span>%
              </p>
            </div>
          </div>
        </div>
      </nav>
      <section className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <ProductChart />
          <SalesChart />
          <NewUsersChart />
          <div className="col-span-2">
            <FinancialChart />
          </div>
          <UsersChart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="flex justify-between items-center py-3 px-6">
              <h1 className="font-semibold capitalize text-h8">
                Best-selling products
              </h1>
              <button className="capitalize text-white px-3.5 py-2 dashboard-blue-gradient flex items-center">
                <UploadIcon className="mr-2" />
                export
                <ArrowIcon className="rotate-90 w-6 ml-2" />
              </button>
            </div>
            <BestSellingTable />
          </div>
          <div
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="flex justify-between items-center py-3 px-6">
              <h1 className="font-semibold capitalize text-h8">
                The lowest selling products
              </h1>
              <button className="capitalize text-white px-3.5 py-2 dashboard-blue-gradient flex items-center">
                <UploadIcon className="mr-2" />
                export
                <ArrowIcon className="rotate-90 w-6 ml-2" />
              </button>
            </div>
            <TheLowestSellingTable />
          </div>
        </div>
        <div>
          <TotalVisitChart />
        </div>
      </section>
    </>
  );
};

export default Analytics;
