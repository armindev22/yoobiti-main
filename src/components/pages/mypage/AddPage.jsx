import React from "react";
// component

// SVGs
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../../../assets/icons/Tick.svg";

const AddPage = ({ setStage }) => {
  return (
    <main>
      <div
        onClick={() => {
          setStage("mypages");
        }}
        className="flex items-center gap-x-3 cursor-pointer mb-5"
      >
        <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
          <ArrowRightIcon className="text-text-30 rotate-180" />
        </div>
        <p className="text-black text-h7 capitalize font-medium">Add Page</p>
      </div>
      <section>
        <div className="w-3/5">
          <h1 className="text-[#718DEE] text-3xl capitalize font-semibold mb-3">
            enter a name and domain for end.
          </h1>
          <p className="text-[#AEAEAE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="my-10">
          <form className="grid grid-cols-2 gap-4">
            <label className="flex flex-col">
              page name
              <input
                type="text"
                placeholder="enter a name.."
                className="border-[1px] px-3.5 py-2.5 rounded-lg mt-3"
              />
            </label>
            <label className="flex flex-col">
              page url
              <input
                type="text"
                placeholder="enter a url.."
                className="border-[1px] px-3.5 py-2.5 rounded-lg mt-3 "
              />
            </label>
            <label className="flex flex-col col-span-2">
              choose a page
              <input
                type="text"
                placeholder="about us"
                className="border-[1px] px-3.5 py-2.5 rounded-lg mt-3 "
              />
            </label>
          </form>
        </div>
        <div className=" flex items-center ">
          <button className="bg-[#246CDA] text-white flex items-center justify-center rounded-10 px-5 py-2.5 mr-5">
            <TickIcon className="mr-2" />
            create
          </button>
          <button className="bg-[#AEAEAE] text-white flex items-center justify-center rounded-10 px-5 py-2.5">
            back
          </button>
        </div>
      </section>
    </main>
  );
};

export default AddPage;
