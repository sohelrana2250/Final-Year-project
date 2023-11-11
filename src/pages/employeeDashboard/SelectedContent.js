import React, { useState } from 'react';
import { useSelectedContentListQuery } from '../../features/api/apiCategoriSlice';
import { toast } from 'react-hot-toast';
import CommonContentAllJob from '../../components/reusable/CommonContentAllJob';
import { useSelector } from 'react-redux';

const SelectedContent = () => {

    const { user } = useSelector((state) => state.auth);
    const { email } = user;
    const { data, isLoading, error } = useSelectedContentListQuery(email, { refetchOnMountOrArgChange: true });

    const [search, setSearch] = useState("");
    const handelContact_Information = () => {


    }

    const handelDeletesubmit = () => {


    }

    const Unselected_Candidate = (data) => {

        const selectedId = data?.find((v) => v?.email === email);
        console.log(selectedId.id);





    }


    return (
        <>
            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }
            {

                error && toast.error(`Server-Error ${error?.message} and ${data?.data}`)
            }

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2 m-3">

                <div className="relative z-0 w-full  group">


                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ml-2 hover:bg-gray-900">Content Base Job Catagories / Total Content :{data?.data.length}</h1>
                </div>
                <div className="m-3">
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Job Title And Email Address" />
                    </div>
                </div>

            </div>
            <CommonContentAllJob data={data} handelContact_Information={handelContact_Information} handelDeletesubmit={handelDeletesubmit} search={search?.toLocaleLowerCase()} isAllow={false} Unselected_Candidate={Unselected_Candidate}></CommonContentAllJob>
        </>
    );
};

export default SelectedContent;