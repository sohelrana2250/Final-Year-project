import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExpJobDisplay = ({ catagorie }) => {

    const { position, companyName, catagories, c_location, foundeddate,
        w_url

        , photo, postDate, _id } = catagorie;
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow w-full md:flex-row md:max-w-xl hover:bg-[#042f2e] bg-[#082f49] dark:hover:bg-[#042f2e]">
                <img className="object-cover w-full h-full rounded-t-lg  md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={photo} alt="" />


                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{catagories}</h5>
                    <p className=" mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{companyName}</p>
                    <p className=' font-normal text-gray-700 dark:text-gray-400'> Position : {position}</p>
                    <p className=' font-normal text-gray-700 dark:text-gray-400'> Address: {c_location}</p>
                    <p className=' font-normal text-gray-700 dark:text-gray-400'> Founded Date: {foundeddate}</p>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>Post-Date : {postDate.slice(0, 16)}</p>
                    <a className='font-normal text-gray-700 dark:text-gray-400' target="_blank" rel="noreferrer" href={w_url}>{`Visit ${companyName}.com!`}</a>
                    <button onClick={() => navigate(`/SpecificJobList/${_id}`)} className="btn btn-primary btn-sm text-white mt-3">Details</button>
                </div>



            </div>


        </>
    );
};

export default ExpJobDisplay;