import React from "react";
import { ReactComponent as VectorNewOrder } from "../../assets/Shop/Vector 280.svg";
import { ReactComponent as VectorTotalProfile } from "../../assets/Shop/Vector-total-profile.svg";
import { ReactComponent as VectorTotalEarnings } from "../../assets/Shop/Vector-total-earnings.svg";
import { ReactComponent as TotalWebsiteVisit } from "../../assets/Shop/total-website-visit.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/Arrow-Up.svg";
import { ReactComponent as ArrowDownnIcon } from "../../assets/icons/Arrow-Down.svg";
import ShopOrderTable from "../../components/Tables/OrdersTable";
// import ShopPaymentsTable from "../../components/Tables/PaymentsTable";
import ShopPaymentTable from "../../components/Tables/PaymentsTable";

const Shop = () => {
  return (
    <div>
      <section className="capitalize w-full ">
        <div className="my-5">
          <h1 className="text-[#AEAEAE]">
            Welcome back, <span className="text-black">sara!</span>
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-3  ">
          <div className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px] ">
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">new orders</h4>
              <span className="text-[#B7A92D] font-semibold">455</span>
            </div>
            <div className="mx-2.5">
              <VectorNewOrder />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF] ">
              <ArrowUpIcon />
              <p>
                <span className="ml-1">0.7</span>%
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px]">
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">
                Total profit this week
              </h4>
              <span className="text-[#718DEE] font-semibold">$ 10,345</span>
            </div>
            <div className="mx-2.5">
              <VectorTotalProfile />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF] text-[#F44]">
              <ArrowDownnIcon className="w-5 " />
              <p>
                <span className="ml-1">5</span>%
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between dashboard-boxshadow py-3 px-4 border-solid border-[1px]">
            <div className="pr-2">
              <h4 className="mb-2.5 text-sm text-[#AEAEAE]">
                total earnings this week
              </h4>
              <span className="text-[#198953] font-semibold">$ 45,596.65</span>
            </div>
            <div className="mx-2.5">
              <VectorTotalEarnings />
            </div>
            <div className="flex items-center justify-center pl-2 border-l-[1px] border-[#EFEFEF]">
              <ArrowUpIcon />
              <p>
                <span className="ml-1">10</span>%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* total website visit */}
      <section className="w-full flex justify-center items-center">
        <TotalWebsiteVisit />
      </section>

      {/* activity */}
      <section className="capitalize">
        <h1 className="font-semibold text-2xl my-4">activity</h1>
        <div className="grid grid-cols-2 gap-2 items-center">
          <ShopOrderTable />
          <ShopPaymentTable />
        </div>
      </section>
    </div>
  );
};

export default Shop;

// <div className="dashboard-boxshadow py-3 px-4 border-solid border-[1px]"></div>
// <div className="dashboard-boxshadow py-3 px-4 border-solid border-[1px]"></div>
