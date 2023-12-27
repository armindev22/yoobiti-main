import React, { useState } from "react";
// SVGs
import { ReactComponent as TickIcon } from "../../../assets/icons/Tick.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/slider.svg";
import { ReactComponent as PaperIcon } from "../../../assets/icons/Note.svg";
import { ReactComponent as DeliveryIcon } from "../../../assets/icons/delivery 1.svg";
import { ReactComponent as PaymentIcon } from "../../../assets/icons/payment.svg";
import { ReactComponent as UsersIcon } from "../../../assets/icons/users.svg";
import { ReactComponent as InfoIcon } from "../../../assets/icons/Info-Circle.svg";
import { ReactComponent as YobitiIcon } from "../../../assets/logo/yobiti-logo-2.svg";
import { ReactComponent as UploadIcon } from "../../../assets/icons/Upload.svg";
// PNGs
import FavicationBrowserTab from "../../../assets/support/Rectangle 447.png";
// components
import Tax from "./tax/Tax";
import Shipping from "./shipping/Shipping";
import Payment from "./payment/payment";
import BusinessInfo from "./business info/BusinnesImfo";

const MainSetting = ({ setStage }) => {
  const data = [
    {
      title: "Site Setting",
      asideContetnt: "siteSetting",
      icon: <SettingIcon />,
    },

    {
      title: "tax",
      asideContetnt: "tax",
      icon: <PaperIcon />,
    },

    {
      title: "Shipping",
      asideContetnt: "shipping",
      icon: <DeliveryIcon />,
    },
    {
      title: "payment",
      asideContetnt: "payment",
      icon: <PaymentIcon />,
    },
    {
      title: "Business Info",
      asideContetnt: "businessInfo",
      icon: <UsersIcon />,
    },
  ];
  const [aside, setAside] = useState("siteSetting");
  return (
    <>
      <div className="">
        {/* header */}
        <header className="pb-4 border-b-[1px] flex items-center justify-between">
          <div>
            <h3 className="capitalize font-semibold">setting</h3>
            <p className="text-text-20 mt-3">
              In this section, you can change your website settings.
            </p>
          </div>
          {aside === "siteSetting" || aside === "businessInfo" ? (
            <div className="flex items-center gap-4">
              <button className="text-primary-20 bg-surface-20 rounded-md px-3 py-2">
                cancel
              </button>
              <button className="bg-primary-5 text-white flex items-center gap-1 rounded-md px-3 py-2">
                <TickIcon />
                save
              </button>
            </div>
          ) : null}
        </header>

        {/* main section */}
        <section className="grid grid-cols-5 gap-4 my-5">
          {/* sidebar */}
          <div className="flex flex-col gap-3  ">
            {data.map((item, index) => (
              <div
                className={`text-text-20 capitalize flex items-center gap-1 cursor-pointer rounded-10 px-4 py-3 ${
                  aside === item.asideContetnt
                    ? "dashboard-blue-gradient text-white"
                    : null
                }`}
                style={{
                  boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                }}
                onClick={() => {
                  setAside(item.asideContetnt);
                }}
                key={index}
              >
                {item.icon}
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>

          {/* main content */}
          <div className="col-span-4 h-screen overflow-y-scroll">
            {aside === "siteSetting" && (
              <div className="flex flex-col gap-4 border-l px-4">
                {/* top */}
                <div
                  style={{
                    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                  }}
                  className="p-4 flex  rounded-lg justify-center "
                >
                  <div className="flex items-center gap-2 border-r pr-7 mr-7">
                    <input type="radio" className="cursor-pointer" />
                    <label>
                      Site is
                      <span className="text-tertiary-70"> published</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="radio" className="cursor-pointer" />
                    <label>
                      Site is
                      <span className="text-error-10"> unpublished</span>
                    </label>
                  </div>
                </div>
                {/* site name */}
                <div
                  style={{
                    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                  }}
                  className="p-4   rounded-lg "
                >
                  <h2 className="text-primary-20 font-semibold text-h8 mb-2">
                    Site name
                  </h2>
                  <p className="text-text-20">
                    Edit this name to easily find it on your Dashboard and more.
                  </p>

                  <hr className="my-4 border" />
                  <h3 className="text-primary-20 font-semibold mb-2 capitalize">
                    This is your site name
                  </h3>
                  <input
                    type="text "
                    placeholder="site test"
                    className="border p-3 w-full"
                  />
                </div>
                {/* site addrress */}
                <div
                  style={{
                    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                  }}
                  className="p-4   rounded-lg "
                >
                  <h2 className="text-primary-20 font-semibold capitalize mb-2">
                    Site address (URL)
                  </h2>
                  <p className="text-text-20">
                    Get a branded domain so visitors can easily find your site
                    or edit your free yoobiti domain.
                  </p>
                  <hr className="border my-4" />
                  <div className="flex flex-col gap-3">
                    {" "}
                    <div className="flex gap-2 items-center">
                      <input type="radio" />
                      <label className="font-semibold text-primary-20 capitalize">
                        Yoobiti Domain
                      </label>
                    </div>{" "}
                    <div className="flex gap-2 items-center">
                      <input type="radio" />
                      <label className="font-semibold text-primary-20 capitalize">
                        or desired domain
                      </label>
                    </div>
                  </div>

                  <hr className="border my-4" />

                  {/* dns */}
                  <div className="">
                    <h2 className="text-error-10 mb-3 capitalize">
                      1- Set the following dns for your domain
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2">DNS 1</h3>
                        <div className="flex gap-3 items-center">
                          <input
                            type="text"
                            placeholder="sara.com"
                            className="p-3 bg-surface-10 w-full rounded-md "
                          />
                          <button className="bg-tertiary-80 text-tertiary-70 px-4 py-3 rounded-md">
                            copy
                          </button>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">DNS 2</h3>
                        <div className="flex gap-3 items-center">
                          <input
                            type="text"
                            placeholder="sara.com"
                            className="p-3 bg-surface-10 w-full rounded-md "
                          />
                          <button className="bg-tertiary-80 text-tertiary-70 px-4 py-3 rounded-md">
                            copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border my-4" />

                  {/* your domain */}
                  <div>
                    <h2 className="text-error-10 mb-3 capitalize">
                      2- Then enter your domain name
                    </h2>
                    <div>
                      <h3 className="font-semibold capitalize text-primary-20 mb-2">
                        your domain
                      </h3>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="sara.com"
                          className="p-3 border rounded-md w-full "
                        />
                        <button className="px-4 py-2 rounded-md bg-text-20 text-white flex items-center">
                          <TickIcon />
                          change
                        </button>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-x-2 rounded-md p-3.5 mt-4"
                      style={{
                        boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div className="w-1 h-[50px] bg-tertiary-40 rounded-lg"></div>
                      <InfoIcon className="text-tertiary-40" />
                      <div className="flex flex-col">
                        <p className="text-text-30 text-h8 font-semibold">
                          changing...
                        </p>
                        <p className="text-text-20 text-bae font-normal">
                          Please wait while we are reviewing your request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
                  }}
                  className="p-4   rounded-lg "
                >
                  <h2 className="font-semibold text-primary-20 mb-2 capitalize text-h8">
                    favicon
                  </h2>
                  <p className="text-text-20">
                    A favicon is a small icon next to your site title. Get a
                    custom favicon to help visitors recognize your brand and to
                    stand out in their browser tabs.
                  </p>

                  <hr className="my-4 border" />

                  <div className="grid grid-cols-2">
                    {/* left */}
                    <div>
                      <h2 className="capitalize font-semibold text-primary-20 mb-4">
                        your favicon
                      </h2>
                      <div className="">
                        <div className="flex items-center gap-4">
                          <div className="border rounded-lg w-20 h-20 flex items-center justify-center">
                            <YobitiIcon className="w-10 h-10" />
                          </div>
                          <div className="flex flex-col gap-3">
                            <h3 className="capitalize font-semibold text-primary-20">
                              change favicon
                            </h3>
                            <button className="px-3 py-2 bg-primary-5 rounded-md text-white flex items-center gap-1">
                              <UploadIcon />
                              upload new icon
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* right */}
                    <div>
                      <h2 className="capitalize font-semibold text-primary-20 mb-4">
                        Favicon on Browser Tab
                      </h2>
                      <img src={FavicationBrowserTab} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 my-3">
                  <button className="bg-surface-20 text-primary-20 px-3 py-2 rounded-md">
                    cancel
                  </button>
                  <button className="bg-primary-5 text-white flex items-center gap-1 px-3 py-2 rounded-md">
                    <TickIcon />
                    save
                  </button>
                </div>
              </div>
            )}
            {aside === "tax" && <Tax setStage={setStage} />}
            {aside === "shipping" && <Shipping setStage={setStage} />}
            {aside === "payment" && <Payment />}
            {aside === "businessInfo" && <BusinessInfo />}
          </div>
        </section>
      </div>
    </>
  );
};
export default MainSetting;
