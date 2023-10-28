import React from "react";
import SidebarProfile from "@/Fragments/SidebarProfile";
import ProfileLayout from "@/Layouts/ProfileLayout";

const Profile = () => {
return (
    <div className="font-sometypeMono flex">
        <div>   
            <SidebarProfile/>
        </div>
        <div className="w-3/4 mt-8">
            <ProfileLayout/>
        </div>
    </div>
);
};

export default Profile;
