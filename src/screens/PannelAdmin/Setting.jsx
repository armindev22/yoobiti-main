import React, { useState } from "react";
// component
import MainSetting from "../../components/pages/setting/MainSetting";
import TaxEdit from "../../components/pages/setting/tax/TaxEdit";

import ShippingAdd from "../../components/pages/setting/shipping/ShippingAdd";
const Setting = () => {
  const [stage, setStage] = useState("mainSetting");
  return (
    <>
      {stage === "mainSetting" && <MainSetting setStage={setStage} />}
      {stage === "taxEdit" && <TaxEdit setStage={setStage} />}
      {/* {stage === "shippingAdd" && <ShippingAdd setStage={setStage} />} */}
      {stage === "shippingAdd" && <ShippingAdd setStage={setStage} />}
    </>
  );
};

export default Setting;
