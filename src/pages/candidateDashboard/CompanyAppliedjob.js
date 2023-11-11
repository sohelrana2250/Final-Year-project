import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/reusable/Loading';
import { useCompayappliedjobQuery } from '../../features/api/apiCategoriSlice';
import SpecificJobDisplay from '../../components/Home/SpecificJobDisplay';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';


const CompanyAppliedjob = () => {
    const { user: { email } } = useSelector((state) => state.auth);
    const { data, isLoading } = useCompayappliedjobQuery(email, { refetchOnMountOrArgChange: true });
    const dispatch = useDispatch();
    if (isLoading) {
        return <Loading />;
    }
    if (data?.status === 403 || data?.status === 401) {
        //.....futute we have to used logout function
        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }

    return (
        <div>

            <h1 className='text-xl py-5 m-3'>Applied jobs</h1>
            <div className='grid grid-cols-2 gap-5 pb-5 m-3'>
                {data?.status && data?.data?.map((job, index) => (
                    // <CompanyJobcard key={index} jobData={job} />
                    <SpecificJobDisplay key={index} list={job}></SpecificJobDisplay>

                ))}
            </div>

        </div>
    );
};

export default CompanyAppliedjob;