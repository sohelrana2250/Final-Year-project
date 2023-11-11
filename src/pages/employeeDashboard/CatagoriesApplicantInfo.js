
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetspecificjobDataQuery } from '../../features/api/apiCategoriSlice';
import { useListof_ApplicantUserQuery } from '../../features/api/apiDevicesSlice';
import ApplicantUserDisplay from '../../components/reusable/ApplicantUserDisplay';



const CatagoriesApplicantInfo = () => {

    const { id } = useParams();


    const { data, isLoading } = useListof_ApplicantUserQuery(id, { refetchOnMountOrArgChange: true });
    const { data: job_Dtails } = useGetspecificjobDataQuery(id, { refetchOnMountOrArgChange: true });




    return (
        <>

            <ApplicantUserDisplay isLoading={isLoading} applicantUser={data} job_Dtails={job_Dtails} org_catagories="ORG"></ApplicantUserDisplay>



        </>
    );
};

export default CatagoriesApplicantInfo;