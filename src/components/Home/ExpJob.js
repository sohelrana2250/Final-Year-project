import React, { useState } from 'react';
import { useGetJobCatagoriesQuery } from '../../features/api/apiCategoriSlice';
// import Navbar from '../../layout/main/Navbar';
import ExpJobDisplay from './ExpJobDisplay';

const ExpJob = () => {
    const [job_Catagories, setJobcatagorie] = useState("none");
    const { data, isLoading, error } = useGetJobCatagoriesQuery(job_Catagories, { refetchOnMountOrArgChange: true })


    // console.log(data);
    // console.log(isSuccess);
    // console.log(error?.message);


    return (
        <div>

            {/* <ExpJobDisplay key={index} catagorie={v}></ExpJobDisplay> */}
            <br />
            <div className="sm:hidden">
                <label for="tabs" className="sr-only">Select your country</label>
                <select onClick={(e) => setJobcatagorie(e.target.value)} id="tabs" name="selectedJob" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5  bg-[#082f49] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="none">All Catagories</option>
                    <option value="Internship">Internship</option>
                    <option value="Fresher">Fresher</option>
                    <option value="Semi-Experiences">Semi-Experience</option>
                    <option value="Experiences">Experience</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <button onClick={() => setJobcatagorie("none")} className="inline-block w-full p-4 text-gray-900  rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none  bg-[#082f49] dark:text-white hover:bg-primary" aria-current="page">All Catagories</button>
                </li>
                <li className="w-full">
                    <button onClick={() => setJobcatagorie("Internship")} className="inline-block w-full p-4 text-gray-900  focus:ring-4 focus:ring-blue-300 active focus:outline-none  bg-[#082f49] dark:text-white hover:bg-primary" aria-current="page">Internship</button>
                </li>
                <li className="w-full">
                    < button onClick={() => setJobcatagorie("Fresher")} className="inline-block w-full p-4  hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white bg-[#082f49] dark:hover:bg-gray-700">Fresher</button>
                </li>
                <li className="w-full">
                    <button onClick={() => setJobcatagorie("Semi-Experiences")} className="inline-block w-full p-4 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white  bg-[#082f49] dark:hover:bg-gray-700">Semi-Experience</button>
                </li>
                <li className="w-full">
                    <button onClick={() => setJobcatagorie("Experiences")} className="inline-block w-full p-4  rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white  bg-[#082f49] dark:hover:bg-gray-700">Experience</button>
                </li>
            </ul>
            {
                error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
            }


            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }
            <section >
                {/* <h1 className='text-3xl text-center font-bold'>Job  Catagory</h1> */}
                <div className='ml-5 mr-5  grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>


                    {/* <h1 className='text-3xl text-center font-bold'>Job  Catagory :{data?.data.length}</h1> */}
                    {


                        data?.status && data?.data.map((v, index) => <ExpJobDisplay key={index} catagorie={v}></ExpJobDisplay>)
                    }
                </div>
            </section>

        </div>
    );
};

export default ExpJob;