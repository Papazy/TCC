import React from "react";
import RankingsLayout from "@/Layouts/RankingsLayout";
import SidebarRankings from "@/Fragments/SidebarRankings";

const Rankings = () => {
  return (
    <div className="flex font-sometypeMono">
        <div>
            <SidebarRankings/>
        </div>
        <div className="w-3/4 mt-8">
           <RankingsLayout/>
        </div>
    </div>
  );
};

export default Rankings;
