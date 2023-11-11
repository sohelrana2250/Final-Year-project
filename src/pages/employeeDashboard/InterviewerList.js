import React from 'react';
import { useParams } from 'react-router-dom';
import { useListofInterviewCalledQuery } from '../../features/api/apiDevicesSlice';
import CommonInterviewList from '../../components/reusable/CommonInterviewList';



const InterviewerList = () => {

    const { id } = useParams();


    const idInfo = id.concat(" ORG");
    const { data, isLoading } = useListofInterviewCalledQuery(idInfo, { refetchOnMountOrArgChange: true });



    return (
        <>
            <CommonInterviewList isLoading={isLoading} data={data} id={id} org_catagories="ORG" ></CommonInterviewList>
        </>
    );
};

export default InterviewerList;