import Navbar from "@/Components/Navbar";
import ContestTop from "@/Components/Contest/ContestTop";
import ContestCard from "@/Components/Contest/ContestCard";

export default function Contest() {
    return (
        <>
            <Navbar />
            <div className="overflow-hidden font-mono md:min-w-fit  py-2 md:px-8 px-6 xl:min-w-full">
                <ContestTop />
                <ContestCard />
                
            </div>
        </>
    );
}
