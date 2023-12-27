import React from "react";
// component
import InputSearch from "../../common/Inputes/InputSearch";
import OrdersTable from "./OrdersTable";
// SVGs
import { ReactComponent as ArrowDown } from "../../../assets/icons/Arrow-Down.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/Filter.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/Setting.svg";
import { ReactComponent as PaperAdd } from "../../../assets/icons/Paper-Add.svg";
import { ReactComponent as PaperUpload } from "../../../assets/icons/Paper-Upload.svg";
import { ReactComponent as PrinterIcon } from "../../../assets/icons/Printer.svg";

const MainOrders = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header className="pb-4 border-b-[1px]">
        <h3 className="capitalize font-semibold">Orders</h3>
        <p className="text-text-20 mt-3">
          You can view and edit your template in this section
        </p>
      </header>
      {/* nav */}
      <nav className="my-8">
        <h3 className="font-semibold my-3">view</h3>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex items-center">
            <div className="border-1 px-3 py-2 flex justify-between items-center w-56 ">
              <span className="text-primary-5">all orders</span>
              <ArrowDown className="cursor-pointer text-text-20" />
            </div>
            <button className="rounded-10 text-white flex  items-center bg-primary-5 px-3 py-2 mx-4">
              <PlusIcon className="mr-4" />
              save this view
            </button>
          </div>
          <div className="flex justify-evenly items-center">
            <InputSearch />
            <button className="flex items-center bg-primary-5 px-5 py-2 text-white rounded-10 mx-4 ">
              <FilterIcon className="mr-2" />
              filters
            </button>
            <button className="text-primary-5 bg-primary-10 p-2 rounded-10">
              <SettingIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* main */}
      <main className="mb-14">
        <section className="bg-primary-10 flex justify-between items-center w-full py-3 px-3 rounded-t-10 rounded-br-10 ">
          <h2>1 selected</h2>
          <div className="flex">
            <button className="text-primary-5 flex items-center">
              <PaperAdd />
              creat bill
            </button>
            <button className="text-primary-5 flex items-center px-3 mx-3 border-x">
              <PrinterIcon />
              print
            </button>
            <button className="text-primary-5 flex items-center">
              <PaperUpload />
              export
            </button>
          </div>
        </section>
        <section>
          <OrdersTable setStage={setStage} />
        </section>
      </main>
    </>
  );
};

export default MainOrders;
