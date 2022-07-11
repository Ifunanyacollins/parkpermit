import React from "react";
import icons from "../Icons";

function RecentPermit({ date, name }: { date: string; name: string }) {
  return (
    <div className="flex  justify-between items-center border-b border-slate-200 pb-3">
      <div className="flex space-x-3">
        <span className="block">{icons["ticket"]}</span>
        <span className="block">{name}</span>
      </div>

      <span className="block">Due date - {date}</span>
    </div>
  );
}

export default RecentPermit;
