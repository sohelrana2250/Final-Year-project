import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { useGetAppliedJobsQuery } from "../../features/api/apiSlice";
import { logoutRedux, systemLogOut } from "../../features/auth/authSlice";
//import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAppliedJobsQuery(email, { refetchOnMountOrArgChange: true });
  // if token expire then the system automaically delete
  if (data?.status === 401 || data?.status === 403) {

    dispatch(systemLogOut({ dispatch, logoutRedux }));
  }
  // isLoading page 

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className='text-xl py-5 m-3'>Applied jobs</h1>
      <div className='grid grid-cols-2 gap-5 pb-5 m-3'>
        {data?.status && data?.data?.map((job, index) => (
          <JobCard key={index} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
