import { Button, ButtonGroup } from "@material-tailwind/react";
// import React, { useState } from "react";

const radioMenu = ({ title, menu }) => {
  //   const [open, setOpen] = useState();
  return (
    <div>
      <ButtonGroup>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
          />
        </svg>
        <Button onClick={() => console.log("wow")}>hello</Button>
      </ButtonGroup>
    </div>
  );
};

export default radioMenu;
