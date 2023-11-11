import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCatagoriesUserEndQuery } from '../../features/api/apiCategoriSlice';
import CategoriesDisplay from './CategoriesDisplay';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';

const CategoriesData = () => {


    const { user: { email } } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { data, isLoading } = useGetCatagoriesUserEndQuery(email, { refetchOnMountOrArgChange: true });

    if (data?.status === 401 || data?.status === 403) {

        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }


    return (
        <div>

            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }
            <br />
            <div className="flex justify-center">

                <h1 className="flex items-center text-4xl font-extrabold  dark:text-black">Job Catagory<span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">LIST :   {data?.data?.length}</span></h1>

            </div>

            <section className='my-5 mr-5'>

                <div className='ml-5 mr-5  grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-16'>
                    {

                        data?.status && data?.data?.map((v, index) => <CategoriesDisplay key={index} catagorie={v}></CategoriesDisplay>)

                    }
                </div>
            </section>


        </div>
    );
};

export default CategoriesData;