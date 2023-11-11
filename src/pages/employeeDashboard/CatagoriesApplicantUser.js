import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDeletecatagoriejobMutation, useGetallCatagoriesQuery } from '../../features/api/apiCategoriSlice';
import CatagoriesApplicantDisplay from './CatagoriesApplicantDisplay';
import Swal from 'sweetalert2';


const CatagoriesApplicantUser = () => {
    const { user: { email } } = useSelector((state) => state.auth);
    const { data, isLoading } = useGetallCatagoriesQuery(email, { refetchOnMountOrArgChange: true });
    const [deleteJob, { data: delete_respone, isSuccess, error, }] = useDeletecatagoriejobMutation();
    const handelDelete = (id) => {


        Swal.fire({
            title: 'Are You Shure .You Want to Delete Job Post',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteJob({
                    id,
                    JobType: "ORG"
                });
                Swal.fire('Delete!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Delete Successfuly Not Working', '', 'info')
            }
        })


    }

    useEffect(() => {

        if (delete_respone?.status && isSuccess && delete_respone?.data?.acknowledged) {
            toast.success('Successfully-Delete');
        }
        else {
            error && toast.error(error?.message);
        }

    }, [delete_respone, isSuccess, error]);

    return (
        <div className="overflow-x-auto mt-4">
            {
                isLoading && <div className='flex justify-center m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }

            <table className="table w-full m-3">
                <thead>
                    <tr>
                        <th>No </th>
                        <th>CompanyName</th>
                        <th>E-Type</th>
                        <th>Experience</th>
                        <th>Location</th>
                        <th>Position</th>
                        <th>SalaryRange</th>
                        <th>Post-Details</th>
                        <th>Applicants-User</th>
                        <th>Interview-List</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>



                <tbody>

                    {
                        data?.status && data?.data?.map((v, index) => <CatagoriesApplicantDisplay key={index} count={index} catagorie={v} handelDelete={handelDelete}></CatagoriesApplicantDisplay>)


                    }




                </tbody>
            </table>
        </div>
    );
};

export default CatagoriesApplicantUser;