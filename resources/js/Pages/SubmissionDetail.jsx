import SubLayout from '@/Layouts/SubLayout';
import CustomLabel from '@/Components/CustomLabel';
import PrimaryButtonCustom from '@/Components/PrimaryButtonCustom';
import React, { useState } from "react";
import { Link } from "@inertiajs/react";


const ProblemDetail = ({ auth }) => {

    const [data] = useState(
        [
            { id: 1, name: "Sepuh", time: 20 },
            { id: 2, name: "Michel", time: 15 },
            { id: 3, name: "Andi", time: 10 },
            { id: 4, name: "Ridwan", time: 10 },
            { id: 5, name: "Putri", time: 10 },
            { id: 6, name: "Sepuh", time: 10 },
            { id: 7, name: "Michel", time: 10 },
            { id: 8, name: "Andi", time: 10 },
            { id: 9, name: "Ridwan", time: 10 },
            { id: 10, name: "Putri", time: 10 },
        ]
    );

  return (
        <SubLayout
            user={auth.user}
        >
            {/* <Head title="Detail" /> */}
            <div className="">

                <div className='flex justify-center'>
                    <div className='flex justify-center border-2 border-black w-max px-2 py-1 gap-2 rounded-full'>
                        <Link>Submissions</Link>
                        <span className='border-l-2 border-black'></span>
                        <Link>My Submisions</Link>
                    </div>
                </div>
                {/* <RankingsLayout></RankingsLayout> */}
 
                
                <div className=''>
                    <div class="table-wrapper">
                        <table class="w-full border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-left">
                                    <th className="pl-3">Id</th>
                                    <th>User</th>
                                    <th>Archive</th>
                                    <th>Problems</th>
                                    <th>Lang</th>
                                    <th>Verdict</th>
                                    <th>Pts</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                                        <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                                            {item.id}
                                        </td>
                                        <td className={`border-y-2 border-black`}>
                                            {item.user}
                                        </td>
                                        <td className={`border-y-2 border-black`}>
                                            {item.archive}
                                        </td>
                                        <td className={`border-y-2 border-black`}>
                                            {item.problems}
                                        </td>
                                        <td className={`border-y-2 border-black`}>
                                            {item.lang}
                                        </td>
                                        <td className={`border-y-2 border-black`}>
                                            {item.verdict}
                                        </td>
                                        <td className={`border-y-2 border-black`}>
                                            {item.pts}
                                        </td>
                                        <td className={`border-y-2 border-e-2 border-black`}>
                                            {item.time}
                                        </td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>    
                    </div>
                </div>
            </div>
        </SubLayout>
  );
};

export default ProblemDetail;