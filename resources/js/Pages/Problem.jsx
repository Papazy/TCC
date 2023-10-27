import Navbar from "@/Components/Navbar";
import ProblemTop from "@/Components/Problem/ProblemTop";
import ProblemCard from "@/Components/Problem/ProblemCard";

export default function Problem() {
    return (
        <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
            <Navbar></Navbar>
            <ProblemTop></ProblemTop>
            <ProblemCard></ProblemCard>
        </div>
    );
}
