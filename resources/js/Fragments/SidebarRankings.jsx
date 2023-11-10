import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const SidebarRankings = () => {
  const [isActiveRatings, setIsActiveRatings] = useState();
  const [isActiveScores, setIsActiveScores] = useState();

  useEffect(() => {
    setIsActiveRatings(window.location.pathname === '/ranking');
    setIsActiveScores(window.location.pathname === '/ranking/scores');
}, []);


  return (
    <div className="m-8 border-r-2 border-black h-full w-5/6 text-[24px] pr-16">
      <h1 className="text-[32px] font-bold">Menu</h1>
      <Link href="/ranking" className={`${isActiveRatings ? 'text-[#F7C81A]' : 'text-black'} hover:opacity-60`}>
        <p className="ml-2 mt-2">Top Ratings</p>
      </Link>
      <Link href="/ranking/scores" className={`${isActiveScores ? 'text-[#F7C81A]' : 'text-black'} hover:opacity-60`}>
        <p className="ml-2 mt-2">Top Scorers</p>
      </Link>
    </div>
  );
};

export default SidebarRankings;
