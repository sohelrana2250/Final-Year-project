import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetspecificjobDataQuery } from '../../features/api/apiCategoriSlice';
import CommonJobUpdate from '../../components/reusable/CommonJobUpdate';


const UpdateCompanyCatagorie = () => {



    const { id } = useParams();
    const { data, isLoading } = useGetspecificjobDataQuery(id, { refetchOnMountOrArgChange: true })


    return (
        <>
            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }
            <CommonJobUpdate data={data} org_catagories="ORG"></CommonJobUpdate>
        </>
    );
};

export default UpdateCompanyCatagorie;