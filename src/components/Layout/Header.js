import { useRouter } from "next/router";
import React from "react";
import icons from "../Icons";
import Bell from "../notification/Bell";
import { routes } from "./Sidebar";

function Header({ user = "Collins Ogbuzuru" }) {
  const { pathname } = useRouter();
  return (
    <div className="h-20 p-5 px-20 flex justify-between items-center">
      <div className="justify-self-start">
        <h1 className=" font-extrabold text-2xl">{routes[pathname]}</h1>
      </div>
      <div className="justify-self-end  text-greyscale900  flex items-center space-x-10">
        <span>{icons["search"]}</span>
        <Bell />
        <div className="space-x-3 flex items-center">
          <span className="h-8 w-8 flex justify-center items-center  rounded-full  bg-primary font-poppins text-white uppercase">
            {user[0]}
          </span>
          <span className=" font-extrabold">{user}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
