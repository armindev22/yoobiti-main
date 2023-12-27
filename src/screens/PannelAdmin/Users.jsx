import React, { useState } from "react";
// SVGs
import { ReactComponent as ArrowDown } from "../../assets/icons/Arrow-Down.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/Filter.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/Setting.svg";
import { ReactComponent as PaperUpload } from "../../assets/icons/Paper-Upload.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/Trash Bin.svg";

// components
import InputSearch from "../../components/common/Inputes/InputSearch";
import UsersTable from "../../components/pages/users/UsersTable";
import UsersDetail from "../../components/pages/users/UsersDetail";

const Users = () => {
  const [stage, setStage] = useState("users");
  return (
    <>
      {stage === "users" && (
        <>
          {/* header */}
          <header className="pb-4 border-b-[1px] flex items-center justify-between">
            <div>
              <h3 className="capitalize font-semibold">users</h3>
              <p className="text-text-20 mt-3">
                In this section, you can view and manage your users.
              </p>
            </div>
            <button
              onClick={() => {
                setStage("addInvoices");
              }}
              className="px-4 py-3 dashboard-gradient-button flex items-center text-white"
            >
              <PlusIcon className="mr-2" />
              create a new user
            </button>
          </header>
          {/* nav */}
          <nav className="my-8">
            <h3 className="font-semibold text-h8 mb-3">view</h3>
            <div className="flex items-center justify-between">
              <div className="border-1 px-3 py-2 flex justify-between items-center  w-60">
                <span className="text-primary-5">all users</span>
                <ArrowDown className="cursor-pointer text-text-20" />
              </div>
              <div className="flex justify-evenly items-center">
                <InputSearch />
                <button className="flex items-center bg-primary-5 px-5 py-2 text-white rounded-10 mx-4 ">
                  <FilterIcon className="mr-2" />
                  filters
                </button>
                <button className="text-primary-5 bg-primary-10 p-2.5 rounded-10">
                  <SettingIcon className="" />
                </button>
              </div>
            </div>
          </nav>

          {/* middle navbar */}
          <div className="mt-5 rounded-br-10 rounded-t-10 bg-primary-10 flex justify-between items-center py-2 px-3">
            <div>
              <p className="text-primary-20 font-semibold">
                <span>1</span> of <span>1</span> selected
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-primary-5 flex gap-1 items-center p-2">
                <PaperUpload className="w-5" />
                export
              </button>
              <hr className="h-full" />
              <button className="text-error-10 flex gap-1 items-center p-2">
                <TrashIcon className="w-5" />
                delete
              </button>
            </div>
          </div>

          {/* table */}

          <div className="my-3">
            <UsersTable setStage={setStage} />
          </div>
        </>
      )}
      {stage === "usersDetail" && (
        <>
          <UsersDetail setStage={setStage} />
        </>
      )}
    </>
  );
};

export default Users;
