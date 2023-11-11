import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetspecificjoblistQuery } from '../../features/api/apiCategoriSlice';
import CatagoriesApplicantDisplay from '../../pages/employeeDashboard/CatagoriesApplicantDisplay';

const AllJOBDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetspecificjoblistQuery(id, { refetchOnMountOrArgChange: true });
    console.log(data);
    return (
        <>
            <div className="overflow-x-auto m-3">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No </th>
                            <th>CompanyName</th>
                            <th>E-Type</th>
                            <th>Experience</th>
                            <th>Location</th>
                            <th>Position</th>
                            <th>SalaryRange</th>
                            <th>POST-DETAILS</th>
                            <th>APPLICANTS-USER</th>
                            <th>INTERVIEW-LIST</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>

                    {
                        isLoading && <div className='flex justify-center  m-5'>
                            <progress className="progress w-56 h-5"></progress>
                        </div>
                    }

                    {
                        error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
                    }


                    <tbody>


                        {
                            data?.status && data?.data?.map((v, index) => <CatagoriesApplicantDisplay key={index} count={index} catagorie={v}></CatagoriesApplicantDisplay>)


                        }




                    </tbody>
                </table>
            </div>

        </>
    );
};

export default AllJOBDetails;