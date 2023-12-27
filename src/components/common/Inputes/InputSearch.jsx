import { useState } from "react";
// import { persianToEnglish } from 'utils/changeNumberForInputs';

import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";

const InputSearch = ({
  titleInput,
  placeholder,
  value,
  setValue,
  inputName,
  disableEdit,
  setUpdateValue,
}) => {
  const [error, setError] = useState("");

  //   const isPersian = (text: any) => {
  //     const persianPattern = /^[\u0600-\u06FF\s]+$/;
  //     return persianPattern.test(text);
  //   };

  return (
    <div className="w-full h-full flex justify-start items-center   relative border border-[#F5F5F5] rounded-[10px]">
      <label htmlFor="input" className="text-text-30 text-base font-normal">
        {titleInput}
      </label>
      <SearchIcon className="text-[#AEAEAE] mx-2 " />
      <hr className="border rotate-90 w-9" />
      <input
        autoComplete="off"
        disabled={disableEdit}
        // autoComplete="off"
        className={` bg-transparent w-full flex justify-center align-center  h-12  px-2 placeholder:text-text-40 text-text-30 focus:text-text-30 ${
          disableEdit && "cursor-not-allowed"
        }`}
        placeholder={"enter a key for search..."}
        type={"text"}
        name={inputName}
        value={value}
      />
      {error && (
        <p className="text-xs text-red-500 mt-2 font-normal absolute inset-x-0 -bottom-6">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputSearch;
