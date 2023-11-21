import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/Components/Navbar";
import ContestTop from "@/Components/Contest/ContestTop";
import ContestCard from "@/Components/Contest/ContestCard";

const Contest = () => {
    return (
        <Router>
            <>
                <Navbar />
                <div className="overflow-hidden font-mono md:min-w-fit  py-2 md:px-8 px-6 xl:min-w-full">
                    <Routes>
                        <Route path="/contest" element={<MainContest />} />
                        {/* <Route path="/contest/detail/:slug"></Route> */}
                    </Routes>
                </div>
            </>
        </Router>
    );
};

function MainContest() {
    return (
        <div>
            <ContestTop />
            <ContestCard />
        </div>
    );
}

export default Contest;
