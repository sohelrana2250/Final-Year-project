import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ jobData }) => {
  const navigate = useNavigate();

  const { _id, position, companyName, location, employmentType, p_date, date,
    salaryRange
  } =
    jobData || {};
  const today = new Date()




  return (

    <>

      <div className='border border-gray-300 shadow-xl p-5 rounded-2xl text-white  dark:bg-[#082f49] dark:border-gray-700 hover:bg-[#042f2e]'
      >
        <p className='mb-3'><b>Post-Date :</b> {
          new Date(p_date).toString().slice(0, 16)
        }</p>

        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-3  text-white '>
          <div>
            <p className='text-xl'>{position}</p>
            <small className=' text-white /70 '>
              by{" "}
              <span className='font-semibold hover:text-primary cursor-pointer hover:underline transition-all'>
                {companyName}
              </span>
            </small>
          </div>
          <p>{location}</p>
          <p> Salary Range : {
            salaryRange}</p>

        </div>
        <div className='flex justify-between items-center mt-5'>
          <p>{employmentType}</p>
          <p className='m-3'><b>Last-Date:</b> {
            new Date(date).toString().slice(0, 16)
          }</p>
          {/* <button className='btn' onClick={() => navigate(`/details-job-info/${_id}`)}>Details </button> */}

          {/* button disable process panding  */}
          <button disabled={today.getTime() >= date ? true : false} type="button" onClick={() => navigate(`/job-details/${_id}`)} className="btn btn-outline btn-success btn-sm">Details</button>
        </div>
      </div>
    </>

  );
};

export default JobCard;
