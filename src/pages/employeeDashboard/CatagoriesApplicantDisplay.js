import React from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { HiOutlineViewList, HiOutlineUsers } from 'react-icons/hi';
import { CgDetailsMore } from 'react-icons/cg';





const CatagoriesApplicantDisplay = ({ count, catagorie, handelDelete }) => {

    const navigate = useNavigate();
    //const [removeComedown, setRemoveComedown] = useState('');
    //I_date,
    const {
        companyName,
        position,
        location,
        experience,
        employmentType,
        salaryRange,



        _id

    } = catagorie || {};



    return (
        <tr className="hover">
            <th>{count + 1}</th>
            <td>{companyName}</td>
            <td>{employmentType}</td>
            <td>{experience}</td>
            <td>{location}</td>
            <td>{position}</td>
            <td>{salaryRange}</td>

            <th>

                <button className='bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => navigate(`/details-job-info/${_id}`)}>
                    <CgDetailsMore className='text-xl'></CgDetailsMore>
                </button>
            </th>

            <th>
                <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate(`/dashboard/catagories-applicants-user/${_id}`)} > <HiOutlineUsers className='text-xl'></HiOutlineUsers></button>
            </th>


            <td>
                <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate(`/dashboard/candidate-list-interview/${_id}`)}> <HiOutlineViewList className='text-xl'></HiOutlineViewList></button>
            </td>
            <td>
                <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate(`/dashboard/update-company-catagorie/${_id}`)}> <GrDocumentUpdate className='text-xl'></GrDocumentUpdate></button>
            </td>
            <td>
                <button className="btn btn-outline btn-error btn-sm" onClick={() => handelDelete(_id)}><RiDeleteBinLine className='text-2xl'></RiDeleteBinLine></button>
            </td>

        </tr >
    );
};

export default CatagoriesApplicantDisplay;