import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineSend } from "react-icons/ai"
import { useCompalin_DetailsMutation } from '../../features/api/apiSlice';
import Swal from 'sweetalert2';

const CommonContract = ({ information }) => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const [postComplain, { data: serverRespome, isSuccess, error }] = useCompalin_DetailsMutation();
    const onSubmit = (data) => {

        const email = information?.email;
        const formInfo = {
            ...data,
            typeofCondition: information?.role === process.env.REACT_APP_CANDIDATE_USER ? "CanToEmp" : "EmpToCan"

        };

        postComplain({ email, ...formInfo });
        reset();
    }

    useEffect(() => {
        if (isSuccess && serverRespome?.status && serverRespome?.data?.acknowledged) {

            Swal.fire('Successfully ', 'Complain Recorded');
        }
        else {
            error && Swal.fire('System Error ', error?.message);
        }

    }, [isSuccess, serverRespome, error]);




    return (
        <>


            <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl m-3'>

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

                    {
                        information?.role === process.env.REACT_APP_EMPLOYEER_USER && <>


                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="candidatename" id="candidatename"  {...register("candidatename")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        {errors.candidatename && <p role="alert">{errors?.candidatename?.message}</p>}
                                        <label for="candidatename" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Candidate Name</label>
                                    </div>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="candidateemail" name="candidateemail" id="candidateemail"  {...register("candidateemail")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.email && <p role="alert">{errors?.email?.message}</p>}
                                    <label for="candidateemail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Candidate Email Address</label>
                                </div>
                            </div>


                            <div className="relative z-0 w-full mb-6 group">

                                <label for="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Complain Details</label>
                                <textarea id="details" {...register("details")} rows="4" maxLength={150} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your complain details here...(Maximun Length 150 Word)"></textarea>
                                {errors.details && <p role="alert">{errors?.details?.message}</p>}
                            </div>
                        </>
                    }

                    {

                        information?.role === process.env.REACT_APP_CANDIDATE_USER && <>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="employeername" id="employeername"  {...register("employeername")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        {errors.employeername && <p role="alert">{errors?.employeername?.message}</p>}
                                        <label for="employeername" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employeer Name</label>
                                    </div>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="employeeremail" name="employeeremail" id="employeeremail"  {...register("employeeremail")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.employeeremail && <p role="alert">{errors?.employeeremail?.message}</p>}
                                    <label for="employeeremail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employeer  Email Address</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">

                                    <input type="text" name="companyName" id="companyName"  {...register("companyName")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.companyName && <p role="alert">{errors?.companyName?.message}</p>}
                                    <label for="companyName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">

                                    <input type="email" name="companyemail" id="companyemail"  {...register("companyemail")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.companyemail && <p role="alert">{errors?.companyemail?.message}</p>}
                                    <label for="companyemail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Email Address</label>
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="" id="c_location"  {...register("c_location")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.c_location && <p role="alert">{errors?.c_location?.message}</p>}
                                    <label for="c_location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Location</label>
                                </div>

                            </div>


                            <div className="relative z-0 w-full mb-6 group">

                                <label for="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Complain Details</label>
                                <textarea id="details" {...register("details")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your complain details here..."></textarea>
                                {errors.details && <p role="alert">{errors?.details?.message}</p>}
                            </div>

                        </>
                    }



                    <div className="flex justify-end">

                        <button className="btn btn-outline btn-sm"> <AiOutlineSend className="m-2 text-xl"></AiOutlineSend> Submit</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default CommonContract;