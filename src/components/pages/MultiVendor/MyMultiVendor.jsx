import React from "react";
// Png
import AllCategoryImg from "../../../assets/product/category/Lips.png";
// SVGs
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-right-white.svg";

const MyMultiVendor = ({ setStage }) => {
  const data = [
    {
      image: AllCategoryImg,
      title: "shop test 1",
      registerDate: "2021/10/4",
      storeManager: "ali rahimi",
    },
    {
      image: AllCategoryImg,
      title: "shop test 2",
      registerDate: "2021/10/4",
      storeManager: "ali rahimi",
    },
    {
      image: AllCategoryImg,
      title: "shop test 3",
      registerDate: "2021/10/4",
      storeManager: "ali rahimi",
    },
    {
      image: AllCategoryImg,
      title: "shop test 4",
      registerDate: "2021/10/4",
      storeManager: "ali rahimi",
    },
    {
      image: AllCategoryImg,
      title: "shop test 5",
      registerDate: "2021/10/4",
      storeManager: "ali rahimi",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-4 gap-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-10 px-3 py-4 "
              style={{
                boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <img src={item.image} className="rounded-10 w-full" />
              <h2 className="my-3 font-semibold text-h8 capitalize ">
                {item.title}
              </h2>
              <div className="capitalize flex justify-between items-center my-2">
                <p className=" text-text-20 text-h9">register date :</p>
                <p>{item.registerDate}</p>
              </div>
              <div className="flex justify-between items-center capitalize my-2">
                <p className=" text-text-20 text-h9">store manager :</p>
                <p>{item.storeManager}</p>
              </div>

              <button
                className="flex rounded-10 w-full items-center justify-center bg-primary-5 px-3 py-2 text-white mt-4 text-sm"
                onClick={() => {
                  setStage("aboutAndStore");
                }}
              >
                <ArrowIcon className="w-5 mr-1" />
                about and store analysis
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default MyMultiVendor;
