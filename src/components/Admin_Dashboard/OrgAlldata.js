import React from 'react';
import { useGetJobCatagoriesQuery } from '../../features/api/apiCategoriSlice';
import { FcList } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const OrgAlldata = () => {

    const { data, isLoading, error } = useGetJobCatagoriesQuery("none", { refetchOnMountOrArgChange: true });
    const navigate = useNavigate();

    return (
        <>
            <div className="overflow-x-auto m-3">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>photoURL </th>
                            <th>C.Name</th>
                            <th>Position</th>
                            <th>J.Catagories</th>
                            <th>C.Location</th>
                            <th>J.P.Date</th>
                            <th>E.Email</th>
                            <th>Comapny Size</th>
                            <th>C.Founded Date</th>
                            <th>C.Email</th>
                            <th>C.Website</th>
                            <th>J.List</th>

                        </tr>
                    </thead>

                    {
                        isLoading && <div className='flex justify-center  m-5'>
                            <progress className="progress w-56 h-5"></progress>
                        </div>
                    }

                    {
                        error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
                    }


                    <tbody>


                        {
                            data?.status && data?.data?.map((v, index) => <tr key={index} className="hover">
                                <th>{index + 1}</th>

                                <th>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={v?.photo ? v?.photo : "https://shorturl.at/cuPW5"} alt="" />
                                        </div>
                                    </div>

                                </th>
                                <th>{v?.companyName}</th>
                                <th>{v?.position}</th>
                                <th>{v?.catagories}</th>
                                <th>{v?.c_location}</th>
                                <th>{v?.postDate}</th>
                                <th>{v?.email}</th>
                                <th>{v?.companysize}</th>
                                <th>{v?.foundeddate}</th>
                                <th>{v?.c_email}</th>
                                <th><a target="_blank" rel='noreferrer' className='btn btn-outline btn-primary btn-sm' href={v?.w_url} alt=''>Website</a></th>
                                <th><button onClick={() => navigate(`/dashboard/setting/Company_job_details/${v?._id}`)} className="btn btn-outline btn-sm"><FcList className="text-xl"></FcList></button></th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrgAlldata;