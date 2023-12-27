import React, { useState } from "react";
// component
import RequestMultiVendor from "./RequestMultiVendor";
import MyMultiVendor from "./MyMultiVendor";

const MainMultiVendor = ({ setStage }) => {
  const [myPage, setMyPage] = useState("MyVender");
  return (
    <>
      {/* header */}
      <header className="  mb-11">
        <div>
          <h1 className="capitalize font-semibold text-primary-20 text-h8 ">
            multi-vender
          </h1>
          <p className="text-text-20 my-2">
            In this section, you can view and manage your venders
          </p>
        </div>
      </header>
      {/* nav */}
      <nav className="mb-4 border-b pb-3 ">
        <ul className="flex items-center px-3 ">
          <li
            onClick={() => setMyPage("MyVender")}
            className={`cursor-pointer font-semibold text-text-20 text-h9 mr-6 ${
              myPage === "MyVender" ? "text-primary-5" : ""
            }`}
          >
            My venders
          </li>
          <li
            onClick={() => setMyPage("Request")}
            className="cursor-pointer font-semibold text-text-20 text-h9 ml-6 "
          >
            requests
          </li>
        </ul>
      </nav>
      {/* main section */}
      {myPage === "MyVender" && <MyMultiVendor setStage={setStage} />}
      {myPage === "Request" && <RequestMultiVendor />}
    </>
  );
};

export default MainMultiVendor;
