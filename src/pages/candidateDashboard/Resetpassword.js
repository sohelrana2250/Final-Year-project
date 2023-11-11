import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginImage from "../../assets/login.svg";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { reset_password } from '../../features/auth/authSlice';


const Resetpassword = () => {


    const { user } = useSelector((state) => state.auth);
    const { email, displayName } = user;
    const dispatch = useDispatch();
    const { handleSubmit, register, control } = useForm();
    const password = useWatch({ control, name: "password" });
    const confirmPassword = useWatch({ control, name: "confirmPassword" });
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const minNumberofChars = 6;
    const maxNumberofChars = 16;

    useEffect(() => {
        if (
            password !== undefined &&
            password !== "" &&
            confirmPassword !== undefined &&
            confirmPassword !== "" &&
            password === confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password, confirmPassword]);

    const onSubmit = (data) => {

        if (data?.password?.length <= minNumberofChars || data?.password?.length >= maxNumberofChars) {

            Swal.fire('Maximun 6 to 16 digit password accept', 'please Try Again');
        }
        if (!regularExpression.test(data?.confirmPassword)) {
            Swal.fire('Strong Password Accepted', 'please Try Again');
        }
        else {
            console.log(data);
            dispatch(reset_password({ currentPassword: data?.currentPassword, newPassword: data?.confirmPassword }))

        }



    }

    return (
        <>
            <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>
                <div className=''>
                    <img src={loginImage} className='h-full w-full' alt='' />
                </div>

                <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-10'>
                    <h1 className=' mb-10   text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ml-2 hover:bg-gray-900'>RESET PASSWORD</h1>
                    <form className=' w-2/3 ' onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-3'>

                            <div className='flex flex-col items-start'>
                                <label htmlFor='username' className='ml-5'>
                                    User-Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='username'
                                    defaultValue={displayName}
                                    {...register("name")}
                                    className="input input-bordered rounded-xl w-full  max-w-xl"
                                />
                            </div>


                            <div className='flex flex-col items-start'>
                                <label htmlFor='email' className='ml-5'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    defaultValue={email}
                                    {...register("email")}
                                    className="input input-bordered rounded-xl w-full  max-w-xl"
                                />
                            </div>

                            {/* currentPassword starting  */}
                            <div className='flex flex-col items-start'>
                                <label htmlFor='currentPassword' className='ml-5'>
                                    Current Password
                                </label>
                                <input
                                    type='password'
                                    name='currentPassword'
                                    id='currentPassword'
                                    {...register("currentPassword")}
                                    className="input input-bordered rounded-xl w-full  max-w-xl"
                                />
                            </div>

                            {/* currentPassword Ending  */}




                            <div className='flex flex-col items-start'>
                                <label htmlFor='password' className='ml-5'>
                                    New  Password
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    {...register("password")}
                                    className="input input-bordered rounded-xl w-full  max-w-xl"
                                />
                            </div>
                            <div className='flex flex-col items-start'>
                                <label htmlFor='confirm-password' className='ml-5'>
                                    Confirm New  Password
                                </label>
                                <input
                                    type='password'
                                    id='confirm-password'
                                    {...register("confirmPassword")}
                                    className="input input-bordered rounded-xl w-full  max-w-xl"
                                />
                            </div>
                            <div className='!mt-8 '>
                                <button
                                    type='submit'
                                    className='font-bold text-white py-3 rounded-xl bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                                    disabled={disabled}
                                >
                                    RESET PASSWORD
                                </button>
                            </div>
                            <div>
                                <p>
                                    Already have an account?{" "}
                                    <span
                                        className='text-primary hover:underline cursor-pointer'

                                        onClick={() => navigate("/login")} >
                                        Login
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Resetpassword;