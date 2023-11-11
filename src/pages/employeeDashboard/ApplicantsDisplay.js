import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiOutlineViewList, HiOutlineUsers } from 'react-icons/hi';
import { useDeletecatagoriejobMutation } from '../../features/api/apiCategoriSlice';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';



const ApplicantsDisplay = ({ applicantsUser, count }) => {
    const navigate = useNavigate();
    // const extraOneday = 86400000;

    const [deleteJob, { data: delete_respone, isSuccess, error, }] = useDeletecatagoriejobMutation();
    const {
        companyName,
        position,
        location,
        experience,
        employmentType,
        salaryRange,
        _id

    } = applicantsUser || {};


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
                    JobType: "Non_ORG"
                });
                Swal.fire('Delete!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Delete Successfuly Not Working', '', 'info')
            }
        });




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
        <tr className="hover">
            <th>{count + 1}</th>
            <td>{companyName}</td>
            <td>{employmentType}</td>
            <td>{experience}</td>
            <td>{location}</td>
            <td>{position}</td>
            <td>{salaryRange}</td>
            <td>
                <button className='bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => navigate(`/job-details/${_id}`)}>
                    <CgDetailsMore className='text-xl'></CgDetailsMore>
                </button>
            </td>
            <td>
                <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate(`/dashboard/Non_Org_applicants-user/${_id}`)}> <HiOutlineUsers className='text-xl'></HiOutlineUsers></button>

            </td>
            <td>

                <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate(`/dashboard/Non_Org_InterviewList/${_id}`)}> <HiOutlineViewList className='text-xl'></HiOutlineViewList></button>

            </td>

            <td>
                <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate(`/dashboard/update-NonOrg-catagorie/${_id}`)} > <GrDocumentUpdate className='text-xl'></GrDocumentUpdate></button>

            </td>

            <td>

                <button className="btn btn-outline btn-error btn-sm" onClick={() => handelDelete(_id)}><RiDeleteBinLine className='text-2xl'></RiDeleteBinLine></button>

            </td>

        </tr>


    );
};

export default ApplicantsDisplay;