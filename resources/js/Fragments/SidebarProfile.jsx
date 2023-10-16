import React from "react";
import { Link } from "@inertiajs/react";

const SidebarProfile = () => {
  return (
    <div className="m-8 border-r-2 border-black h-full w-4/5 pr-16">
        <h1 className="text-[32px] font-bold">Menu</h1>
        <Link to='' className="">
            <p className="text-[24px] ml-2 mt-2">Summary</p>
        </Link>
        <Link to='' className="">
            <p className="text-[24px] ml-2 mt-2">Other options</p>
        </Link>
    </div>
  );
};

export default SidebarProfile;
