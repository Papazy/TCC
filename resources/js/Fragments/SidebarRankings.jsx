import React from "react";
import {Link} from "@inertiajs/react";

const SidebarRankings = () => {
  return (
    <div className="m-8 border-r-2 border-black h-full w-4/5 pr-16">
        <h1 className="text-[32px] font-bold">Menu</h1>
        <Link href="/ranking" className="hover:text-[#FFC900]">
            <p className="text-[24px] ml-2 mt-2">Top Ratings</p>
        </Link>
        <Link href="" className="hover:text-[#FFC900]">
            <p className="text-[24px] ml-2 mt-2">Top Scores</p>
        </Link>
    </div>
  );
};

export default SidebarRankings;
