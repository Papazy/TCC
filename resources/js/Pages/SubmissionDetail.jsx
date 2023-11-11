import SubLayout from '@/Layouts/SubLayout';
import React, { useState } from "react";
import { problemLinks } from '@/Data/data.js';
import { Link, Head } from "@inertiajs/react";


export default function SubmissionDetail({ auth }) {

    const [data, setData] = useState(
        [
            { id: 1011010, user: "Sepuh", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011011, user: "Yelan", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011012, user: "Furina", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011013, user: "Diluc", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011014, user: "Raiden Ei", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011015, user: "Neuvilette", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011016, user: "Venti", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011017, user: "Kazuha", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011018, user: "Hu Tao", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"},
            { id: 1011019, user: "Fagih", archive: "Tester", problems: "Tugas Menumpuk", lang: "C++", verdict: "Act", pts: 100, time: "1 Min ago"}
        ]
    );

    const desc = [
        { id: 1, name: 'Asep', lang: 'C++', time: 'Oct 9, 2023 at 22:23:13', status: 'Complete' },
    ];

    const result = [
        { id: 1, status: 'Act', time: '2ms', memory: '100 KB', score: '50.0' },
        { id: 2, status: 'Act', time: '2ms', memory: '100 KB', score: '50.0' },
    ];

  return (
        <SubLayout
            user={ auth.user }
            dataLinks = { problemLinks }
        >
            <Head title="Submission" />
            <div className="">

                <div>
                    <p className='text-4xl font-bold w-full my-4'>Problem name</p>
                </div>

                <div className='flex justify-center'>
                    <div className='flex justify-center border-2 border-black w-max px-2 py-1 gap-2 rounded-full'>
                        <Link className='hover:text-[#FFC900]'>Submissions</Link>
                        {/* <span className='border-l-2 border-black'></span> */}
                        <Link className='hover:text-[#FFC900]'>My Submisions</Link>
                    </div>
                </div>
                {/* <RankingsLayout></RankingsLayout> */}
 
                
                <div className='pt-5'>
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

                <div>
                    <div>
                        <p className='text-4xl font-bold w-full my-4'>Problem name</p>
                    </div>

                    <div>
                        <h1 className='font-bold'>Problem Name</h1>
                        {desc.map((item) => (
                            <p className='text-m w-full my-4'>
                                Name : {item.name} <br /> 
                                Language: {item.lang} <br /> 
                                Time : {item.time} <br />
                                Status : {item.status}
                                </p>
                        ))}
                    </div>

                    <div>
                        <h1 className='font-bold'>Test Result</h1>
                        <div class="table-wrapper">
                            <table class="w-full border-separate border-spacing-y-3">
                                <thead>
                                    <tr className="text-left">
                                        <th className="pl-3">Id</th>
                                        <th>Status</th>
                                        <th>Time</th>
                                        <th>Memory</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((item, index) => (
                                        <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                                            <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                                                {item.id}
                                            </td>
                                            <td className={`border-y-2 border-black`}>
                                                {item.status}
                                            </td>
                                            <td className={`border-y-2 border-black`}>
                                                {item.time}
                                            </td>
                                            <td className={`border-y-2 border-black`}>
                                                {item.memory}
                                            </td>
                                            <td className={`border-y-2 border-r-2 border-black`}>
                                                {item.score}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>    
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold'>Solution</h1>
                        <object className='mt-4 border-2 border-black w-full' data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                        height="720"
                        >
                        </object>
                    </div>
                </div>
            </div>
        </SubLayout>
  );
};
