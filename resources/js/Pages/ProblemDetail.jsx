import React from "react";
import SubLayout from '@/Layouts/SubLayout';
import InputLabel from '@/Components/InputLabel';
import TextInputCustom from '@/Components/TextInputCustom';


const Rankings = ({ auth }) => {
  return (
        <SubLayout
            user={auth.user}
        >
            <form className="w-screen">

                <div>
                    <p className='text-4xl font-bold w-full my-4'>Problem name</p>
                </div>

                <div>
                    <InputLabel value="test"/>
                    <TextInputCustom className="mt-1 block w-full"/>
                </div>

                <div>
                    <InputLabel value="test"/>
                    <TextInputCustom className="mt-1 block w-full"/>
                </div>

            
            </form>
        </SubLayout>
  );
};

export default Rankings;