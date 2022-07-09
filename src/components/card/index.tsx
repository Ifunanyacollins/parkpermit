import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-[16px] bg-white p-4 h-full">{children}</div>;
}

export default Card;
