import Navbar from '@/Layouts/NavLayout';
import SidebarProblemDetail from "@/Fragments/SidebarProblemDetail";
import { useState } from 'react';


export default function SubLayout({ user, header ,children } ) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (

        <div className="min-h-screen pt-6 sm:pt-0 bg--100">
            <Navbar
              user={user}
            ></Navbar>
            <div className="min-h-screen flex justify-center m-10 pt-6 sm:pt-0 bg--100">
                <SidebarProblemDetail></SidebarProblemDetail>
                <span className='border-l border-gray-500'></span>
                <div className="w-2/3 px-10 bg-white overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
        
    );
}

