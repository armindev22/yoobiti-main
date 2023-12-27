import { useState } from "react";
import Collapsible from "react-collapsible";

import { ReactComponent as ArrowDown } from "../../assets/icons/Arrow-Down.svg";

const CollapsiableFaq = ({ index, title, desc }) => {
  const [showSection, setShowSection] = useState(index === -1 ? true : false);

  return (
    <div className="border border-stroke-30  rounded-10 lg:max-w-[680px] max-w-[550px]  mb-3">
      <div
        onClick={() => {
          setShowSection(!showSection);
        }}
        className="flex justify-between items-center  p-4 "
      >
        <p className="text-primary-20 text-h7 font-normal">
          Do you have any questions?
        </p>
        <ArrowDown />
        {/* <img src="/assets/icons/Arrow-Down.svg" alt="arrow" /> */}
      </div>
      <Collapsible open={showSection ? true : false}>
        <p className="max-w-[728px] text-text-10 text-h8 font-normal px-5 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem.
        </p>
      </Collapsible>
    </div>
  );
};

export default CollapsiableFaq;
