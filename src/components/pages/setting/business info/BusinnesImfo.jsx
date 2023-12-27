import React from "react";
// SVGs
import { ReactComponent as ImageIcon } from "../../../../assets/icons/Image.svg";
import { ReactComponent as TickIcon } from "../../../../assets/icons/Tick.svg";
import { ReactComponent as UploadIcon } from "../../../../assets/icons/Upload.svg";
// PNGs
import MapPic from "../../../../assets/support/Screenshot (3) 1.png";

const BusinessInfo = () => {
  return (
    <>
      <main className="border-l px-4">
        {/* section   top */}
        <section
          className=" p-4 rounded-lg my-4 flex flex-col gap-3"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold capitalize text-primary-20 text-h8 ">
              profile
            </h2>
            <p className="text-text-20">
              Your profile is what people will see on search results, invoices,
              chat and more.
            </p>
          </div>
          {/* inputs */}
          <div className="grid grid-cols-2 gap-4">
            {/* left */}
            <div className="flex flex-col gap-2">
              <lable className="text-primary-20">name</lable>
              <input
                type="text"
                className="border p-2"
                placeholder="name test"
              />
            </div>
            {/* right */}
            <div className="flex flex-col gap-2">
              <lable className="text-primary-20">
                Which category best matches your business?
              </lable>
              <input
                type="text"
                className="border p-2"
                placeholder="online store"
              />
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col gap-2">
            <label className="text-primary-20">
              Short description (150 chars)
            </label>
            <textarea
              placeholder="enter a description..."
              className="resize-none outline-none border p-3  h-44"
            />
          </div>

          {/* logo */}
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold capitalize text-primary-20 text-h8">
              logo
            </h2>
            <div className="flex gap-3 items-center ">
              <div className="border rounded-10 p-4">
                <label
                  htmlFor="images-input"
                  className="flex flex-col justify-center items-center"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="file"
                    className="hidden"
                    id="images-input"
                    accept="image/*"
                    multiple
                    // onChange={changeFilesInput}
                  />
                  <div className="flex items-center gap-x-3">
                    <ImageIcon className="text-text-20" />
                  </div>
                </label>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold capitalize text-primary-20 text-h10">
                  upload a photo
                </h3>
                {/* <lable>
                  <input type="file" />
                </lable> */}
                <div className="border px-3 py-2 rounded-lg">
                  <label
                    htmlFor="images-input"
                    className="flex flex-col justify-center items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="images-input"
                      accept="image/*"
                      multiple
                      // onChange={changeFilesInput}
                    />
                    <div className="flex items-center gap-x-3 ">
                      <UploadIcon className="text-primary-5" />
                      <p className="text-primary-5 text-h10 font-normal">
                        upload logo
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section bottom */}
        <section
          className=" p-4 rounded-lg my-4 flex flex-col gap-4"
          style={{
            boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <h2 className="font-semibold capitalize text-primary-20 text-h8">
            Location & contact info
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold capitalize text-primary-20 text-h8 ">
              Location
            </h2>
            <p className="text-text-20">
              Let customers know where your business is based.
            </p>
          </div>
          {/* inputs */}

          {/* input top */}
          <div className="flex flex-col gap-2">
            <lable className="text-primary-20">Location name</lable>
            <input
              type="text"
              className="border p-2"
              placeholder="enter address..."
            />
          </div>
          {/* input bottom */}
          <div className="grid grid-cols-2 gap-4">
            {/* left */}
            <div className="flex flex-col gap-2">
              <lable className="text-primary-20">address</lable>
              <input
                type="text"
                className="border p-2"
                placeholder="name test"
              />
            </div>
            {/* right */}
            <div className="flex flex-col gap-2">
              <lable className="text-primary-20">
                Address description (optional)
              </lable>
              <input
                type="text"
                className="border p-2"
                placeholder="enter address..."
              />
            </div>
          </div>

          {/* map */}

          <div>
            <img src={MapPic} className="w-full rounded-lg" />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold capitalize text-primary-20 text-h8 ">
              Contact info
            </h2>
            <p className="text-text-20">
              Add your business contact details so clients can reach you easily.
            </p>
          </div>

          {/* inputs */}
          {/* top */}
          <div className="flex flex-col gap-2">
            <lable className="text-primary-20">email</lable>
            <input
              type="email"
              className="border p-2"
              placeholder="saraazimi@gmail.com"
            />
          </div>
          {/* input bottom */}
          <div className="grid grid-cols-2 gap-4">
            {/* left */}
            <div className="flex flex-col gap-2">
              <lable className="text-primary-20">phone</lable>
              <input
                type="tel"
                className="border p-2"
                placeholder="+!345957721"
              />
            </div>
            {/* right */}
            <div className="flex flex-col gap-2">
              <lable className="text-primary-20">fax</lable>
              <input
                type="tel"
                className="border p-2"
                placeholder="+!345957721"
              />
            </div>
          </div>
        </section>

        {/* buttons */}
        <div className="flex items-center gap-3 my-3">
          <button className="bg-surface-20 text-primary-20 px-3 py-2 rounded-md">
            cancel
          </button>
          <button className="bg-primary-5 text-white flex items-center gap-1 px-3 py-2 rounded-md">
            <TickIcon />
            save
          </button>
        </div>
      </main>
    </>
  );
};

export default BusinessInfo;
