import React, { useState } from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetjobsQuery } from "../features/api/apiSlice";
import AdvCarousel from "../layout/main/AdvCarousel";

const Jobs = () => {
  //pagination Concept
  const [page, setPage] = useState(0);
  const [size, setSize] = useState('10');
  const pagination = (size.concat(" ", page));
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetjobsQuery(pagination, { refetchOnMountOrArgChange: true });



  //data?.data?.length
  const pages = Math.ceil(75 / size);


  return (
    <>

      <AdvCarousel />
      <div className='pt-2'>

        <div className="flex justify-end">
          <div style={{
            marginLeft: "200px",
            marginBottom: '50px'
          }}>
            <p>Current Page  :  {page + 1} and Size:{size}</p>
            {
              [...Array(pages).keys()].map((number) => <button className="mr-3 text-xl btn btn-outline btn-sm" key={number} onClick={() => { setPage(number) }} >{number + 1}</button>)
            }
            <select className="rounded-xl" onChange={(event) => setSize(event.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </div>
        </div>


        <div className="flex">
          <select onChange={(e) => setSearch(e.target.value)} className="rounded-l-lg">
            <option disabled selected>Caragories</option>
            <option value="Internship" >Internship</option>
            <option value="Fresher">Fresher</option>
            <option value="Semi-Experiences" >Semi-Experiences</option>
            <option value="Experiences" >Experiences</option>
            <option value="" >All Jobs</option>
          </select>
          <input type="search" onChange={(e) => setSearch(e.target.value)} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-r-lg  focus:ring-blue-500 focus:border-blue-500 bg-[#082f49] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find Your Job / Srach Your Job Name" required />



        </div>

        {
          isLoading && <div className='flex justify-center  m-5'>
            <progress className="progress w-56 h-5"></progress>
          </div>
        }




        <div className='ml-3 mr-3  grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>
          {
            data?.data?.filter((item) => {
              return search.toLowerCase() === "" ? item : item?.position?.toLowerCase().includes(search) || item?.experience?.toLowerCase() === search?.toLowerCase();


            }).map((v, index) => <JobCard key={index} jobData={v}></JobCard>)
          }
        </div>
      </div>
    </>
  );
};

export default Jobs;
