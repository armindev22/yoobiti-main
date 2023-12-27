import React, { useState } from "react";
import CommunicationsTable from "../../components/Tables/CommunicationsTable";
import ViewMessage from "../../components/pages/communnictions/ViewMessage";
const Communications = () => {
  const [stage, setStage] = useState("communications");

  return (
    <div>
      {stage === "communications" && (
        <>
          <section className="my-5 pb-5 border-b-[1px] border-[#EFEFEF]">
            <div>
              <h2 className="font-semibold capitalize my-3">communications</h2>
              <p className="text-[#AEAEAE] ">
                In this section, you can see the messages sent by users.
              </p>
            </div>
          </section>
          <section>
            <CommunicationsTable setStage={setStage} />
          </section>
        </>
      )}
      {stage === "view" && (
        <>
          <ViewMessage changeState={() => setStage("communications")} />
        </>
      )}
    </div>
  );
};

export default Communications;
