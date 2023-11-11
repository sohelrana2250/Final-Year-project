import React, { useEffect, useState } from 'react';
import { useContentDisplayQuery, useDelete_contentByIdMutation, useDelete_user_contactMutation } from '../../features/api/apiDevicesSlice';
import { toast } from 'react-hot-toast';
import Loading from '../reusable/Loading';
import CommonContentAllJob from '../reusable/CommonContentAllJob';
import Swal from 'sweetalert2';


const AllContentbaseJob = () => {

    const [job_Catagories, setJobcatagorie] = useState("");
    const [search, setSearch] = useState("");

    const { data, isLoading, error } = useContentDisplayQuery(job_Catagories, { refetchOnMountOrArgChange: true });

    const [deletePost, { data: serverRespone, isSuccess, error: deleteError }] = useDelete_contentByIdMutation();
    const [delete_contact, { data: delete_response, error: delete_error }] = useDelete_user_contactMutation();

    useEffect(() => {

        if (serverRespone?.data?.acknowledged && isSuccess) {
            toast.success("Successfully Deleted");

        }
        else {
            deleteError && toast.error(`Server-Eroror-409 ${deleteError?.message}`);
        }

    }, [serverRespone, isSuccess, deleteError]);


    useEffect(() => {
        if (delete_response?.status && delete_response?.data?.acknowledged) {
            toast.success("Successfully contact Deleted");

        }
        else {
            delete_error && toast.error(`Server-Error 403 ---> ${delete_error?.message}`);
        }

    }, [delete_response, delete_error]);


    if (data?.status === 403) {
        //.....futute we have to used logout function
        return <Loading />
    }

    const handelDeletesubmit = (id) => {


        // const confirmdelete = window.confirm("Do you really want to leave?");
        // if (confirmdelete) {
        //     deletePost(id);
        // }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePost(id);
                Swal.fire(
                    'Deleted!',
                    'Your Content file has been deleted.',
                    'success'
                )
            }
        })

    }

    const handelContact_Information = (id, contact_id) => {


        // const confirmdelete = window.confirm("Are you sure Delete this message");
        // if (confirmdelete)
        //     delete_contact({ id, contact_id });

        Swal.fire({
            title: 'Are you sure Delete this message ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                delete_contact({ id, contact_id });
                Swal.fire(
                    'Deleted!',
                    'Your message has been deleted.',
                    'success'
                )
            }
        })

        // alert(`content id : ${id}-----> contact-Id : ${contact_id}`)


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
            <div className="m-3">
                <div className="sm:hidden">
                    <label for="tabs" className="sr-only">Select your country</label>
                    <select onClick={(e) => setJobcatagorie(e.target.value)} id="tabs" name="selectedJob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="In123456">Internship</option>
                        <option value="Fr123456">Fresher</option>
                        <option value="SeE123456">Semi-Experience</option>
                        <option value="Ex123456">Experience</option>
                    </select>
                </div>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full">
                        <button onClick={() => setJobcatagorie("In123456")} className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white hover:bg-primary" aria-current="page">Internship</button>
                    </li>
                    <li className="w-full">
                        < button onClick={() => setJobcatagorie("Fr123456")} className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Fresher</button>
                    </li>
                    <li className="w-full">
                        <button onClick={() => setJobcatagorie("SeE123456")} className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Semi-Experience</button>
                    </li>
                    <li className="w-full">
                        <button onClick={() => setJobcatagorie("Ex123456")} className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Experience</button>
                    </li>
                </ul>
            </div>



            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2 m-3">

                <div className="relative z-0 w-full  group">


                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ml-2 hover:bg-gray-900"> Total Content :{data?.data.length}</h1>
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



            <CommonContentAllJob data={data} handelContact_Information={handelContact_Information} handelDeletesubmit={handelDeletesubmit} search={search?.toLowerCase()} isAllow={true} ></CommonContentAllJob>
        </>
    );
};

export default AllContentbaseJob;