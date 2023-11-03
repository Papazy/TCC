import Navbar from '@/Layouts/NavLayout';
import SidebarProblemDetail from "@/Fragments/SidebarProblemDetail";
import { useState } from 'react';


export default function SubLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        // <div className="min-h-screen bg-gray-100">
        //     <Navbar
        //       user={user}
        //     ></Navbar>
        //     <main>{children}</main>
        // </div>
        <div className="min-h-screen pt-6 sm:pt-0 bg--100">
            <Navbar
              user={user}
            ></Navbar>
            <div className="min-h-screen flex m-8 pt-6 sm:pt-0 bg--100">
                <SidebarProblemDetail></SidebarProblemDetail>
                <div className="flex w-full border-l-2 border-black px-6 bg-white overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
        
    );
}

