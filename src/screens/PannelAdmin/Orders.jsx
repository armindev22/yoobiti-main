import React, { useState } from "react";
// component
import MainOrders from "../../components/pages/order/MainOrders";
import DetailOrders from "../../components/pages/order/DetailOrders";
const Order = () => {
  const [stage, setStage] = useState("orders");
  return (
    <div>
      {stage === "orders" && (
        <>
          <MainOrders setStage={setStage} />
        </>
      )}
      {stage === "ordersdetails" && (
        <>
          <DetailOrders setStage={setStage} />
        </>
      )}
    </div>
  );
};

export default Order;
