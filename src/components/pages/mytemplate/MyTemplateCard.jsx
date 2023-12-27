import React from "react";
// import { ReactComponent as Project } from 'react';
import ProjectIcon from "../../../assets/dashboard/project-1.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";

const MyTemplateCard = () => {
  const data = [
    {
      name: "template 1",
      image: ProjectIcon,
      key: "template1",
    },
    {
      name: "template 2",
      image: ProjectIcon,
      key: "template2",
    },
    {
      name: "template 3",
      image: ProjectIcon,
      key: "template3",
    },
    {
      name: "template 4",
      image: ProjectIcon,
      key: "template4",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 3xl:grid-cols-[repeat(auto-fit,350px)] justify-center gap-4 md:gap-6">
        {data.map((item, index) => {
          return (
            <div
              className="col-span-1 flex flex-col  md:rounded-xl cursor-pointer items-stretch"
              key={index}
              style={{
                boxShadow: " 0px 0px 50px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="w-full flex justify-center relative dashboard-blue-gradient">
                <img
                  src={item.image}
                  alt="circle_banner"
                  width={284}
                  className="h-[180px] w-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col h-full md:pb-4 px-4 py-2">
                <div className="mt-[15px] mb-4 capitalize">
                  <p className="text-primary-20 text-sm font-semibold">
                    {item.name}
                  </p>
                </div>

                <div className="dashboard-blue-gradient flex  justify-evenly items-center mb-4    ">
                  <p className="text-center py-2 text-sm font-medium text-white  rounded-full whitespace-pre-wrap ">
                    choose this template
                  </p>
                  <ArrowRightIcon className="text-white " />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyTemplateCard;
