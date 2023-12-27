import { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import { ReactComponent as EditIcon } from "../assets/icons/Edit.svg";
import { ReactComponent as ShowIcon } from "../assets/icons/Show.svg";
import { ReactComponent as BellIcon } from "../assets/icons/Bell.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/Chat.svg";
import { ReactComponent as DownIcon } from "../assets/icons/Arrow-Down.svg";

import { ReactComponent as ProfileImg } from "../assets/support/support-2.svg";
import InputSearch from "../components/common/Inputes/InputSearch";

const HeaderPannel = () => {
  const location = useLocation();
  // const param = ();
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

  useEffect(() => {
    console.log("param changed", location);
  }, [location.pathname]);

  return (
    <header className="h-[100px] border-b-[1px] border-[#EFEFEF] mt-[50px] w-full px-4 flex items-center justify-between my-3 ">
      <div className="flex items-center gap-x-4">
        <button
          className={` cursor-pointer px-3 border border-stroke-30 flex items-center gap-x-2 h-14 rounded-10 text-primary-5 bg-white text-base font-medium`}
        >
          <ShowIcon className="text-primary-5" />
          visit website
        </button>
        <button
          className={` cursor-pointer px-3 flex items-center gap-x-2 h-14 rounded-10 bg-primary-5 text-white text-base font-medium`}
        >
          <EditIcon />
          edit website
        </button>
      </div>

      <div className="hidden lg:flex mx-[30px] flex-[1_0_0]  items-center gap-x-12 ">
        <InputSearch />
      </div>
      {/* <div className="md:flex items-center gap-x-5 hidden">
        <p className="cursor-pointer text-text-30 font-medium text-base">
          login
        </p>
        <button className="h-14 px-4 py-[10px] text-white font-medium text-base rounded-[10px] button-backgroundColor">
          get started
        </button>
      </div>
      <div className="md:hidden">
        <button className="flex items-center h-14 px-4 py-[10px] text-white font-medium text-base rounded-[10px] button-backgroundColor">
          <img src="/assets/icons/arrow-right-white.svg" alt="arrow-right" />
          get started
        </button>
      </div> */}
      <div className="flex items-center">
        <div className="flex">
          <div className="flex">
            <span>.</span>
            <span className="text-[#FF4444] mx-2">5</span>
            <p className="capitalize text-[#AEAEAE] mx-1">new notification</p>
          </div>
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#FF4444] absolute top-0 right-0 "></div>
            <BellIcon className="ml-2.5" />
          </div>
        </div>
        <div className="relative mx-2.5">
          <div className="w-2 h-2 rounded-full bg-[#FF4444] absolute top-0 right-0 "></div>
          <ChatIcon />
        </div>
        <div className="flex items-center border-l-[2px] border-[#EFEFEF]">
          <div className="capitalize flex items-center mx-2.5">
            <p className="mx-2.5">sara azimi</p>
            <DownIcon className="text-[#AEAEAE] " />
          </div>

          <div>
            <div className="  border-solid border-[3px] border-[#A953FF] rounded-full">
              <ProfileImg className="w-9 h-9 p-[2px] " />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPannel;
