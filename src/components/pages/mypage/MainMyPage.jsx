import React from "react";

// Component
import AddButton from "../../common/Button/AddButton";

// PNG
import ShopTemplateProfile from "../../../assets/dashboard/Frame-112413.png";
import ShopTemplate from "../../../assets/dashboard/Frame-112412.png";

// SVGs
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";
const MainMyPage = ({ setStage }) => {
  return (
    <>
      <section className="flex justify-between items-center pb-4 border-b-[1px]">
        <div>
          <h3 className="capitalize font-semibold">my pages</h3>
          <p className="text-[#AEAEAE] mt-3">
            You can view and edit your pages in this section
          </p>
        </div>
        <div className="cursor-pointer flex items-center justify-center mr-3">
          <h4 className="capitalize font-semibold mx-4">my template:</h4>
          <div
            className="flex items-center bg-gradient-to-r from-[#246CDA] to-[#609FFF] rounded-10 px-4 py-2 "
            style={{
              boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <img className="rounded-full mr-2" src={ShopTemplateProfile} />
            <p className="text-white">shop template 1</p>
          </div>
        </div>
      </section>
      <section className="my-10">
        <AddButton
          className="px-5"
          title="add page"
          changeState={() => {
            setStage("addpage");
          }}
        />
      </section>
      <section className="my-20 grid grid-cols-4 gap-4 place-items-center place-content-center">
        <section className="h-[270px] flex flex-col items-cneter justify-between">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#246CDA] to-[#609FFF]  w-[250px] h-[125px] rounded-t-xl mb-10 "></div>
            <img className="absolute top-3" src={ShopTemplate} />
          </div>
          <div className="w-[250px] px-2">
            <div className="grid grid-cols-4 items-center pb-3 border-b-[1px] ">
              <h4 className="col-span-3">home page</h4>
              <div className="flex justify-between items-center">
                <EditIcon /> <MenuIcon className="pl-2 border-l-[1px]" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#AEAEAE]">Testshop.com</p>
              <ArrowRightIcon className="text-[#246CDA]" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default MainMyPage;
