import React from 'react';
import { useGetjobsQuery } from '../../features/api/apiSlice';
import ApplicantsDisplay from '../../pages/employeeDashboard/ApplicantsDisplay';

const NonorgAlldata = () => {

    const { data, isLoading, error } = useGetjobsQuery(null, { refetchOnMountOrArgChange: true })
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
                            data?.status && data?.data?.map((v, index) => <ApplicantsDisplay key={index} count={index} applicantsUser={v}></ApplicantsDisplay>)


                        }




                    </tbody>
                </table>
            </div>



        </>
    );
};

export default NonorgAlldata;