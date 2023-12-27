import React, { useState } from "react";
// components
import ProductDetailTable from "../../Tables/ProductDetailTable";

// SVGs
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../../../assets/icons/Tick.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as UeuroIcon } from "../../../assets/icons/u_euro.svg";
import { ReactComponent as PercentIcon } from "../../../assets/icons/Percent.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/Trash Bin.svg";
import { ReactComponent as KgIcon } from "../../../assets/icons/KG.svg";

// Png
import ProductImage2 from "../../../assets/product/producttwo.png";
import ProductImage3 from "../../../assets/product/productThree.png";
import ProductImage4 from "../../../assets/product/product2.png";

const ProductDetail = ({ setStage }) => {
  const Categories = {
    filter: [
      {
        name: "categories 1",
      },
      {
        name: "categories 2",
      },
      {
        name: "categories 3",
      },
      {
        name: "categories 4",
      },
    ],
    Images: [
      {
        img: ProductImage2,
      },
      {
        img: ProductImage2,
      },
      {
        img: ProductImage3,
      },
      {
        img: ProductImage4,
      },

      {
        img: ProductImage3,
      },
    ],
  };

  const ProductOption = [
    {
      colorName: "green",
      color: "tertiary-70",
    },
    {
      colorName: "yellow",
      color: "tertiary-40",
    },
    {
      colorName: "blue",
      color: "primary-5",
    },
    {
      colorName: "red",
      color: "error-10",
    },
  ];

  return (
    <>
      {/* header */}
      <header>
        <div
          onClick={() => {
            setStage("mainproducts");
          }}
          className="flex items-center gap-x-1 cursor-pointer mb-3"
        >
          <ArrowRightIcon className="text-text-30 w-6 rotate-180" />
          <p className="text-black text-h8  font-medium">back</p>
        </div>
        <div>
          <div className="flex items-center mb-4 font-semibold text-h10">
            <h3 className="text-[#AEAEAE]">products</h3>{" "}
            <ArrowRightIcon className="text-[#AEAEAE] w-6 mx-1.5" />{" "}
            <h3>product test 1</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border-b pb-3 w-2/6 capitalize font-semibold">
            <h1 className="text-primary-5 text-h5">product test 1</h1>
          </div>
          <div className="flex items-center">
            <button className=" px-3 py-2.5 border rounded-10 ">
              <MenuIcon />
            </button>
            <button className="bg-text-10 text-white px-4 py-2.5 mx-4 rounded-10">
              cancel
            </button>
            <button className="dashboard-blue-gradient text-white px-5 py-2.5 flex items-center">
              <TickIcon className="mr-1.5" />
              save
            </button>
          </div>
        </div>
      </header>
      {/* section top */}
      <main className="mt-4 grid grid-cols-3 gap-3">
        {/* image and product info */}
        <div className="col-span-2 ">
          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="p-3 rounded-md mb-3"
          >
            <h1 className="font-semibold">images and videos</h1>
            <div className="grid grid-cols-5 gap-3 mt-3 grid-rows-2 ">
              <div className="rounded-10 col-span-2  row-span-2 cursor-pointer">
                <img src={ProductImage4} className="w-full h-full rounded-10" />
              </div>
              {Categories.Images.map((item, index) => {
                return (
                  <div key={index} className="rounded-10 cursor-pointer">
                    <img src={item.img} className="w-full h-full rounded-10" />
                  </div>
                );
              })}
              <div className="flex justify-center items-center text-primary-5 bg-primary-10 rounded-10 cursor-pointer">
                <PlusIcon className="w-10" />
              </div>
            </div>
          </section>
          {/* product info */}
          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="p-3 rounded-md mt-3"
          >
            <h1 className="font-semibold text-h7 mb-4">Product info</h1>
            <form className="grid grid-cols-2 gap-4">
              <label className="flex flex-col capitalize">
                name
                <input
                  type="text"
                  placeholder="enter a neme for product..."
                  className="border-[1px] px-3.5 py-2.5 rounded-lg mt-2.5"
                />
              </label>
              <label className="flex flex-col capitalize">
                Ribbon
                <input
                  type="text"
                  placeholder="enter a Ribbon for product..."
                  className="border-[1px] px-3.5 py-2.5 rounded-lg mt-2.5 "
                />
              </label>
              <label className="flex flex-col col-span-2 capitalize">
                product code
                <input
                  type="text"
                  placeholder="for example HONOR X7a Dual SIM 128GB And 4GB RAM Mobile Phone..."
                  className="border-[1px] px-3.5 py-2.5 rounded-lg mt-2.5 "
                />
              </label>
            </form>
          </section>
          {/* pricing section */}
          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="p-3 rounded-md mt-3 "
          >
            <h1 className="font-semibold text-h7 capitalize">pricing</h1>
            {/* top */}
            <div className="my-3 border-b pb-3">
              <label>price</label>
              <div className="border rounded-md p-2 flex items-center my-2.5">
                <div className="border-r pr-2 mr-2">
                  <UeuroIcon className=" text-text-20" />
                </div>
                <input
                  type="text"
                  placeholder="67.76"
                  className="placeholder-secondary-30"
                />
              </div>
            </div>
            {/* middle */}
            <div className="my-3 border-b pb-3 px-2">
              <div>
                <input type="checkbox" className="cursor-pointer  " />
                <label className="capitalize ml-2 text-h8"> on sale</label>
              </div>
              <div className=" my-3 flex items-end ">
                <div className="flex flex-col w-2/6">
                  <label>Sale price</label>
                  <input
                    type="text"
                    placeholder="34.56"
                    className=" border p-2 rounded-md mt-2 placeholder-secondary-30"
                  />
                </div>
                <div className="flex items-center w-1/6 justify-center">
                  <button className="rounded-full bg-primary-5 text-white p-2 ">
                    <UeuroIcon />
                  </button>
                  <button className="bg-surface-20 text-primary-20 p-2.5 rounded-full mx-2">
                    <PercentIcon />
                  </button>
                </div>
                <div className="w-2/3">
                  <label>Sale price</label>
                  <div className="border rounded-md p-2 flex items-center mt-2">
                    <div className="border-r pr-2 mr-2">
                      <UeuroIcon className=" text-text-20" />
                    </div>
                    <input
                      type="text"
                      placeholder="67.76"
                      className="placeholder-secondary-30"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="grid grid-cols-3 gap-3   ">
              <div className="">
                <label>Cost of goods</label>
                <div className="border rounded-md p-2 flex items-center mt-2">
                  <div className="border-r pr-2 mr-2">
                    <UeuroIcon className=" text-text-20" />
                  </div>
                  <input
                    type="text"
                    placeholder="234"
                    className="placeholder-secondary-30"
                  />
                </div>
              </div>
              <div className="">
                <label>Profit</label>
                <div className="bg-stroke-30 border rounded-md p-2 flex items-center mt-2">
                  <div className="border-r border-text-40 pr-2 mr-2">
                    <UeuroIcon className=" text-text-20" />
                  </div>
                  <input
                    type="text"
                    placeholder="23"
                    className="bg-stroke-30 placeholder-secondary-30"
                  />
                </div>
              </div>
              <div className="">
                <label>Margin</label>
                <div className="bg-stroke-30 border rounded-md p-2 flex items-center mt-2">
                  <div className="border-r pr-2 mr-2 border-text-40">
                    <PercentIcon className=" text-text-20" />
                  </div>
                  <input
                    type="text"
                    placeholder="23.4"
                    className="bg-stroke-30  placeholder-secondary-30"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Inventory and shipping */}
          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="mt-3 rounded-md p-3"
          >
            <h1 className="text-h7 mt-2 mb-3 font-semibold">
              Inventory and shipping
            </h1>
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <label>Track inventory</label>
            <div className="grid grid-cols-3 gap-3 my-3">
              <div className="">
                <label>Inventory</label>
                <div className=" border rounded-md p-2 flex items-center mt-2">
                  <input
                    type="text"
                    placeholder="12"
                    className="  placeholder-secondary-30"
                  />
                </div>
              </div>{" "}
              <div className="">
                <label>SKU</label>
                <div className=" border rounded-md p-2 flex items-center mt-2">
                  <input
                    type="text"
                    placeholder="34657242364575475648"
                    className="  placeholder-secondary-30"
                  />
                </div>
              </div>{" "}
              <div className="">
                <label>Shipping weight</label>
                <div className=" border rounded-md p-2 flex items-center mt-2 ">
                  <input
                    type="text"
                    placeholder="2.4"
                    className="  placeholder-secondary-30"
                  />
                  <div className="  mr-2 border-text-40">
                    <KgIcon className=" text-text-20" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product options sectoin */}

          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="mt-3 rounded-md p-3"
          >
            {/* top */}
            <div>
              <h1 className="text-primary-20 text-h7 font-semibold my-2">
                Product options
              </h1>
              <p className="text-text-20 my-3">
                Manage the options this product comes in.
              </p>
              <div className="px-2 py-3 my-3 border rounded-lg flex justify-between items-center">
                <div className="flex items-center ">
                  <h1 className="font-semibold capitalize text-h8 ml-1.5 mr-4">
                    color
                  </h1>
                  <div className="flex items-center">
                    {ProductOption.map((item, index) => {
                      return (
                        <div className="flex items-center mx-1.5" key={index}>
                          <div
                            className={`rounded-full w-3 h-3 bg-${item.color} mr-1`}
                          ></div>
                          <p>{item.colorName}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <button className="p-2 bg-primary-10 text-primary-5 rounded-10 mx-1.5">
                    <EditIcon />
                  </button>
                  <button className="p-2 bg-error-20 text-error-10 rounded-10 mx-1.5">
                    <TrashIcon />
                  </button>
                </div>
              </div>

              <div className="flex items-center my-4 border-b pb-4 cursor-pointer ">
                <PlusIcon className="mr-2.5 text-text-20 " />
                <p className="text-primary-5 font-semibold">
                  Add an add-on for the product
                </p>
              </div>

              <div className="mb-4">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <label>
                  Manage pricing and inventory for each product variant
                </label>
              </div>

              <div className="flex justify-between  items-center">
                <h1 className="font-semibold text-h7">Manage variants</h1>
                <button className="dashboard-gradient-button px-4 py-2 flex items-center text-white">
                  <EditIcon className="mr-1.5" />
                  edit
                </button>
              </div>
            </div>
            {/* table */}
            <div className="mt-3">
              <ProductDetailTable />
            </div>

            {/* Technical Specifications section */}
            <div>
              <h1 className="font-semibold text-h7 mb-2">
                Technical Specifications
              </h1>
              <div className="px-2 py-3 my-4 border rounded-lg flex justify-start items-center">
                <h1 className="font-semibold capitalize text-h8 ml-1.5 mr-4  w-1/12">
                  height
                </h1>
                <div className="flex justify-between w-full items-center">
                  <p className="text-base text-text-20 ">23 cm</p>
                  <div className="flex">
                    <button className="p-2 bg-primary-10 text-primary-5 rounded-10 mx-1.5">
                      <EditIcon />
                    </button>
                    <button className="p-2 bg-error-20 text-error-10 rounded-10 mx-1.5">
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-2 py-3 my-4 border rounded-lg flex justify-start items-center">
                <h1 className="font-semibold capitalize text-h8 ml-1.5 mr-4  w-1/12">
                  size
                </h1>
                <div className="flex justify-between w-full items-center">
                  <p className="text-base text-text-20">medium</p>
                  <div className="flex">
                    <button className="p-2 bg-primary-10 text-primary-5 rounded-10 mx-1.5">
                      <EditIcon />
                    </button>
                    <button className="p-2 bg-error-20 text-error-10 rounded-10 mx-1.5">
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-4   cursor-pointer ">
                <PlusIcon className="mr-2.5 text-text-20 " />
                <p className="text-primary-5 font-semibold">Add a option</p>
              </div>
            </div>
          </section>
        </div>
        {/* aside */}
        <div>
          <div
            className="rounded-md p-3"
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h4 className="text-text-20">
              Do you want this product to be displayed in your store?
            </h4>
            <div className="my-3">
              <input type="checkbox" className="cursor-pointer" />
              <label className="mx-2">Show in online store</label>
            </div>
          </div>
          <div
            className="rounded-md p-3 my-3 "
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h1 className="font-semibold capitalize mb-4">Categories</h1>
            {Categories.filter.map((item, index) => {
              return (
                <div key={index} className="my-3">
                  <input type="checkbox" className="cursor-pointer" />
                  <label className="mx-2">{item.name}</label>
                </div>
              );
            })}
            <p className="text-text-20 my-4">Or create a new category</p>
            <button className="dashboard-gradient-button text-white flex items-center px-3 py-2">
              <TickIcon className="mr-1.5" />
              create category
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
