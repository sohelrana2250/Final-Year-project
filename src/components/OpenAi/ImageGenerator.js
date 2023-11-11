
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const ImageGenerator = () => {


    const [typesofApplication, setTypesofApplication] = useState();
    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {


        if (typesofApplication === "job_application") {
            const jobapplication = {
                date: data?.date,
                username: data?.username,
                address: data?.address,
                email: data?.email,
                numbers: data?.numbers,
                subject: data?.subject


            }

            console.log(jobapplication);
        }
        else if (typesofApplication === "professionalEmail") {
            const pro_application = {
                date: data?.date,
                username: data?.username,
                bus_email_from: data?.email_from,
                bus_to_email: data?.to_email,
                email_subject: data?.email_subject


            }
            console.log(pro_application);
        }
        else {

            const buss_application = {
                date: data?.date,
                username: data?.username,
                bus_email_from: data?.bus_email_from,
                bus_to_email: data?.bus_to_email,
                business_cc: data?.business_cc,
                email_subject: data?.bus_email_subject


            }
            console.log(buss_application);
        }
        reset()

    }


    return (
        <>

            <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl m-3'>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="date" id="date"  {...register("date")} defaultValue={new Date().toString().slice(0, 18)} readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            {errors.date && <p role="alert">{errors?.date?.message}</p>}
                            <label for="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apply Date</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="username" id="username"  {...register("username")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            {errors.username && <p role="alert">{errors?.username?.message}</p>}
                            <label for="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                    </div>

                    <div className='relative z-0 w-full mb-6 group'>
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-black">Identification</h3>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="job_application" name="list-radio"
                                        onClick={(e) => setTypesofApplication(e.target.value)}
                                        className="w-4 h-4 text-blue-600 
                                    bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Application </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="horizontal-list-radio-id" type="radio" value="professionalEmail"
                                        onClick={(e) => setTypesofApplication(e.target.value)}
                                        name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Professional Email</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="horizontal-list-radio-millitary" type="radio" value="businessEmail" name="list-radio"
                                        onClick={(e) => setTypesofApplication(e.target.value)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Business Email</label>
                                </div>
                            </li>

                        </ul>

                    </div>

                    {
                        typesofApplication === "job_application" && <>


                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="address"  {...register("address")} id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.address && <p role="alert">{errors?.address?.message}</p>}

                                    <label for="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="email" id="email"  {...register("email")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.email && <p role="alert">{errors?.email?.message}</p>}
                                    <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                                </div>

                                {/* phone number  */}
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" maxLength={11}  {...register("numbers")} name="numbers" id="numbers" className="block py-2.5 px-0 w-full text-sm text-balck bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.numbers && <p role="alert">{errors?.numbers?.message}</p>}
                                    <label for="numbers" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                </div>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" maxLength={50}  {...register("subject")} name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-balck bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.subject && <p role="alert">{errors?.subject?.message}</p>}
                                <label for="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-balck duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Application Subject Name</label>
                            </div>
                        </>
                    }
                    {
                        typesofApplication === "professionalEmail" && <>



                            {/* email writting  */}

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="email_from" {...register("email_from")} id="email_from" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.email_form && <p role="alert">{errors?.email_form?.message}</p>}
                                    <label for="email_from" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email From</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="to_email" {...register("to_email")} id="to_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.to_email && <p role="alert">{errors?.to_email?.message}</p>}
                                    <label for="to_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">TO EMAIL</label>
                                </div>




                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" maxLength={50}  {...register("email_subject")} name="email_subject" id="email_subject" className="block py-2.5 px-0 w-full text-sm text-balck bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.email_subject && <p role="alert">{errors?.email_subject?.message}</p>}
                                <label for="email_subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-balck duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Subject Name</label>
                            </div>

                        </>
                    }

                    {/* business Email */}
                    {
                        typesofApplication === "businessEmail" && <>


                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="bus_email_from" {...register("bus_email_from")} id="bus_email_from" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.bus_email_from && <p role="alert">{errors?.bus_email_from?.message}</p>}
                                    <label for="bus_email_from" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business Email From</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="bus_to_email" {...register("bus_to_email")} id="bus_to_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                    {errors.bus_to_email && <p role="alert">{errors?.bus_to_email?.message}</p>}
                                    <label for="bus_to_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business-To  Email </label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="business_cc" {...register("business_cc")} id="business_cc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    {errors.business_cc && <p role="alert">{errors?.business_cc?.message}</p>}
                                    <label for="business_cc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business-CC </label>
                                </div>




                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" maxLength={50} {...register("bus_email_subject")} name="bus_email_subject" id="bus_email_subject" className="block py-2.5 px-0 w-full text-sm text-balck bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                {errors.bus_email_subject && <p role="alert">{errors?.bus_email_subject?.message}</p>}
                                <label for="bus_email_subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-balck duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business Email Subject Name</label>
                            </div>

                        </>
                    }


                    <div className='flex justify-end items-center w-full mt-3'>



                        <button className='btn btn-outline btn-sm' type='submit'>
                            Generate
                        </button>




                    </div>


                </form>




            </div>



        </>
    );
};

export default ImageGenerator;