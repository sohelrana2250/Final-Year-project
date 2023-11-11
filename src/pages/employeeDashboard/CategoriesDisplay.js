import React from 'react';
import { MdUpdate } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { BiCommentAdd } from 'react-icons/bi'


const CategoriesDisplay = ({ catagorie }) => {

    const { position, companyName, catagories,
        photo, postDate, email, _id, companysize, foundeddate, c_email, c_location, w_url


    } = catagorie || {};
    const navigate = useNavigate();


    return (
        <div className="card w-[36rem] glass">
            <figure><img className='w-full h-96' src={photo} alt="car!" /></figure>
            <div className="card-body">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Company-Name : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{companyName}</div>

                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Position : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{position}</div>

                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Catagories : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{catagories}</div>
                    {/* company size */}

                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Company Size : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{companysize}</div>
                    {/* founded date */}
                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Founded Date : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{foundeddate}</div>

                    {/* company Email Address */}
                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Company Email : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{c_email}</div>
                    {/* company Location */}
                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Company Location : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{c_location}</div>

                    {/* company Website url */}
                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">Company Website URL : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold"><a target="_blank" rel="noreferrer" href={w_url}>website url</a></div>

                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold"> Post-Date : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{postDate.slice(0, 16)}</div>


                    <div className="col-span-1 lg:col-span-3 text-sm text-orange-700 font-bold">   Email : </div>
                    <div className="col-span-1 lg:col-span-3 text-sm font-bold">{email}</div>
                </div>
                {/* { name: "Add-Catagories", path: "add-job-catagories" } */}

                <div className="card-actions flex justify-between mt-3">


                    <button className="btn btn-outline btn-success btn-sm " onClick={() => navigate(`/addJob-catagories/${_id}`)}> <BiCommentAdd className='text-xl'></BiCommentAdd></button>


                    <button className="btn btn-primary btn-outline  btn-sm" onClick={() => navigate(`/update-Cata-Info/${_id}`)}> <MdUpdate className='text-2xl'></MdUpdate>  <b className=' text-white'>Update</b></button>

                </div>

            </div>
            {/* <Link to={`/add-job-catagories/${_id}`}><BiCommentAdd className='text-xl'></BiCommentAdd></Link> */}

        </div>
    );
};

export default CategoriesDisplay;