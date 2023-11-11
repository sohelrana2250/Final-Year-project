// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useGetApplicantUserInfoQuery } from '../../features/api/apiSlice';
// import ApplicentUser from '../../components/reusable/ApplicentUser';


// const ApplicantUserInfo = () => {

//     const { id } = useParams();
//     const { data } = useGetApplicantUserInfoQuery(id, { refetchOnMountOrArgChange: true });


//     if (data?.data === null) {
//         alert('Employee is the Candidate this time');
//     }

//     return (
//         <>
            
//         </>
//     );
// };

// export default ApplicantUserInfo;