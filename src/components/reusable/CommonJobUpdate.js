import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useUpdatecompanycaragoriesMutation } from '../../features/api/apiCategoriSlice';
import { useDispatch } from 'react-redux';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';

const CommonJobUpdate = ({ data, org_catagories }) => {
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const [update, { data: update_respone, isSuccess, error }] = useUpdatecompanycaragoriesMutation();
    const {
        companyName,
        position,
        location,
        workLevel,
        experience,
        employmentType,
        salaryRange,
        foundeddate,
        companysize,
        c_email,
        c_location,
        w_url,
        overview,
        skills,
        requirements,
        responsibilities, _id
    } = data?.data || {};
    const onSubmit = (data, event) => {
        const element = event.target;
        const position = element.position.value;
        const companyName = element.companyName.value;
        const experience = element.experience.value;
        const workLevel = element.workLevel.value;
        const employmentType = element.employmentType.value;
        const salaryRange = element.salaryRange.value;
        const location = element.location.value;
        const overview = element.overview.value;
        const companysize = element.companysize.value;
        const foundeddate = element.foundeddate.value;
        const c_email = element.c_email.value;
        const c_location = element.c_location.value;
        const w_url = element.w_url.value;

        const updatedata = {
            position,
            companyName,
            experience,
            workLevel,
            employmentType,
            salaryRange,
            location,
            companysize,
            foundeddate,
            c_email,
            c_location,
            w_url,
            overview,
        }

        const updatecata = { ...updatedata, ...data };


        update({ _id: _id.concat(" " + org_catagories), ...updatecata });

    }
    useEffect(() => {

        if (isSuccess && update_respone?.status && update_respone?.data?.acknowledged) {
            toast.success('Successfully-Update');
        }
        else if (update_respone?.status === false) {
            toast.error(update_respone?.message);
        }
        else {
            error && toast.error(error?.message);
        }

    }, [update_respone, isSuccess, error]);
    // if token expire then the system automaically delete
    if (data?.status === 401 || data?.status === 403) {

        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }

    return (
        <>
            <div className='flex justify-center items-center overflow-auto p-10'>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-full justify-between'

                >

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='position'>
                            Position
                        </label>
                        <input type='text' id='position' name='position' defaultValue={position} className="input input-bordered w-full rounded-xl" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='companyName'>
                            Company Name
                        </label>
                        <input
                            className="input input-bordered w-full rounded-xl"
                            type='text'
                            id='companyName'
                            name='companyName'
                            defaultValue={companyName}

                        />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='experience'>
                            Experience
                        </label>
                        <input type='text' id='experience' name='experience' defaultValue={experience} className="input input-bordered w-full rounded-xl" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='workLevel'>
                            Work Level
                        </label>
                        <input type='text' id='workLevel' name='workLevel' defaultValue={workLevel} className="input input-bordered w-full rounded-xl" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='employmentType'>
                            Employment Type
                        </label>
                        <input
                            type='text'
                            id='employmentType'
                            name='employmentType'
                            defaultValue={employmentType}
                            className="input input-bordered w-full rounded-xl"

                        />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='salaryRange'>
                            Salary Range
                        </label>
                        <input type='text' id='salaryRange' name='salaryRange' defaultValue={salaryRange} className="input input-bordered w-full rounded-xl" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='location'>
                            Location
                        </label >
                        <input type='text' id='location' name='location' defaultValue={location} className="input input-bordered w-full rounded-xl" />
                    </div>
                    {/*company size */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='foundeddate'>
                            Company Founded Date

                        </label >
                        <input type='text' id='foundeddate' name='foundeddate' defaultValue={foundeddate} className="input input-bordered w-full rounded-xl" />
                    </div>
                    {/* company Size */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='companysize'>
                            Company Size

                        </label >
                        <input type='text' id='companysize' name='companysize' defaultValue={companysize} className="input input-bordered w-full rounded-xl" />
                    </div>
                    {/* company Email Address */}

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='c_email'>
                            Company Email Address

                        </label >
                        <input type='email' id='c_email' name='c_email' defaultValue={c_email} className="input input-bordered w-full rounded-xl" />
                    </div>

                    {/*Company Location */}

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='c_location'>
                            Company location

                        </label >
                        <input type='text' id='c_location' name='c_location' defaultValue={c_location} className="input input-bordered w-full rounded-xl" />
                    </div>
                    {/* company website url */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='w_url'>
                            Company Wbsite URL

                        </label >
                        <input type='url' id='W_url' name='w_url' defaultValue={w_url} className="input input-bordered w-full rounded-xl" />
                    </div>
                    <hr className='w-full mt-2 bg-black' />
                    <div className='flex flex-col w-full'>
                        <label className='mb-2' htmlFor='overview'>
                            Overview
                        </label>
                        <textarea rows={8} id='overview' name='overview' defaultValue={
                            overview
                        } className="text-lg py-2 px-5  border border-gray-300 focus:border-primary focus:ring-primary rounded-xl" />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='mb-2'>Skills</label>
                        <div>
                            <div>
                                {skills?.map((item, index) => {
                                    return (
                                        <div key={item.key} className='flex items-center gap-3 mb-5'>
                                            <input
                                                className="input input-bordered w-full rounded-xl"
                                                type='text'
                                                {...register(`skills[${index}]`)}
                                                defaultValue={item}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='mb-2'>Responsibilities</label>
                        <div>
                            <div>
                                {responsibilities?.map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-3 mb-5'>
                                            <input
                                                className="input input-bordered w-full rounded-xl"
                                                type='text'
                                                {...register(`responsibilities[${index}]`)}
                                                defaultValue={item}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='mb-2'>Requirements</label>
                        <div>
                            <div>
                                {requirements?.map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-3 mb-5'>
                                            <input
                                                className="input input-bordered w-full rounded-xl"
                                                type='text'
                                                {...register(`requirements[${index}]`)}
                                                defaultValue={item}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>



                    <div className='flex justify-end items-center w-full mt-3'>
                        <button className='btn btn-outline btn-sm' type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CommonJobUpdate;