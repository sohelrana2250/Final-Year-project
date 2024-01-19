import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useJobCategoriesMutation } from '../../features/api/apiCategoriSlice';
import { toast } from 'react-hot-toast';
import AdvCarousel from '../../layout/main/AdvCarousel';

const CategorieAdd = () => {

    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const imageHostKey = 'ac41dad16cfd8c0e58eddebc45ecdd20';
    const [jobCategories, { data, isSuccess, error }] = useJobCategoriesMutation();
    const date = new Date();
    const { user: { email } } = useSelector((state) => state.auth);
    const companyEmployeer = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];
    const resentPosition = ["Profitable", "None Profitable", "well established"]

    const onSubmit = (data) => {


        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then((res) => res.json()).then((imgData) => {

            //console.log(imgData);
            if (imgData.success) {

                // console.log(imgData.data.url);
                data.photo = imgData.data.url


                //imgData.data?.success return true if link create
                jobCategories({ ...data, email, postDate: date.toString().slice(0, 16) })
                reset();
            }
        }).catch((error) => {
            toast.error(error?.message)
        })



    };
    useEffect(() => {

        if (isSuccess && data?.status && data?.data?.acknowledged) {

            toast.success("Successfully posted");
        }
        else if (data?.status === false) {
            toast?.error(data?.message)
        }
        else {

            error && toast.error(error?.message)
        }


    }, [data, isSuccess, error]);

    return (
        <>
            <AdvCarousel />

            <div className='flex justify-center items-center overflow-auto p-10'>
                <form
                    className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-full justify-between'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className='w-full text-2xl text-primary mb-5'>
                        Add a Job Catagories
                    </h1>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='position'>
                            Company Resent Position
                        </label>
                        <select {...register("position")} id='position' className="select select-secondary w-full max-w-xs rounded-lg" required>

                            <option disabled selected>Position</option>
                            {resentPosition
                                .sort((a, b) => a.localeCompare(b))
                                .map((position) => (
                                    <option value={position}>{position}</option>
                                ))}
                        </select>
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='companyName'>
                            Company Name
                        </label>
                        <input
                            className='input input-bordered w-full rounded-lg'
                            type='text'
                            id='companyName'
                            {...register("companyName")}
                            required
                        />
                    </div>
                    <div className='flex flex-col w-full max-w-xs '>
                        <label className='mb-2' htmlFor='Categories-Name'>
                            Job-Catagories
                        </label>
                        {/* <input
                        className='cursor-not-allowed'
                        type='text'
                        id='job-Catagories'
                        {...register("catagories")}
                    /> */}

                        <select id='job-Catagories' {...register("catagories")} className="rounded-lg select select-secondary w-full max-w-xs" required>
                            <option disabled selected>Job-Catagories</option>
                            <option>Experiences</option>
                            <option>Fresher</option>
                            <option>Semi-Experiences</option>
                            <option>Internship</option>
                        </select>
                    </div>

                    {/* company employeer */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' for='companysize'>
                            Company Size
                        </label>
                        <select {...register("companysize")} id='companysize' className="block w-full h-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" required>
                            {companyEmployeer
                                .sort((a, b) => a.localeCompare(b))
                                .map((category) => (
                                    <option value={category}>{category}</option>
                                ))}
                        </select>
                    </div>

                    {/* image input-section */}

                    <div className="flex flex-col w-full max-w-xs">

                        <label className='mb-2' htmlFor='location'>
                            Image
                        </label>
                        {/* <input type='file' name='photo' {...register('photo', { required: "photo is required" })} className="input input-bordered w-full max-w-xl" /> */}
                        <input type='file' name='photo' {...register('photo', { required: "photo is required" })} className="block w-full h-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" required />
                        {errors.photo && <p role="alert">{errors.photo?.message}</p>}
                    </div>
                    {/* company founded date */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='foundeddate'>
                            Foudended Date
                        </label>
                        <input type='date' id='foundeddate' {...register("foundeddate")} className='input input-bordered w-full rounded-lg' required />
                    </div>
                    {/* company Email Address */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='c_email'>
                            Company Email Address
                        </label>
                        <input type='email' id='c_email' {...register("c_email")} className='rounded-lg input input-bordered w-full' required />
                    </div>

                    {/* company Location */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='c_location'>
                            Company Location
                        </label>
                        <input type='text' id='c_location' {...register("c_location")} className=' rounded-lg input input-bordered w-full' required />
                    </div>

                    {/* Web Site Url */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='w_url'>
                            Company Website URL
                        </label>
                        <input type='url' id='w_url' {...register("w_url")} className='rounded-lg input input-bordered w-full' required />
                    </div>

                    <hr className='w-full mt-2 bg-black' />
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

export default CategorieAdd;