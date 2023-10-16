import React from "react";
import SidebarProfile from "@/Fragments/SidebarProfile";
import profile_pemandu from '../../../../public/images/profile_pemandu.jpg'

const Profile = () => {
return (
    <div className="font-roboto flex">
        <div>   
            <SidebarProfile/>
        </div>
        <div className="w-3/4 mt-8">
            <h1 className="text-[64px] font-bold font-lato">Settings</h1>
            <div className="border border-black">
                <div className="bg-black text-white full-width flex justify-between">
                    <h3 className="pl-3 font-bold py-1 text-[22px]">Basic Profile</h3>
                </div>
                <div className="flex p-5">
                    <img src={profile_pemandu} alt="" className="rounded-full w-[160px] h-[160px] border-2 border-black"/>
                    <div className="mt-5 ml-7">
                        <p className="font-semibold">Nama <span className="font-normal ml-7">Sepuh</span></p>
                        <p className="font-semibold">Rating <span className="font-normal ml-5">1000</span></p>
                    </div>
                </div>
            </div>
            <div className="border border-black mt-8">
                <h3 className="bg-black text-white full-width pl-3 font-bold py-1 text-[22px]">Problem Stats</h3>
                <div className="p-5">
                    <ul>
                        <li>● Scores : <span className="font-bold">1200</span> pts</li>
                        <li>● Attempted : <span className="font-bold">12</span></li>
                    </ul>
                    <ul className="ml-6">
                        <li>● <span className="font-bold">AC</span> : 8</li>
                        <li>● <span className="font-bold">WA</span> : 4</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
};

export default Profile;
