import SubLayout from '@/Layouts/SubLayout';
import CustomLabel from '@/Components/CustomLabel';
import PrimaryButtonCustom from '@/Components/PrimaryButtonCustom';
import React, { useState } from "react";


const ProblemDetail = ({ auth }) => {

    // const { solve } = useForm({
    //     email: '',
    //     password: '',
    //     remember: false,
    // });

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
    
    const [limits] = useState(
        [
            { memory: '128mb ', time: '10ms' }
        ]
    );

    const [language] = useState(
        [
            { value: "C++" }
        ]
    );

  return (
        <SubLayout
            user={auth.user}
        >
            {/* <Head title="Detail" /> */}
            <div className="">

                <div>
                    <p className='text-4xl font-bold w-full my-4'>Problem name</p>
                </div>
                

                {limits.map((limit) => (
                    <table class="border-separate border border-slate-500 ...">
                        <thead>
                            <tr>
                            <th class="px-10 border border-slate-600 ...">Time Limit</th>
                            <th class="px-10 border border-slate-600 ...">Memory Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="text-center border border-slate-700 ...">{limit.time}</td>
                            <td class="text-center border border-slate-700 ...">{limit.memory}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}

                <object className='my-10 border-2 border-black w-full' data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                height="720"
                >
                </object>

                <div>
                    <p className='text-xl font-bold w-full my-4'>Language</p>
                </div>
                
                {language.map((lang) => (
                    <CustomLabel value={lang.value} className='w-24'/>
                ))}

                <div>
                    <p className='text-xl font-bold w-full my-4'>Submmit Solution</p>
                </div>

                <form class="flex space-x-2 ">
                    <label class="w-full border border-b-2 border-black">
                        <input type="file" class="block w-full text-sm text-slate-800
                        file:py-3 file:px-4
                        file:border-0
                        file:text-sm file:font-semibold
                        file:bg-black file:text-white
                        hover:file:bg-gray-700
                        "/>
                    </label>
                    <PrimaryButtonCustom className='w-40'>
                        Submit
                    </PrimaryButtonCustom>
                </form>

                <div>
                    <p className='text-xl font-bold w-full my-4'>Top User by Time</p>
                </div>

                {/* <RankingsLayout></RankingsLayout> */}

                <div class="table-wrapper">
                    <table class="w-full border-separate border-spacing-y-3 table-auto">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-left pl-3">Name</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className={`bg-black text-white border-y-2 border-s-2 border-black h-10 w-10`}>
                                        {item.id}
                                    </td>
                                    <td className={`border-y-2 border-black text-left pl-3 w-2/3`}>
                                        {item.name}
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
        </SubLayout>
  );
};

export default ProblemDetail;