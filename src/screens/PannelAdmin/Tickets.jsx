import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Components
import AddButton from "../../components/common/Button/AddButton";
import SupportTable from "../../components/pages/support/SupportTable";
import SelectAble from "../../components/common/SelectAble";
import AddTickets from "../../components/pages/ticket/AddTickets";
import NewMessage from "../../components/pages/ticket/Message";
// SVGs
// import { ReactComponent as ArrowDown } from '../../../assets/icons/Arrow-Down.svg';

const Tickets = () => {
  const [stage, setStage] = useState("ticket");
  const history = useHistory();
  const handleButton = () => {
    history.push("/dashboard/addticket");
  };
  return (
    <div>
      {stage === "ticket" && (
        <>
          <div className="w-full flex justify-between items-center mb-4">
            <div className="">
              <AddButton
                title="add ticket"
                handleButton={handleButton}
                changeState={() => setStage("addTickets")}
              />
            </div>
            <SelectAble
              header={"sort by"}
              title={"this is a test"}
              className={"min-w-[260px]"}
            />
          </div>
          <SupportTable changeState={() => setStage("message")} />
        </>
      )}
      {stage === "message" && (
        <>
          <div>
            <NewMessage changeState={() => setStage("ticket")} />
          </div>
        </>
      )}
      {stage === "addTickets" && (
        <>
          <div className="mb-8">
            <AddTickets
              changeState={() => {
                setStage("ticket");
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Tickets;
