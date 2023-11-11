import React, { useEffect } from 'react';
import { useAllComplainQuery, useDeleteSpecificComplainMutation } from '../../features/api/apiSlice';
import AdvCarousel from '../../layout/main/AdvCarousel';
import Swal from 'sweetalert2';

const ComplainBox = () => {

    const { data, isLoading, error } = useAllComplainQuery(null, { refetchOnMountOrArgChange: true });
    const [deleteComplain, { data: deleteData, isSuccess, error: serverError }] = useDeleteSpecificComplainMutation();
    // console.log(data);
    // console.log(isLoading);
    // console.log(error);

    // console.log(deleteData);
    // console.log(isSuccess);
    // console.log(serverError);

    const CandidateToEmployeer = [
        { id: 1, heading: "No" },
        { id: 2, heading: "Company Name" },
        { id: 3, heading: "Company Email" },
        { id: 4, heading: "Company Location" },
        { id: 5, heading: "Complain Date" },
        { id: 6, heading: "Employeer Email" },
        { id: 7, heading: "Employee Name" },
        { id: 8, heading: "Candidate Name" },
        { id: 9, heading: "Complain Details" },
        { id: 10, heading: "Resolve" }
    ];
    const systemComplain = [
        { id: 1, heading: "No" },
        { id: 2, heading: "Problem Name" },
        { id: 3, heading: "Complain Date" },
        { id: 4, heading: "User Name" },
        { id: 5, heading: "Complain Details" },
        { id: 6, heading: "Resolve" }
    ]

    const candidateAuthority = [
        { id: 1, heading: "No" },
        { id: 2, heading: "Company Name" },
        { id: 3, heading: "Company Location" },
        { id: 4, heading: "Company Email" },
        { id: 5, heading: "Complain Date" },
        { id: 6, heading: "Candidate Name" },
        { id: 7, heading: "C.Registration Number" },
        { id: 8, heading: "Reg.Certificate" },
        { id: 9, heading: "Resolve" }
    ];

    const employeerAuthority = [
        { id: 1, heading: "No" },
        { id: 2, heading: "Company Name" },
        { id: 3, heading: "(Resent/Previous) Company Location" },
        { id: 4, heading: "Complain Date" },
        { id: 5, heading: "(Resent/Previous) Position" },
        { id: 6, heading: "Employeer Name" },
        { id: 7, heading: "Resolve" }


    ];
    const EmployeerToCandidate = [
        { id: 1, heading: "No" },
        { id: 2, heading: "C.Name" },
        { id: 3, heading: "C.Email" },
        { id: 4, heading: "Complain Date" },
        { id: 5, heading: "Complain Details" },
        { id: 6, heading: "Employeer Name" },
        { id: 7, heading: "Resolve" }
    ];

    const handelDeleteComplain = (complainId, s_complainId, complainName) => {

        deleteComplain({ complainId, s_complainId, complainName });

    };
    useEffect(() => {

        if (isSuccess && deleteData?.status && deleteData?.data?.acknowledged) {
            Swal.fire('Successfully ', 'Resolve Complain');

        }
        else {
            serverError && Swal.fire('System Error ', serverError?.message);
        }

    }, [isSuccess, deleteData, serverError]);

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


            {
                data?.status && data?.data?.map((value, index) => <div key={index} className="card card-compact w-full bg-base-100 shadow-xl">
                    {/* <div className="avatar ">
                        <div style={{
                            width: "100%",
                            height: "350px",
                        }} className=" rounded">
                            <img src="https://t.ly/bwHV7" alt="" />
                        </div>
                    </div> */}
                    < AdvCarousel />
                    <div className="card-body bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">

                        <div className="grid md:grid-cols-3 md:gap-6">
                            <div className="relative z-0 w-full mb-2 group">
                                <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Complain No :{index + 1}</h1>
                            </div>
                            <div className="relative z-0 w-full mb-2 group">
                                <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{value?.email}</h1>
                            </div>
                            <div className="relative z-0 w-full mb-2 group">
                                {
                                    value?.CanToEmp ? <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{process.env.REACT_APP_CANDIDATE_USER.toUpperCase()}</h1> : <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{process.env.REACT_APP_EMPLOYEER_USER.toUpperCase()}</h1>
                                }
                            </div>

                        </div>
                        {/*Candidate to Employeer Complain Section */}

                        <div className="grid md:grid-cols-1 md:gap-6">

                            {
                                value?.CanToEmp && <div className="relative z-0 w-full mb-2 group">
                                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{process.env.REACT_APP_CANDIDATE_USER.toUpperCase()} To  {process.env.REACT_APP_EMPLOYEER_USER.toUpperCase()}   Complain Section</h1>
                                </div>
                            }



                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                    <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>

                                            {
                                                value?.CanToEmp && CandidateToEmployeer?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                    {v.heading}
                                                </th>)
                                            }

                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            value?.CanToEmp?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">{v?.data?.companyName}</td>
                                                <td className="px-6 py-4">{v?.data?.companyemail}</td>
                                                <td className="px-6 py-4">{v?.data?.date}</td>
                                                <td className="px-6 py-4"> {v?.data?.c_location}</td>
                                                <td className="px-6 py-4">{v?.data?.employeeremail}</td>
                                                <td className="px-6 py-4">{v?.data?.employeername}</td>
                                                <td className="px-6 py-4">{v?.data?.username}</td>
                                                <td className="px-6 py-4">{v?.data?.details}</td>
                                                <td className="px-6 py-4"><button onClick={() => handelDeleteComplain(value?._id, v?.id, "CanToEmp")} className="btn btn-outline btn-sm btn-error">Delete</button></td>
                                            </tr>)

                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/*System Complain Section  */}
                        <div className="grid md:grid-cols-1 md:gap-6">

                            {
                                value?.Sys_Com && <div className="relative z-0 w-full mb-2 group">
                                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"> System Complain Section</h1>
                                </div>
                            }


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                    <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>

                                            {
                                                value?.Sys_Com && systemComplain?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                    {v.heading}
                                                </th>)
                                            }

                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            value?.Sys_Com?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">{v?.data?.problem}</td>
                                                <td className="px-6 py-4">{v?.data?.date}</td>
                                                <td className="px-6 py-4">{v?.data?.username}</td>
                                                <td className="px-6 py-4">{v?.data?.details}</td>
                                                <td className="px-6 py-4"><button onClick={() => handelDeleteComplain(value?._id, v?.id, "Sys_Complain")} className="btn btn-outline btn-sm btn-success">Delete</button></td>
                                            </tr>)

                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        {/*Authority Change Candidate to Employeer  */}

                        <div className="grid md:grid-cols-1 md:gap-6">

                            {
                                value?.C_to_E && <div className="relative z-0 w-full mb-2 group">
                                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"> Authority Change Candidate to Employeer </h1>
                                </div>
                            }



                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                    <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>

                                            {
                                                value?.C_to_E && candidateAuthority?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                    {v.heading}
                                                </th>)
                                            }

                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            value?.C_to_E?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">{v?.data?.companyName}</td>
                                                <td className="px-6 py-4">{v?.data?.companyaddress}</td>
                                                <td className="px-6 py-4">{v?.data?.companyemail}</td>
                                                <td className="px-6 py-4">{v?.data?.date}</td>
                                                <td className="px-6 py-4">{v?.data?.username}</td>
                                                <td className="px-6 py-4">{v?.data?.c_registerNumber}</td>
                                                <td className="px-6 py-4"> <a className="btn btn-outline btn-sm btn-success" href={v?.data?.certificate}>Reg.Certificate</a></td>
                                                <td><button onClick={() => handelDeleteComplain(value?._id, v?.id, "CandidateToEmployee")} className="btn btn-outline btn-sm btn-error">Delete</button></td>
                                            </tr>)

                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/*Authority Change  Employeer to Candidate  */}

                        <div className="grid md:grid-cols-1 md:gap-6">

                            {
                                value?.E_to_C && <div className="relative z-0 w-full mb-2 group">
                                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"> Authority Change  Employeer to Candidate </h1>
                                </div>
                            }



                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                    <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>

                                            {
                                                value?.E_to_C && employeerAuthority?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                    {v.heading}
                                                </th>)
                                            }

                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            value?.E_to_C?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">{v?.data?.companyName}</td>
                                                <td className="px-6 py-4">{v?.data?.companyaddress}</td>
                                                <td className="px-6 py-4">{v?.data?.date}</td>
                                                <td className="px-6 py-4">{v?.data?.position}</td>
                                                <td className="px-6 py-4">{v?.data?.username}</td>
                                                <td className="px-6 py-4"><button onClick={() => handelDeleteComplain(value?._id, v?.id, "EmployeeToCandidate")} className="btn btn-outline btn-sm btn-success">Delete</button></td>
                                            </tr>)

                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>



                        {/*Employerr To Candidate  Complain Section  */}
                        <div className="grid md:grid-cols-1 md:gap-6">

                            {
                                value?.EmpToCan && <div className="relative z-0 w-full mb-2 group">
                                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"> Employerr To Candidate  Complain Section </h1>
                                </div>
                            }



                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                                    <thead className="text-xs text-gray-700 uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>

                                            {
                                                value?.EmpToCan && EmployeerToCandidate?.map((v) => <th key={v.id} scope="col" class="px-6 py-3">
                                                    {v.heading}
                                                </th>)
                                            }

                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            value?.EmpToCan?.map((v, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">{v?.data?.candidatename}</td>
                                                <td className="px-6 py-4">{v?.data?.candidateemail}</td>
                                                <td className="px-6 py-4">{v?.data?.date}</td>
                                                <td className="px-6 py-4">{v?.data?.details}</td>
                                                <td className="px-6 py-4">{v?.data?.username}</td>
                                                <td className="px-6 py-4"><button onClick={() => handelDeleteComplain(value?._id, v?.id, "EmpToCanComplain")} className="btn btn-outline btn-sm btn-success">Delete</button></td>
                                            </tr>)

                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>


                    </div>
















                </div>)
            }

        </>
    );
};

export default ComplainBox;