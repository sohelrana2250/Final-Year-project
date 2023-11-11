import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useEmployeerRegisterDataQuery, useUpdateEmployeerRegisterMutation } from '../../features/api/apiCategoriSlice';
import { useForm } from "react-hook-form";
import AdvCarousel from '../../layout/main/AdvCarousel';
import Swal from 'sweetalert2';

const UpdateEmployeer = () => {
    const { user: { email } } = useSelector((state) => state.auth);
    const { data, isLoading, error } = useEmployeerRegisterDataQuery(email, { refetchOnMountOrArgChange: true })
    const { handleSubmit, register } = useForm();
    const [updateEmployeerData, { data: serverRespone, isSuccess, error: serverError }] = useUpdateEmployeerRegisterMutation()
    const onSubmit = (update) => {

        const updateInfo = {
            id: data?._id,
            ...update


        };
        updateEmployeerData(updateInfo);
    }

    useEffect(() => {
        if (serverRespone?.status && isSuccess && serverRespone?.data?.acknowledged) {
            Swal.fire('Successfully ', 'Updated Information');
        }
        else {
            serverError && Swal.fire('Server Error 401 ', serverError?.message);
        }

    }, [serverRespone, isSuccess, serverError])
    return (
        <>

            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }

            {
                error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
            }

            <AdvCarousel />

            <div className='flex justify-center items-center overflow-auto p-10'>
                <form
                    className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-full justify-between'
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='firstName'>
                            First Name
                        </label>
                        <input type='text' id='firstName'  {...register("firstName")} defaultValue={data?.firstName} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='lastName'>
                            Last Name
                        </label>
                        <input type='text' id='lastName'  {...register("lastName")} defaultValue={data?.lastName} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='companyName'>
                            Company Name
                        </label>
                        <input type='text' id='companyName'  {...register("companyName")} defaultValue={data?.companyName} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='companyCategory'>
                            Company Catagories
                        </label>
                        <input type='text' id='companyCategory'  {...register("companyCategory")} defaultValue={data?.companyCategory} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='employeeRange'>
                            Company Range
                        </label>
                        <input type='text' id='employeeRange'  {...register("employeeRange")} defaultValue={data?.employeeRange} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='gender'>
                            Gender
                        </label>
                        <input type='text' id='gender'  {...register("gender")} defaultValue={data?.gender} required className='rounded-lg  input input-bordered w-full' />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='roleInCompany'>
                            Your Role In Company
                        </label>
                        <input type='text' id='roleInCompany'  {...register("roleInCompany")} defaultValue={data?.roleInCompany} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='c_date'>
                            Posting Date
                        </label>
                        <input type='text' id='c_date'  {...register("c_date")} readOnly defaultValue={new Date().getTime()} required className='rounded-lg  input input-bordered w-full' />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='email'>
                            Employeer Email
                        </label>
                        <input type='email' id='email' readOnly defaultValue={email} required className='rounded-lg  input input-bordered w-full' />
                    </div>

                    <div className="flex flex-col w-full max-w-xs">
                        <button className='btn btn-outline btn-sm rounded xl' type='submit'>
                            Submit
                        </button>
                    </div>


                </form>
            </div>
        </>
    );
};

export default UpdateEmployeer;