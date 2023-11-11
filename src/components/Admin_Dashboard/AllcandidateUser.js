import React, { useEffect } from 'react';
import { useGet_all_candidateInformationQuery } from '../../features/api/apiSlice';

import { TbSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import AdvCarousel from '../../layout/main/AdvCarousel';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCandidateAndEmployee_deleteMutation } from '../../features/api/apiCategoriSlice';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AllcandidateUser = () => {

    const { data, isLoading, error } = useGet_all_candidateInformationQuery(null, { refetchOnMountOrArgChange: true });
    const [deleteCandidate, { isSuccess: deleteSuccess, data: deleteRespone, error: deleteError }] = useCandidateAndEmployee_deleteMutation();

    //https://shorturl.at/krsOS
    const navigate = useNavigate();
    const OrgJobApplication = [
        { id: 1, heading: "No" },
        { id: 2, heading: "Job Id" },
        { id: 3, heading: 'Company Name' },
        { id: 4, heading: "Email Address" },
        { id: 5, heading: "Job Details" },
    ]
    const ApplicationHading = [
        { id: 1, heading: "No" },
        { id: 2, heading: "Job Id" },
        { id: 3, heading: "Candidate Email" },
        { id: 4, heading: " Company Name" },
        { id: 5, heading: "JOB POSITION" },
        { id: 6, heading: "C.Email Address" },
        { id: 7, heading: "Job Catagories" },
        { id: 8, heading: "Company Location" },
        { id: 9, heading: "Job Details" }
    ];
    const handelDeleteCandidate = (id) => {

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteCandidate(id.concat(" ").concat(process.env.REACT_APP_CANDIDATE_USER));
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        });

    };
    // delete server Respone
    useEffect(() => {

        if (deleteSuccess && deleteRespone?.status && deleteRespone?.data?.acknowledged) {
            toast.success("Successfully Delete");
        }
        else {
            deleteError && toast.error(deleteError?.message);
        }

    }, [deleteSuccess, deleteRespone, deleteError]);



    return (
        <>

            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }

            {
                error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
            }


            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 m-3">

                {
                    data?.status && data?.data?.map((v, index) => <div key={index} className="card card-compact w-full bg-base-100 shadow-xl">


                        {/* <div className="avatar">
                            <div style={{
                                width: "100%",
                                height: "350px",
                            }} className=" rounded">
                                <img src="https://shorturl.at/krsOS" alt="" />
                            </div>
                        </div> */}
                        <AdvCarousel />
                        <div className="card-body bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">

                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">


                                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">CANDIDATE NO :{index + 1}</h1>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <button onClick={() => handelDeleteCandidate(v?._id)} className="m-3 btn btn-outline btn-error btn-sm ">Delete Candidate <RiDeleteBinLine className='text-xl ml-2'></RiDeleteBinLine></button>
                                </div>

                            </div>

                            {/*  */}
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.firstName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_last_name" readOnly defaultValue={v?.lastName
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.city
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">


                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_last_name" readOnly defaultValue={v?.gender
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.country
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_last_name" readOnly defaultValue={v?.postcode

                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal-Code</label>
                                </div>


                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.address
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_rolw" readOnly defaultValue={v?.role
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">

                                    <a target="_blank" rel="noreferrer" className="btn btn-outline btn-primary btn-sm" href={v?.cvurl}>CV-URL</a>

                                </div>


                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.email
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                                </div>

                            </div>

                            {/* orginazitional Job */}

                            {
                                v?.applicants && <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">ORGANIZATIONAL JOB APLLICATION</h1>
                            }

                            <div className="grid md:grid-cols-1 md:gap-6">

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                        <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>

                                                {
                                                    v?.applicants && ApplicationHading?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                        {v.heading}
                                                    </th>)
                                                }

                                            </tr>
                                        </thead>



                                        <tbody>
                                            {
                                                v?.applicants?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.id
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.companyName}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.position}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.c_email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.experience}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.c_location}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button className='btn btn-outline btn-primary btn-sm' onClick={() => navigate(`/details-job-info/${v?.id}`)}><TbSearch className="text-xl" ></TbSearch></button>
                                                    </td>

                                                </tr>)

                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            {/* Non Orginazitional Job List */}

                            {v?.Non_org_applicants && <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">NON ORGANIZATIONAL JOB APLLICATION</h1>}

                            <div className="grid md:grid-cols-1 md:gap-6">

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                        <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>

                                                {
                                                    v?.Non_org_applicants && ApplicationHading?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                        {v.heading}
                                                    </th>)
                                                }

                                            </tr>
                                        </thead>


                                        <tbody>
                                            {
                                                v?.Non_org_applicants?.map((v, index) => <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.id
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.companyName}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.position}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.c_email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.experience}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.c_location}
                                                    </td>
                                                    <td className="px-6 py-4">


                                                        <button className='btn btn-outline btn-primary btn-sm' onClick={() => navigate(`/job-details/${v?.id}`)}><TbSearch className="text-xl" ></TbSearch></button>
                                                    </td>

                                                </tr>)

                                            }

                                        </tbody>

                                    </table>
                                </div>

                            </div>


                            {/* Orginaztional Interview Call */}


                            {v?.InterviewCall && <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">ORGANIZATIONAL INTERVIEW-CALL </h1>}

                            <div className="grid md:grid-cols-1 md:gap-6">

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                        <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>

                                                {
                                                    v?.InterviewCall && OrgJobApplication?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                        {v.heading}
                                                    </th>)
                                                }

                                            </tr>
                                        </thead>


                                        <tbody>
                                            {
                                                v?.InterviewCall?.map((v, index) => <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.id
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.companyName}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button className='btn btn-outline btn-primary btn-sm' onClick={() => navigate(`/details-job-info/${v?.id}`)}><TbSearch className="text-xl" ></TbSearch></button>
                                                    </td>

                                                </tr>)

                                            }
                                        </tbody>

                                    </table>
                                </div>

                            </div>

                            {/* Non Orginaztional Interview Call */}
                            {v?.Non_org_Interview && <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">NON ORGANIZATIONAL INTERVIEW-CALL </h1>}

                            <div className="grid md:grid-cols-1 md:gap-6">

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                        <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>

                                                {
                                                    v?.Non_org_Interview && OrgJobApplication?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                        {v.heading}
                                                    </th>)
                                                }

                                            </tr>
                                        </thead>


                                        <tbody>
                                            {
                                                v?.Non_org_Interview?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.id}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.companyName}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v?.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button className='btn btn-outline btn-primary btn-sm' onClick={() => navigate(`/job-details/${v?.id}`)}><TbSearch className="text-xl" ></TbSearch></button>
                                                    </td>

                                                </tr>)

                                            }
                                        </tbody>

                                    </table>
                                </div>

                            </div>


                        </div>



                    </div>
                    )
                }

            </div>
        </>
    );
};

export default AllcandidateUser;