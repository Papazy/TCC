import React from "react";
import SidebarProfile from "@/Fragments/SidebarProfile";
import ProfileLayout from "@/Layouts/ProfileLayout";
import Navbar from "@/Components/Navbar";

const Profile = () => {
return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <Navbar/>
        <div className="flex">
            <div>
                <SidebarProfile/>
            </div>
            <div className="w-3/4 mt-8">
                <ProfileLayout/>
            </div>
        </div>
    </div>

/* <div className="font-mono flex">
<Navbar></Navbar>
<div>   
    <SidebarProfile/>
</div>
<div className="w-3/4 mt-8">
    <ProfileLayout/>
</div>
</div> */
);
};

export default Profile;
