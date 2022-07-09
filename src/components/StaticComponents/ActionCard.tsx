import React from "react";

function ActionCard() {
  return (
    <div className="bg-primary relative h-56 overflow-hidden rounded-[16px] p-5">
      <span className="  opacity-10 h-80 bottom-0 -right-40 w-full  border-[30px] block rounded-full absolute"></span>
      <span className=" opacity-10 h-52 w-52  bottom-10  -right-20 absolute   border-[30px] rounded-full block"></span>
      <span className="text-white font-semibold text-sm">Quick Action</span>
    </div>
  );
}

export default ActionCard;
