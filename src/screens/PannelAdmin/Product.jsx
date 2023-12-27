import React, { useState } from "react";
// component
import MainProducts from "../../components/pages/product/MainProducts";
import ProductDetail from "../../components/pages/product/ProductDetail";
const Product = () => {
  const [stage, setStage] = useState("mainproducts");

  return (
    <div>
      {stage === "mainproducts" && (
        <>
          <MainProducts setStage={setStage} />
        </>
      )}
      {stage === "productdetail" && (
        <>
          <ProductDetail setStage={setStage} />
        </>
      )}
    </div>
  );
};
export default Product;
