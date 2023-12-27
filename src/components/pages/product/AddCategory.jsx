import React from "react";
// SVGs
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../../../assets/icons/Tick.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as ImageIcon } from "../../../assets/icons/Image.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

const AddCategory = ({ setStage }) => {
  return (
    <>
      {/* header */}
      <header>
        <div className="flex items-center mb-4 font-semibold text-h10">
          <h3 className="text-[#AEAEAE]">products</h3>{" "}
          <ArrowRightIcon className="text-[#AEAEAE] w-6 mx-1.5" />{" "}
          <h3 className="text-[#AEAEAE]">categories</h3>
          <ArrowRightIcon className="text-[#AEAEAE] w-6 mx-1.5" />{" "}
          <h3>add categories </h3>
        </div>

        <div className="flex justify-between items-center">
          <div
            onClick={() => {
              setStage("category");
            }}
            className="flex items-center gap-x-1 cursor-pointer mb-3"
          >
            <ArrowRightIcon className="text-text-30 w-6 rotate-180" />
            <p className="text-black text-h8  font-medium">back</p>
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
      {/* main */}
      <main className="grid grid-cols-3 gap-3 my-5">
        <div className="col-span-2">
          {/* category info section */}
          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="p-3 rounded-md mb-3"
          >
            <h1 className="font-semibold text-h7 my-2">Category info</h1>

            <div className="my-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col col-span-2">
                <label>category name</label>
                <input
                  type="text"
                  className="border px-3 py-2.5 rounded-md my-3"
                  placeholder="this is test..."
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-3 text-text-30">
                  category description
                </label>
                <textarea
                  placeholder="this is a test..."
                  className="resize-none border px-2 py-3 rounded-md h-52 h"
                />
              </div>
              {/* drop image */}
              <div className="">
                <p className="text-text-30 text-h9 font-normal mb-3">
                  attachments
                </p>
                <div
                  className="p-4 rounded-md w-full h-52 flex justify-center items-center "
                  style={{ border: "dashed 1px #E9E9E9" }}
                >
                  <label
                    htmlFor="images-input"
                    className="flex flex-col justify-center items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="images-input"
                      accept="image/*"
                      multiple
                    />
                    <div className="flex jus items-center gap-x-3">
                      <ImageIcon className="text-primary-5" />
                      <p className="text-primary-5 text-h9 font-normal">
                        Drop the file here or click
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Products in category section */}
          <section
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="p-3 rounded-md mb-3"
          >
            <h1 className="text-h7 font-semibold">
              Products in category (<span className="text-primary-5">0</span>)
            </h1>
            <div className="flex justify-center items-center flex-col my-4">
              <h2 className="font-semibold my-2">
                Start adding products to your category
              </h2>
              <p className="text-text-20">
                Create a new category to display on your site.
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <button className="px-3 py-2 dashboard-blue-gradient text-white flex items-center justify-center">
                <PlusIcon className="mr-2" />
                add product
              </button>
            </div>
          </section>
        </div>
        {/* aside */}
        <aside>
          <div
            className="rounded-md p-3"
            style={{
              boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="my-3">
              <input type="checkbox" className="cursor-pointer" />
              <label className="mx-2">Active on your site</label>
            </div>
            <p className="text-text-20">
              When a category is active, you can add it to your site menu,
              galleries and other store elements from the Editor.
            </p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default AddCategory;
