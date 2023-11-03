import React, {useState} from "react";
import { Link } from "@inertiajs/react";

const SidebarProblemDetail = () => {  

  return (
    <div className="w-1/5 h-max pr-16">
        <h1 className="text-[32px] font-bold">Problem</h1>
        <Link href="#" className="hover:text-[#FFC900]">
            <p className="text-l  ml-2 mt-2">Statements</p>
        </Link>
        <Link href="#" className="hover:text-[#FFC900]">
            <p className="text-l ml-2 mt-2">Submission</p>
        </Link>
    </div>
  );
};

export default SidebarProblemDetail;
