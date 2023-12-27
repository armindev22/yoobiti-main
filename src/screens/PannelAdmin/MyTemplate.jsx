import React from "react";
// component

// PNG
import ShopTemplate from "../../assets/dashboard/Frame-112412.png";

// Svgs
import { ReactComponent as RotateIcon } from "../../assets/icons/Rotate Left.svg";
import MyTemplateCard from "../../components/pages/mytemplate/MyTemplateCard";
const MyTemplate = () => {
  return (
    <>
      <main>
        <div className="pb-4 border-b-[1px]">
          <h3 className="capitalize font-semibold">my template</h3>
          <p className="text-[#AEAEAE] mt-3">
            You can view and edit your template in this main
          </p>
        </div>

        <section className="flex items-center w-4/5 mx-auto my-12 justify-between">
          <div>
            <div className="w-4/5">
              <h1 className="font-semibold leading-[50px] text-4xl my-4">
                Your current template
              </h1>
              <p className="text-[#AEAEAE] text- my-4">
                You can change your template at the bottom
              </p>
              <button className="bg-[#246CDA] my-4 rounded-10 px-4 py-3 flex items-center text-white">
                <RotateIcon className="mr-2" />
                change template
              </button>
            </div>
          </div>
          <div className="w-2/5 relative ">
            <div className="  bg-gradient-to-r from-[#246CDA] to-[#609FFF]  w-4/5 mx-auto h-[250px] rounded-tr-md rounded-bl-md rounded-tl-[35px] rounded-br-[35px] mb-10">
              <img
                src={ShopTemplate}
                className="absolute right-10  w-[600px]"
              />
            </div>
          </div>
        </section>
        <div className="my-14">
          <h1 className="capitalize font-semibold my-5">other templates</h1>
          <MyTemplateCard />
        </div>
      </main>
    </>
  );
};

export default MyTemplate;
