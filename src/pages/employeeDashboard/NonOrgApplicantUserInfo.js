import React from 'react';
import { useNon_Org_Listof_ApplicentUserQuery } from '../../features/api/apiDevicesSlice';
import { useParams } from 'react-router-dom';
import ApplicantUserDisplay from '../../components/reusable/ApplicantUserDisplay';
import { useGetJobsIdQuery } from '../../features/api/apiSlice';

const NonOrgApplicantUserInfo = () => {

    const { id } = useParams();
    const { data, isLoading } = useNon_Org_Listof_ApplicentUserQuery(id, { refetchOnMountOrArgChange: true });
    // line on 172
    const { data: job_Dtails } = useGetJobsIdQuery(id, { refetchOnMountOrArgChange: true })
    return (
        <>
            <ApplicantUserDisplay isLoading={isLoading} applicantUser={data} job_Dtails={job_Dtails} org_catagories="Non_ORG"></ApplicantUserDisplay>
        </>
    );
};

export default NonOrgApplicantUserInfo;