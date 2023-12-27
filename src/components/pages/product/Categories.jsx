import React, { useState } from "react";
// SVGs
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";

// Png
import AllCategoryImg from "../../../assets/product/category/allCategory.png";
import LipsImg from "../../../assets/product/category/Lips.png";
// component
import AddCategory from "./AddCategory";
const Categories = () => {
  const [stage, setStage] = useState("category");
  const data = [
    {
      status: "active",
      Image: AllCategoryImg,
      category: "all product",
      numberOfProducrs: "12",
    },
    {
      status: "active",
      Image: LipsImg,
      category: "lips",
      numberOfProducrs: "132",
    },
  ];
  return (
    <div>
      {stage === "category" && (
        <>
          {/* header */}
          <header className="pb-4 border-b-[1px] flex items-center justify-between">
            <div>
              <h3 className="capitalize font-semibold text-h8">categories</h3>
              <p className="text-text-20 mt-3">
                You can view and edit your categories in this section
              </p>
            </div>
            <button
              className="px-4 py-3 dashboard-gradient-button flex items-center text-white"
              onClick={() => setStage("addCategory")}
            >
              <PlusIcon className="mr-2" />
              add new category
            </button>
          </header>
          {/* section main */}
          <section className="my-4">
            <h1 className="capitalize font-semibold text-h8">all categories</h1>
            {/* div card */}
            <div className="grid grid-cols-4 gap-5 my-3">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" capitalize p-3  rounded-10  "
                    style={{
                      boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <button className="px-3 py-1.5 rounded-3xl bg-tertiary-80 text-tertiary-70 cursor-none capitalize">
                        {item.status}
                      </button>
                      <button>
                        <MenuIcon />
                      </button>
                    </div>
                    <div className="my-3">
                      <img src={item.Image} className="w-full rounded-10" />
                    </div>
                    <div className="flex justify-between items-center capitalize">
                      <p className="text-h9 font-semibold">{item.category}</p>
                      <div className="capitalize text-text-20">
                        <span className="mr-1">{item.numberOfProducrs}</span>
                        <span>product</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
      {stage === "addCategory" && (
        <>
          <AddCategory setStage={setStage} />
        </>
      )}
    </div>
  );
};

export default Categories;
