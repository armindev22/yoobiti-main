import React from "react";

const ViewButton = ({ title, changeState }) => {
  return (
    <button
      onClick={() => changeState()}
      className=" bg-[#EEF2F8] cursor-pointer px-1 bg- h-10 rounded-10 text-[#246CDA] text-base font-medium"
    >
      {title}
    </button>
  );
};

export default ViewButton;
