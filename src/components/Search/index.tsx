import React from "react";
import icons from "../Icons";
import classname from "classnames";

type searchProps = {
  className?: string;
};
function Search({ className }: searchProps) {
  const searchClass = classname(className);
  return (
    <div
      className={`flex border-greyscale600 border rounded-full px-2 items-center ${searchClass}`}
    >
      <input
        type="search"
        className="text-greyscale900 group rounded-full   bg-transparent outline-none border-none shadow-none focus:ring-transparent w-full px-1"
      />
      <span className=" flex-shrink-0">{icons["search"]}</span>
    </div>
  );
}

export default Search;
