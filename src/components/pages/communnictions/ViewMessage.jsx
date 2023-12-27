import React from "react";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-white.svg";

const ViewMessage = ({ changeState }) => {
  return (
    <>
      <div className="flex items-center mb-5">
        <h3 className="text-[#AEAEAE]">communications</h3>{" "}
        <ArrowRightIcon className="text-[#AEAEAE] w-6 mx-1.5" />{" "}
        <h3>sara azimi</h3>
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
      <section
        className="w-full grid grid-cols-3 rounded-10 mb-2 px-6 py-5  mt-3 "
        style={{
          boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-[#AEAEAE] border-b-[1px] pb-3">name</h3>
          <p className="mt-3">sara azimi</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-[#AEAEAE] border-b-[1px] pb-3">email</h3>
          <p className="mt-3">saraazimi456@gmail.com</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-[#AEAEAE] border-b-[1px] pb-3">date</h3>
          <p className="mt-3">2023/10/12</p>
        </div>
      </section>
      <section className="my-8">
        <h1 className="my-4 font-semibold">message</h1>
        <div
          className="px-4 py-5 rounded-10 "
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo
            debitis minima cupiditate tenetur neque obcaecati tempora delectus
            facere dolor sed nulla modi quod, at laborum nostrum totam quas
            aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus recusandae totam delectus. Magnam libero molestiae molestias
            voluptatem, aperiam culpa! Unde omnis nam architecto necessitatibusJ
          </p>
        </div>
      </section>
    </>
  );
};
export default ViewMessage;
