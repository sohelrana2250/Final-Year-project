import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineSend } from "react-icons/ai";
import { useCompalin_DetailsMutation } from '../../features/api/apiSlice';
import Swal from 'sweetalert2';


const ChangeAuthority = ({ information }) => {
    const [postComplain, { data: serverRespone, isSuccess, error }] = useCompalin_DetailsMutation();
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {


        const email = information?.email;
        const formInfo = {
            ...data,
            typeofCondition: "CandidateToEmployee",
        };

        postComplain({ email, ...formInfo });
        reset();

    }

    useEffect(() => {
        if (isSuccess && serverRespone?.status && serverRespone?.data?.acknowledged) {

            Swal.fire('Successfully ', 'Complain Recorded');
        }
        else {
            error && Swal.fire('System Error ', error?.message);
        }

    }, [isSuccess, serverRespone, error]);
    return (
        <>
            {
                information?.role === process.env.REACT_APP_CANDIDATE_USER ? <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl m-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid md:grid-cols-3 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="date" id="date"  {...register("date")} defaultValue={information?.date} readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.date && <p role="alert">{errors?.date?.message}</p>}
                                <label for="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apply Date</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="email" id="email" readOnly defaultValue={information?.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.email && <p role="alert">{errors?.email?.message}</p>}
                                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="username" id="username"  {...register("username")} defaultValue={information?.name} readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.user && <p role="alert">{errors?.user?.message}</p>}
                                <label for="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="companyName" id="companyName"  {...register("companyName")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.companyName && <p role="alert">{errors?.companyName?.message}</p>}
                                <label for="companyName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name </label>

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="companyaddress" id="companyaddress"  {...register("companyaddress")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.companyaddress && <p role="alert">{errors?.companyaddress?.message}</p>}
                                <label for="companyaddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Location </label>

                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="c_registerNumber" id="c_registerNumber"  {...register("c_registerNumber")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.c_registerNumber && <p role="alert">{errors?.c_registerNumber?.message}</p>}
                                <label for="c_registerNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Registration Number</label>

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="certificate" id="companyaddress"  {...register("certificate")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Only Google Drive URL Accepted" required />
                                {errors.certificate && <p role="alert">{errors?.certificate?.message}</p>}
                                <label for="certificate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Registration Certificate URL</label>

                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">

                                <input type="email" name="companyemail" id="companyemail"  {...register("companyemail")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.companyemail && <p role="alert">{errors?.companyemail?.message}</p>}
                                <label for="companyemail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Email Address</label>
                            </div>
                        </div>

                        <div className="flex justify-end">

                            <button className="btn btn-outline btn-xl"> <AiOutlineSend className="m-2 text-xl"></AiOutlineSend> Submit Authoeity Information</button>
                        </div>
                    </form>

                </div> : "Only Candidate Account Holder can be Acess "
            }

        </>
    );
};

export default ChangeAuthority;