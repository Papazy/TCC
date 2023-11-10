import React, {useState} from "react";
import Navbar from "@/Components/Navbar";
import SidebarSubmissions from "@/Fragments/SidebarSubmissions";
import SubmissionsLayout from "@/Layouts/SubmissionsLayout";
import { allSubmissionsData } from "@/Data/allSubmissionsData";

const Submissions = () => {
  const [submissionsData, setSubmissionsData] = useState(allSubmissionsData);
  const updateSubmissionsData = (newData) => {
    setSubmissionsData(newData);
  };

  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
        <Navbar/>
        <div className="flex">
            <div>
                <SidebarSubmissions/>
            </div>
            <div className="w-2/3 mt-8">
               <SubmissionsLayout data={submissionsData}/>
            </div>
        </div>
    </div>
  );
};

export default Submissions;