import Navbar from "@/Components/Navbar";
import ProblemPage from "@/Components/Problem/ProblemPage";
// import { BrowserRouter } from "react-router-dom";

export default function Problem({ problemCard }) {
    return (
        <>
            <Navbar></Navbar>
            <div className="overflow-hidden font-mono md:min-w-fit py-2 md:px-8 px-6 xl:min-w-full">
                <ProblemPage problemCard={problemCard} />
            </div>
        </>
    );
}
