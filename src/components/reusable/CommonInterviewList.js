import React, { useEffect } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useUnselectedEmployeeMutation } from '../../features/api/apiDevicesSlice';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';

const CommonInterviewList = ({ isLoading, data, id, org_catagories }) => {

    const [removeUnselected, { data: removeData, isSuccess, error }] = useUnselectedEmployeeMutation();
    const dispatch = useDispatch();
    const handelUnSelected_Employee = (userid) => {
        const unselected = {
            userid,
            jobid: id,
            org_catagories
        }

        removeUnselected(unselected);

    }

    //if Token expire the the system autoamtically logout
    if (data?.status === 401 || data?.status === 403) {

        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }

    useEffect(() => {

        if (isSuccess && removeData?.data?.data?.acknowledged) {
            toast.success('Successfull --Unselected-Employee');
        }
        else if (removeData?.status === 401 || removeData?.status === 403) {
            toast.error(`Login Again- ${removeData?.message}`)
        }
        else {
            error && toast.error(`Server-Error- ${error?.message}`)
        }


    }, [isSuccess, error, removeData]);




    return (
        <>
            <div className='m-3'>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Select</th>
                                <th>First-Name</th>
                                <th>Last-Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Post-Code</th>
                                <th>CV-URL</th>
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
                                    <th>{index + 1}</th>
                                    <th><button onClick={() => handelUnSelected_Employee(v?._id)} className="btn btn-outline btn-error btn-sm"><RiDeleteBinLine className='text-xl'></RiDeleteBinLine></button></th>
                                    <td>{v?.firstName}</td>
                                    <td>{v?.lastName}</td>
                                    <td>{v?.email}</td>
                                    <th>{v?.gender}</th>
                                    <th>{v?.address}</th>
                                    <th>{v?.city}</th>
                                    <th>{v?.country}</th>
                                    <th>{v?.postcode}</th>
                                    <th> <a target="_blank" rel='noreferrer' className='btn btn-outline btn-primary btn-sm' href={v?.cvurl} alt=''>cv-url</a></th>
                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default CommonInterviewList;