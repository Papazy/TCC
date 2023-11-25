import React, {useState} from "react";
import { problemLinks } from "@/Data/data.js";
import { Link } from "@inertiajs/react";
// import { Link } from "react-router-dom";

export default function SidebarProblemDetail() {  

  return (
    <div className="w-1/5 h-max pr-16 py-10">
        <h1 className="text-[32px] font-bold">Problem</h1>

          {problemLinks.map((problemLink) => (
            <Link href={problemLink.link} className="hover:text-[#FFC900]">
              <p className="text-l ml-2 mt-2">{problemLink.title}</p>
            </Link> 
          ))}

    </div>
  );
}
