import React from "react";
// component
import RequestTable from "./RequestTable";

const RequestMultiVendor = () => {
  return (
    <>
      <section>
        <h1 className="font-semibold text-h-7">All Request</h1>
        <RequestTable />
      </section>
    </>
  );
};

export default RequestMultiVendor;
