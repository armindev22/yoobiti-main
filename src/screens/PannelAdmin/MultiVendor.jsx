import React, { useState } from "react";
// component
import MainMultiVendor from "../../components/pages/MultiVendor/MainMultiVendor";
import AboutMultiVendor from "../../components/pages/MultiVendor/AboutMultiVendor";

const MultiVendor = () => {
  const [stage, setStage] = useState("mainMultiVendor");
  return (
    <div>
      {stage === "mainMultiVendor" && (
        <>
          <MainMultiVendor setStage={setStage} />
        </>
      )}
      {stage === "aboutAndStore" && (
        <>
          <AboutMultiVendor setStage={setStage} />
        </>
      )}
    </div>
  );
};

export default MultiVendor;
