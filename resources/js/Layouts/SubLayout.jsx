import Navbar from '@/Layouts/NavLayout';
import SidebarProblemDetail from "@/Fragments/SidebarProblemDetail";
import { useState } from 'react';


export default function SubLayout({ user, header ,children } ) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (

        <div className="min-h-screen">
            <Navbar
              user={user}
            ></Navbar>
            <div className="min-h-screen flex justify-center bg-slate-100">
                <SidebarProblemDetail></SidebarProblemDetail>
                <span className='border-l border-gray-500'></span>
                <div className="w-2/3 p-10 pb-20 overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
        
    );
}

