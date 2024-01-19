import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GrDocumentUpdate } from "react-icons/gr";


const CommonContentAllJob = ({ data, handelContact_Information, handelDeletesubmit, search, isAllow, Unselected_Candidate }) => {

    const navigate = useNavigate();
    return (
        <>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 m-3">
                {
                    data?.status && data?.data?.filter((item) => {
                        return search.toLowerCase() === "" ? item : item?.constent_data?.floating_tittle?.toLowerCase().includes(search) || item?.email?.toLowerCase().includes(search) || item?.email?.includes(search)

                    }).map((v, index) => <div key={index} className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure>

                            <ReactPlayer url={v?.constent_data?.floating_content_url}
                                width="100%"
                                height="350px"
                                controls
                            />
                        </figure>
                        <div className="card-body bg-white border border-gray-200  shadow dark:bg-[#082f49] dark:border-gray-700 hover:bg-[#042f2e]">






                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_tittle" id=" floating_tittle" defaultValue={v?.constent_data?.floating_tittle} className="card-title  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_tittle" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Tittle</label>
                                </div>




                                <div className="relative z-0 w-full mb-6 group">

                                    <time className="text-xs text-white flex justify-end">{v?.date}</time>
                                </div>

                            </div>

                            <div className="relative z-0 w-full mb-6 group">

                                <textarea name='discription' id="discription" maxLength={150} rows="2" defaultValue={v?.constent_data?.discription} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#082f49] dark:border-gray-700 hover:bg-[#042f2e] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Career Objective maximun 150 word" required ></textarea>
                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.floating_first_name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_last_name" readOnly defaultValue={v?.floating_last_name
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.floating_first_city
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">


                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_last_name" readOnly defaultValue={v?.floating_gender
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.floating_country
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_last_name" readOnly defaultValue={v?.floating_Postal_Code

                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal-Code</label>
                                </div>


                            </div>

                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" id="floating_first_name" readOnly defaultValue={v?.floating_Address
                                    } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">

                                    <a target="_blank" rel="noreferrer" className="btn btn-outline btn-primary btn-sm" href={v?.floating_cv_url}>CV-URL</a>

                                </div>


                            </div>
                            <div className="grid md:grid-cols-1 md:gap-6">

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        {
                                            v?.contact_Info && <thead className="text-xs text-gray-700 uppercase  bg-[#082f49] dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Employeer Email
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Number
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Message
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Delete
                                                    </th>

                                                </tr>
                                            </thead>

                                        }



                                        <tbody>

                                            {
                                                v?.contact_Info?.map((val, index) => <tr key={index} className=" border-b bg-[#082f49] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {val?.contact_email}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {val?.phone_number
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {val?.contact_message}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={() => handelContact_Information(v?._id, val?.contact_id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">< RiDeleteBin5Line className="text-xl"></RiDeleteBin5Line></button>
                                                    </td>

                                                </tr>)

                                            }



                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            {/*Content Base Interview List  */}

                            {
                                v?.c_b_Interview?.length >= 1 && <div className="grid md:grid-cols-1 md:gap-6">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                            <thead className="text-xs text-gray-700 uppercase  bg-[#082f49] dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Interview ID
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Employeer Email
                                                    </th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                {
                                                    v?.c_b_Interview?.map((val, index) => <tr key={index} className=" border-b bg-[#082f49] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {val?.id}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {val?.email
                                                            }
                                                        </td>

                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                            <div className="card-actions justify-end">

                                {isAllow ? <>

                                    <button onClick={() => handelDeletesubmit(v?._id)} className="btn btn-outline btn-error btn-sm"><RiDeleteBin5Line className="text-xl"></RiDeleteBin5Line></button>
                                    <button onClick={() => navigate(`/contentUpdate/${v?._id}`)} className="btn btn-outline btn-primary btn-sm "><GrDocumentUpdate className="text-xl"></GrDocumentUpdate></button>
                                </> : <>

                                    <button onClick={() => Unselected_Candidate(v?.c_b_Interview)} className="btn btn-outline btn-error btn-xl "><RiDeleteBin5Line className="text-2xl m-2"></RiDeleteBin5Line>Unselected-Candidate</button>
                                </>}


                            </div>



                        </div>

                    </div>
                    )
                }

            </div>

        </>
    );
};

export default CommonContentAllJob;