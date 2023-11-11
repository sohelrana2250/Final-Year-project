import React, { useEffect } from 'react';
import { useAdmin_only_employeerMutation, useGetAll_Employee_ListQuery } from '../../features/api/apiSlice';
import { toast } from 'react-hot-toast';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCandidateAndEmployee_deleteMutation } from '../../features/api/apiCategoriSlice';
import Swal from 'sweetalert2';

const Allemployeer = () => {


    const { data, isLoading } = useGetAll_Employee_ListQuery(null, { refetchOnMountOrArgChange: true })
    const [admin_data, { data: server_respone, isSuccess, error }] = useAdmin_only_employeerMutation()
    const [deleteEmployeer, { isSuccess: deleteSuccess, data: deleteRespone, error: deleteError }] = useCandidateAndEmployee_deleteMutation();
    const handleToggle = (id, isAdmin) => {

        const admin = {
            isAdmin: !isAdmin,
            date: new Date().getTime()

        }

        admin_data({ id, ...admin });


    };

    const handelDeleteEmployee = (id) => {


        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteEmployeer(id.concat(" ").concat(process.env.REACT_APP_EMPLOYEER_USER));
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        });

    };

    //delte employeer information
    useEffect(() => {

        if (deleteSuccess && deleteRespone.status && deleteRespone?.data?.acknowledged) {
            toast.success("Successfully Delete")
        }
        else {
            deleteError && toast.error(deleteError?.message)
        }

    }, [deleteSuccess, deleteRespone, deleteError]);




    useEffect(() => {

        if (isSuccess && server_respone?.status && server_respone?.data?.acknowledged) {
            toast.success("Successfully-Done")
        }
        else if (server_respone?.status === 403) {
            toast.error(server_respone?.message);
        }
        else {
            error && toast.error(`Server-Error 404 ${error?.message}`)
        }


    }, [isSuccess, error, server_respone]);




    return (
        <>
            <div className='m-3'>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>F.Name </th>
                                <th>L.Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>C.Name</th>
                                <th>E.Range</th>
                                <th>C.Category</th>
                                <th>R.I.Company</th>
                                <th>A.Role</th>
                                <th>Admin</th>
                                <th>C.Admin.Date</th>
                                <th>C.Email</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                isLoading && <div className='flex justify-center  m-5'>
                                    <progress className="progress w-56 h-5"></progress>
                                </div>
                            }



                            {
                                data?.data?.map((v, index) => <tr key={index} className="hover">
                                    <td>{index + 1}</td>

                                    <td>{v?.firstName}</td>
                                    <td>{v?.lastName}</td>
                                    <td>{v?.email}</td>
                                    <td>{v?.gender}</td>
                                    <td>{v?.companyName}</td>
                                    <td>{v?.employeeRange}</td>
                                    <td>{v?.companyCategory}</td>
                                    <td>{v?.roleInCompany}</td>
                                    <td>{v?.role}</td>
                                    <td>
                                        <button onClick={() => handleToggle(v?._id, v?.isAdmin)}
                                            className={`${v?.isAdmin ? "bg-green-500" : "bg-red-500"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                                            {v?.isAdmin ? "Admin" : "Employeer"}
                                        </button>
                                    </td>
                                    <td>{new Date(v?.c_date).toString()}</td>
                                    <td>{v?.c_admin}</td>
                                    <td><button onClick={() => handelDeleteEmployee(v?._id)} className="btn btn-outline btn-error btn-sm"><RiDeleteBinLine className='text-xl'></RiDeleteBinLine></button></td>
                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
};

export default Allemployeer;