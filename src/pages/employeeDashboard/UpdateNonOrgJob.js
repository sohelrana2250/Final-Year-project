import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobsIdQuery } from '../../features/api/apiSlice';
import CommonJobUpdate from '../../components/reusable/CommonJobUpdate';
const UpdateNonOrgJob = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetJobsIdQuery(id, { refetchOnMountOrArgChange: true });


    return (
        <>
            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }
            <CommonJobUpdate data={data} org_catagories="Non_ORG"></CommonJobUpdate>
        </>
    );
};

export default UpdateNonOrgJob;