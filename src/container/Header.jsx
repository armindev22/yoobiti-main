import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
// SVGs
import { ReactComponent as JustifyIcon } from "../assets/icons/justified.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-hambur.svg";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-right-white.svg";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const { pathname } = location;

  const [menuState, setMenuState] = useState("closed"); // closed, open, closing

  const handleMenuToggle = () => {
    if (menuState === "closed") {
      setMenuState("open");
    } else if (menuState === "open") {
      setMenuState("closed");
    }
  };

  // useEffect(() => {
  //     console.log('location changed', location);
  // }, [location.pathname])

  return (
    <header className="h-[56px] mt-[50px] w-full px-8 flex items-center justify-between ">
      <div className="sm:flex sm:items-center sm:gap-x-3">
        {/* <img
          onClick={handleMenuToggle}
          className="lg:hidden"
          src="/assets/icons/justified.svg"
          alt="justify"
        /> */}
        <JustifyIcon className="lg:hidden" onClick={handleMenuToggle} />
        <p className="text-primary-5 text-[32px] font-bold">Yoobiti</p>
      </div>
      <div
        className={`lg:hidden sm:flex sm:flex-col sm:gap-y-4 menu ${menuState}`}
      >
        <div className="flex justify-between items-center mb-6">
          <p className="text-primary-20 text-h8 font-normal">menu</p>
          {/* <img
            onClick={handleMenuToggle}
            className="lg:hidden"
            src="/assets/icons/close-icon.svg"
            alt="justify"
          /> */}
          <CloseIcon onClick={handleMenuToggle} className="lg:hidden" />
        </div>
        <div className="flex justify-between items-ceenter border border-stroke-30 rounded-[57px] p-3">
          <p className="gradient-text-mobile text-h10 font-normal">home page</p>
          {/* <img
            className="lg:hidden"
            src="/assets/icons/arrow-right-hambur.svg"
            alt="arrow-right"
          /> */}
          <ArrowRightIcon className="lg:hidden" />
        </div>
        <div className="flex justify-between items-ceenter border border-stroke-30 rounded-[57px] p-3">
          <p className="gradient-text-mobile text-h10 font-normal">about us</p>
          {/* <img
            className="lg:hidden"
            src="/assets/icons/arrow-right-hambur.svg"
            alt="arrow-right"
          /> */}
          <ArrowRightIcon className="lg:hidden" />
        </div>
        <div className="flex justify-between items-ceenter border border-stroke-30 rounded-[57px] p-3">
          <p className="gradient-text-mobile text-h10 font-normal">plans</p>
          {/* <img
            className="lg:hidden"
            src="/assets/icons/arrow-right-hambur.svg"
            alt="arrow-right"
          /> */}
          <ArrowRightIcon className="lg:hidden" />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-x-12 ">
        <div
          className="relative cursor-pointer"
          onClick={() => history.push("/landing")}
        >
          <p
            className={`${
              pathname === "/landing" ? "text-text-30" : "text-text-10"
            } `}
          >
            home page
          </p>
          {pathname === "/landing" && (
            <div className="absolute left-1/2 -bottom-3 w-[6px] h-[6px] rounded-full bg-primary-5"></div>
          )}
        </div>
        <div
          className={`${pathname === "/about" && "relative "} cursor-pointer`}
          onClick={() => history.push("/about")}
        >
          <p
            className={`${
              pathname === "/about" ? "text-text-30" : "text-text-10"
            } text-base font-medium cursor-pointer`}
          >
            about us
          </p>
          {pathname === "/about" && (
            <div className="absolute left-1/2 -bottom-3 w-[6px] h-[6px] rounded-full bg-primary-5"></div>
          )}
        </div>
        <div
          className={`${pathname === "/plans" && "relative "} cursor-pointer`}
          onClick={() => history.push("/plans")}
        >
          <p
            className={`${
              pathname === "/plans" ? "text-text-30" : "text-text-10"
            } text-base font-medium cursor-pointer`}
          >
            plans
          </p>
          {pathname === "/plans" && (
            <div className="absolute left-1/2 -bottom-3 w-[6px] h-[6px] rounded-full bg-primary-5"></div>
          )}
        </div>
      </div>
      <div className="md:flex items-center gap-x-5 hidden">
        <p className="cursor-pointer text-text-30 font-medium text-base">
          login
        </p>
        <button className="h-14 px-4 py-[10px] text-white font-medium text-base rounded-[10px] button-backgroundColor">
          get started
        </button>
      </div>
      <div className="md:hidden">
        <button className="flex items-center h-14 px-4 py-[10px] text-white font-medium text-base rounded-[10px] button-backgroundColor">
          <ArrowIcon className="w-5" />
          get started
        </button>
      </div>
    </header>
  );
};

export default Header;
