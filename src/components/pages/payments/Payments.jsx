import React, { useState } from "react";
// SVGs

import { ReactComponent as FilterIcon } from "../../../assets/icons/Filter.svg";
import { ReactComponent as UploadIcon } from "../../../assets/icons/Upload.svg";

// Components
import InputSearch from "../../common/Inputes/InputSearch";
import PaymentTable from "./PaymentTable";
import PaymnetDetail from "./PaymnetDetail";

const Payments = () => {
  const [stage, setStage] = useState("payment");
  return (
    <>
      {stage === "payment" && (
        <>
          {" "}
          {/* header */}
          <header className="pb-4 border-b-[1px] ">
            <div>
              <h3 className="capitalize font-semibold">payments</h3>
              <p className="text-text-20 mt-3">
                In this section, Keep track of payments from your customers.
              </p>
            </div>
          </header>
          {/* nav */}
          <nav className="my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-h8">All payments</h3>
              <div className="flex justify-evenly items-center">
                <InputSearch />
                <button className="flex items-center bg-primary-5 px-5 py-2 text-white rounded-10 mx-4 ">
                  <FilterIcon className="mr-2" />
                  filters
                </button>
                <button className="text-primary-5 bg-primary-10 p-2.5 rounded-10">
                  <UploadIcon className="" />
                </button>
              </div>
            </div>
          </nav>
          {/* table */}
          <PaymentTable setStage={setStage} />
        </>
      )}
      {stage === "paymentDetail" && (
        <>
          <PaymnetDetail setStage={setStage} />
        </>
      )}
    </>
  );
};
export default Payments;
