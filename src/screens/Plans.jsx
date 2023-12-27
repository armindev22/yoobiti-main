import React, { useState } from "react";

import CollapsiableFaq from "../components/common/CollapsiableFaq";
// SVGs
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../assets/icons/Tick.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as Banner } from "../assets/landing/section-banner-6.svg";

const Plans = () => {
  const plans = [
    {
      type: "Essential",
      color: "#FF4444",
      price: 40,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      volume: {
        project: 1,
        pages: 3,
        extension: false,
      },
      keyFeatures: {
        onepageCrm: true,
        livechatSupport: true,
        connectOwnDomain: false,
        removeModeeOnepage: false,
        customCode: false,
        conversionApi: false,
      },
      gdrp: {
        cookieNotification: true,
        advancedCookieConsent: false,
      },
    },
    {
      type: "Advanced",
      color: "#B7A92D",
      price: 67.89,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      volume: {
        project: 1,
        pages: 3,
        extension: false,
      },
      keyFeatures: {
        onepageCrm: true,
        livechatSupport: true,
        connectOwnDomain: false,
        removeModeeOnepage: false,
        customCode: false,
        conversionApi: false,
      },
      gdrp: {
        cookieNotification: true,
        advancedCookieConsent: false,
      },
    },
    {
      type: "Expert",
      color: "#246CDA",
      price: 96.15,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      volume: {
        project: 1,
        pages: 3,
        extension: false,
      },
      keyFeatures: {
        onepageCrm: true,
        livechatSupport: true,
        connectOwnDomain: false,
        removeModeeOnepage: false,
        customCode: false,
        conversionApi: false,
      },
      gdrp: {
        cookieNotification: true,
        advancedCookieConsent: false,
      },
    },
    {
      type: "pro",
      color: "#198953",
      price: 150,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      volume: {
        project: 1,
        pages: 3,
        extension: false,
      },
      keyFeatures: {
        onepageCrm: true,
        livechatSupport: true,
        connectOwnDomain: false,
        removeModeeOnepage: false,
        customCode: false,
        conversionApi: false,
      },
      gdrp: {
        cookieNotification: true,
        advancedCookieConsent: false,
      },
    },
  ];
  const [data] = useState([
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
  ]);

  const [isListOpen, setIsListOpen] = useState(false);

  const handleIconClick = () => {
    setIsListOpen((prev) => !prev);
  };

  return (
    <main>
      <div className="w-full flex flex-col items-center mt-[100px] px-24">
        <p className="text-h3 font-bold gradient-text text-left md:text-center px-4 ">
          Make a fundamental change in your business!
        </p>
        <p className="max-w-screen-md text-text-20 text-h7 font-normal lowercase mt-[10px] text-left md:text-center px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          className="mt-8 p-[20px] flex items-center gap-x-10"
          style={{
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.07)",
          }}
        >
          <button
            className="text-primary-10 text-h9 font-medium"
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              background:
                "var(--primary-primary-varient, linear-gradient(93deg, #246CDA -10.22%, #609FFF 110.12%)",
              boxShadow: "0px 0px 24px 0px rgba(36, 108, 218, 0.29)",
            }}
          >
            shop plans
          </button>
          <button className="text-text-20 font-medium text-h9">
            company plans
          </button>
        </div>
      </div>
      <div className="mt-[100px] px-24">
        <div className="grid  lg:grid-cols-4  gap-6  ">
          {plans.map((plan, index) => {
            return (
              <div
                key={index}
                className="col-span-1 py-[30px]"
                style={{
                  borderRadius: "20px",
                  background: "#fff",
                  boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="px-8">
                  <div className="flex items-center gap-x-2">
                    <div
                      style={{ backgroundColor: plan.color }}
                      className="w-[15px] h-[15px] rounded-full"
                    ></div>
                    <p className="text-primary-20 font-medium text-h6 capitalize">
                      {plan.type}
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-[20px] gap-x-2">
                    <p className="gradient-text text-h3 font-semibold capitalize">
                      ${plan.price}{" "}
                    </p>
                    <span className="text-text-20 font-medium text-h8 capitalize">
                      / Mo
                    </span>
                  </div>
                  <div className="mt-[20px] text-center">
                    <p className="text-text-20 font-normal text-h9 lowercase">
                      {plan.desc}
                    </p>
                  </div>
                  <div className="mt-[20px] ">
                    <button className="text-white flex items-center gap-1 rounded-10 w-full bg-primary-5 justify-center px-3 py-1.5">
                      {" "}
                      <ArrowIcon className="w-5" /> select
                    </button>
                  </div>
                  <hr className="border-2 border-stroke-20 my-6" />
                </div>
                {/* lllll */}
                <div className="lg:block hidden">
                  <div className="px-[16px] ">
                    <p className="text-primary-20 font-semibold text-h7 capitalize">
                      Volume
                    </p>
                    {Object.entries(plan.volume).map((vol, index) => {
                      return (
                        <div
                          className={`mt-[15px] pb-2 flex justify-between items-center ${
                            index < vol.length
                              ? "border-b-2 border-stroke-20"
                              : ""
                          }`}
                        >
                          <p className="text-text-20 text-h9 font-medium capitalize">
                            {vol[0]}
                          </p>
                          {vol[0] === "extension" ? (
                            <>
                              {vol[1] ? (
                                <TickIcon className="text-tertiary-90" />
                              ) : (
                                <CloseIcon className="text-error-10" />
                              )}
                            </>
                          ) : (
                            <>
                              <p className="text-primary-5">
                                {vol[1]}{" "}
                                <span className="text-primary-20">
                                  {vol[0]}
                                </span>
                              </p>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-[30px] px-[16px] ">
                    <p className="text-primary-20 font-semibold text-h7 capitalize">
                      Key features
                    </p>
                    {Object.entries(plan.keyFeatures).map((vol, index) => {
                      return (
                        <div
                          className={`mt-[15px] pb-2 flex justify-between items-center ${
                            index < 5 ? "border-b-2 border-stroke-20" : ""
                          }`}
                        >
                          <p className="text-text-20 text-h9 font-medium capitalize">
                            {vol[0]}
                          </p>
                          {vol[1] ? (
                            <TickIcon className="text-tertiary-90" />
                          ) : (
                            <CloseIcon className="text-error-10" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-[30px] px-[16px] ">
                    <p className="text-primary-20 font-semibold text-h7 capitalize">
                      GDPR & Data-protection
                    </p>
                    {Object.entries(plan.gdrp).map((vol, index) => {
                      return (
                        <div
                          className={`mt-[15px] pb-2 flex justify-between items-center ${
                            index < 5 ? "border-b-2 border-stroke-20" : ""
                          }`}
                        >
                          <p className="text-text-20 text-h9 font-medium capitalize">
                            {vol[0]}
                          </p>
                          {vol[1] ? (
                            <TickIcon className="text-tertiary-90" />
                          ) : (
                            <CloseIcon className="text-error-10" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={`flex  flex-col  lg:hidden px-3`}>
                  {isListOpen && (
                    <div className="mb-4">
                      <div className="px-[16px] ">
                        <p className="text-primary-20 font-semibold text-h7 capitalize">
                          Volume
                        </p>
                        {Object.entries(plan.volume).map((vol, index) => {
                          return (
                            <div
                              className={`mt-[15px] pb-2 flex justify-between items-center ${
                                index < vol.length
                                  ? "border-b-2 border-stroke-20"
                                  : ""
                              }`}
                            >
                              <p className="text-text-20 text-h9 font-medium capitalize">
                                {vol[0]}
                              </p>
                              {vol[0] === "extension" ? (
                                <>
                                  {vol[1] ? (
                                    <TickIcon className="text-tertiary-90" />
                                  ) : (
                                    <CloseIcon className="text-error-10" />
                                  )}
                                </>
                              ) : (
                                <>
                                  <p className="text-primary-5">
                                    {vol[1]}{" "}
                                    <span className="text-primary-20">
                                      {vol[0]}
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-[30px] px-[16px] ">
                        <p className="text-primary-20 font-semibold text-h7 capitalize">
                          Key features
                        </p>
                        {Object.entries(plan.keyFeatures).map((vol, index) => {
                          return (
                            <div
                              className={`mt-[15px] pb-2 flex justify-between items-center ${
                                index < 5 ? "border-b-2 border-stroke-20" : ""
                              }`}
                            >
                              <p className="text-text-20 text-h9 font-medium capitalize">
                                {vol[0]}
                              </p>
                              {vol[1] ? (
                                <TickIcon className="text-tertiary-90" />
                              ) : (
                                <CloseIcon className="text-error-10" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-[30px] px-[16px] ">
                        <p className="text-primary-20 font-semibold text-h7 capitalize">
                          GDPR & Data-protection
                        </p>
                        {Object.entries(plan.gdrp).map((vol, index) => {
                          return (
                            <div
                              className={`mt-[15px] pb-2 flex justify-between items-center ${
                                index < 5 ? "border-b-2 border-stroke-20" : ""
                              }`}
                            >
                              <p className="text-text-20 text-h9 font-medium capitalize">
                                {vol[0]}
                              </p>
                              {vol[1] ? (
                                <TickIcon className="text-tertiary-90" />
                              ) : (
                                <CloseIcon className="text-error-10" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center items-center">
                    <button
                      className={`text-primary-5 flex gap-1 items-center font-semibold capitalize text-h9 `}
                      onClick={handleIconClick}
                    >
                      {isListOpen ? "hide features" : "show features"}
                      <ArrowIcon
                        className={`text-text-20  w-6 ${
                          isListOpen ? "-rotate-90" : "rotate-90"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 mb-12 flex justify-center items-center w-full">
        <p className="text-primary-20 text-h4 font-medium">FAQs</p>
      </div>
      <div className="grid grid-cols-2 mt-24 md:px-24 px-6 gap-2">
        <div className="lg:col-span-1 col-span-2">
          <Banner className="w-full" />
        </div>
        <div className="lg:col-span-1 col-span-2 lg:block flex flex-col items-center mt-[50px] lg:mt-0">
          {data.map((item, index) => {
            return (
              <CollapsiableFaq
                index={index}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Plans;
