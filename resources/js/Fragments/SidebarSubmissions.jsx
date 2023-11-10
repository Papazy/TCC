import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const SidebarSubmissions = () => {
    const [isActiveAllSubmissions, setIsActiveAllSubmissions] = useState();
    const [isActiveMySubmissions, setIsActiveMySubmissions] = useState();

    useEffect(() => {
        setIsActiveAllSubmissions(window.location.pathname === '/submissions');
        setIsActiveMySubmissions(window.location.pathname === '/submissions/mine');
    }, []);

    return (
        <div className="m-8 border-r-2 border-black h-full w-5/6 pr-16 text-[24px]">
            <h1 className="text-[32px] font-bold">Menu</h1>
            <Link
                href="/submissions"
                className={`${isActiveAllSubmissions ? 'text-[#9BC12E]' : 'text-black'} hover:opacity-60`}
            >
                <p className="ml-2 mt-2">All Submissions</p>
            </Link>
            <Link
                href="/submissions/mine"
                className={`${isActiveMySubmissions ? 'text-[#9BC12E]' : 'text-black'} hover:opacity-60`}
            >
                <p className="ml-2 mt-2">My Submissions</p>
            </Link>
        </div>
    );
};

export default SidebarSubmissions;