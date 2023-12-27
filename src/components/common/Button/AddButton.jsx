import React from "react";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

const AddButton = ({ title, className, changeState }) => {
  return (
    <button
      onClick={() => changeState()}
      className={` ${className} cursor-pointer px-3 flex items-center gap-x-2 h-14 rounded-10 bg-primary-5 text-white text-base font-medium`}
    >
      <PlusIcon />
      {title}
    </button>
  );
};

export default AddButton;
