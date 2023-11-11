import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetspecificjoblistQuery } from '../../features/api/apiCategoriSlice';
import SpecificJobDisplay from './SpecificJobDisplay';

const SpecificJobList = () => {

    const { id } = useParams();
    const { data, isLoading, error } = useGetspecificjoblistQuery(id, { refetchOnMountOrArgChange: true });
    // console.log(data);

    return (
        <>
            <div className='pt-3 m-6'>
                <div className='bg-primary/10 p-3 rounded-2xl'>
                    <h1 className='font-semibold text-xl'>Find Jobs</h1>
                </div>
                <div className='ml-5 mr-5  grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>

                    {
                        error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
                    }


                    {
                        isLoading && <div className='flex justify-center  m-5'>
                            <progress className="progress w-56 h-5"></progress>
                        </div>
                    }
                    {
                        data?.status && data?.data?.map((v, index) => <SpecificJobDisplay key={index} list={v}></SpecificJobDisplay>)

                    }
                </div>
            </div>
        </>
    );
};

export default SpecificJobList;