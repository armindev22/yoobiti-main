import React, { useState } from "react";

// SVGs
import { ReactComponent as ArrowDown } from "../../../assets/icons/Arrow-Down.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

// components
import InputSearch from "../../common/Inputes/InputSearch";
import InvoicesTable from "./InvoicesTable";
import AddInvoices from "./AddInvoices";
const Invoices = () => {
  const [stage, setStage] = useState("invoices");
  return (
    <>
      {stage === "invoices" && (
        <>
          {/* header */}
          <header className="pb-4 border-b-[1px] flex items-center justify-between">
            <div>
              <h3 className="capitalize font-semibold">invoices</h3>
              <p className="text-text-20 mt-3">
                In this section, Keep track of invoices from your customers.
              </p>
            </div>
            <button
              onClick={() => {
                setStage("addInvoices");
              }}
              className="px-4 py-3 dashboard-gradient-button flex items-center text-white"
            >
              <PlusIcon className="mr-2" />
              create a new invoice
            </button>
          </header>
          {/* nav */}
          <nav className="my-8">
            <h3 className="font-semibold my-3">filter by</h3>
            <div className="flex justify-between">
              <div className="">
                <div className="border-1 px-3 py-2 flex justify-between items-center  w-60">
                  <span className="text-primary-5">all orders</span>
                  <ArrowDown className="cursor-pointer text-text-20" />
                </div>
              </div>
              <div className=" w-2/6">
                <InputSearch />
              </div>
            </div>
          </nav>
          {/* table */}
          <InvoicesTable />
        </>
      )}
      {stage === "addInvoices" && (
        <>
          <AddInvoices setStage={setStage} />
        </>
      )}
    </>
  );
};

export default Invoices;
