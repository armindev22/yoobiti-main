import React, { useState } from "react";
import MainMyPage from "../../components/pages/mypage/MainMyPage";
import AddPage from "../../components/pages/mypage/AddPage";

const MyPages = () => {
  const [stage, setStage] = useState("mypages");

  return (
    <div>
      {stage === "mypages" && (
        <>
          <MainMyPage setStage={setStage} />
        </>
      )}
      {stage === "addpage" && (
        <>
          <AddPage setStage={setStage} />
        </>
      )}
    </div>
  );
};

export default MyPages;
