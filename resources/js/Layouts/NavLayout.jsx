import Dropdown from '@/Components/Dropdown';
import React from "react";
import { webImgs } from "@/Utils/Image";
import { Link} from '@inertiajs/react';

export default function Navbar({user, auth}) {
    const onToggleMenu = (e) => {
        e.target.name = e.target.name === "menu" ? "close" : "menu";
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("top-[9%]");
    };

    return (
        <header className="bg-white border-b-2 border-black">
            <nav className="flex justify-between py-2 items-center w-[92%] mx-auto">
                <div>
                    <img
                        className="w-10 cursor-pointer"
                        src={webImgs.logo}
                        alt="..."
                        href="/"
                    />
                </div>
                <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="/problem">
                                Problem
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Contest
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Rangking
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                { user ? (
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="relative infline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group"
                            >
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                                    {user.name}
                                </span>
                                <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                            </button>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                ) : (
                    <>
                        <Link
                             href={route('login')}
                            className="relative infline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group"
                         >
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                                Log in
                            </span>
                            <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                         </Link>
                    </>
                ) }     
                </div>
            </nav>
        </header>
        // </div>
    );
}
