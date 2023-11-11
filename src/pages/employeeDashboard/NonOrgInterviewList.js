import React from 'react';
import { useParams } from 'react-router-dom';
import { useListofInterviewCalledQuery } from '../../features/api/apiDevicesSlice';
import CommonInterviewList from '../../components/reusable/CommonInterviewList';

const NonOrgInterviewList = () => {
    const { id } = useParams();


    const idInfo = id.concat(" Non_ORG");
    const { data, isLoading } = useListofInterviewCalledQuery(idInfo, { refetchOnMountOrArgChange: true });


    return (
        <div>
            <CommonInterviewList isLoading={isLoading} data={data} id={id} org_catagories="Non_ORG"></CommonInterviewList>
        </div>
    );
};

export default NonOrgInterviewList;