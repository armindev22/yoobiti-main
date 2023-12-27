import React from "react";
import SupportTicketMessage from "../support/SupportTicketMessage";
import SupportCustomerMessage from "../support/SupportCustomerMessage";
import { useHistory } from "react-router-dom";
import AddButton from "../../common/Button/AddButton";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";

const NewMessage = ({ changeState }) => {
  const history = useHistory();
  const handleButton = () => {
    history.push("/dashboard/addticket");
  };
  return (
    <>
      <div>
        <h3></h3>
      </div>
      <div
        onClick={() => {
          changeState();
        }}
        className="flex items-center gap-x-3 cursor-pointer mb-5"
      >
        <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
          <ArrowRightIcon className="text-text-30 rotate-180" />
        </div>
        <p className="text-black text-h7 capitalize font-medium">back</p>
      </div>
      <div className="w-full flex items-start mb-4 gap-x-4">
        <div className="border border-stroke-30 rounded-[20px] flex w-full grow">
          <div className="w-full flex justify-between py-7 px-6">
            <div className="flex flex-col items-center justify-center w-1/5 border-r-2 border-stroke-20 ">
              <p className="text-text-20 font-medium text-base">
                ticket number
              </p>
              <hr className="border-2 border-stroke-30 w-3/4 my-3" />
              <p className="text-primary-20 font-medium text-base">#820fdf8</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/5  border-r-2 border-stroke-20">
              <p className="text-text-20 font-medium text-base">Unit</p>
              <hr className="border-2 border-stroke-30 w-3/4 my-3" />
              <p className="text-primary-20 font-semibold text-base">Tech</p>
            </div>
            <div className="flex flex-col items-center justify-center w-2/5  border-r-2 border-stroke-20">
              <p className="text-text-20 font-medium text-base">subject</p>
              <hr className="border-2 border-stroke-30 w-3/4 my-3" />
              <p className="text-primary-20 font-medium text-base">
                this is a test subject!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/5">
              <p className="text-text-20 font-medium text-base">state</p>
              <hr className="border-2 border-stroke-30 w-3/4 my-3" />
              <p className="rounded-[46px] text-tertiary-70 font-medium text-base bg-tertiary-1 px-4 py-2">
                open
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <AddButton
            className={"min-w-[270px] justify-center"}
            title="add a new answer"
            handleButton={handleButton}
          />
        </div>
      </div>
      <SupportTicketMessage />
      <div className="mt-[50px]">
        <SupportCustomerMessage />
      </div>
    </>
  );
};

export default NewMessage;
