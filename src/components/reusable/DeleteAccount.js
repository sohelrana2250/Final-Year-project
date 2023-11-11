import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delete_account } from '../../features/auth/authSlice';
import Swal from 'sweetalert2';

const DeleteAccount = () => {

    const dispatch = useDispatch();
    const { user: { email } } = useSelector((state) => state.auth);
    const handelDeleteAccount = (event) => {
        event.preventDefault();
        const element = event.target;
        const currentPassword = element.currentPassword.value;
        console.log(currentPassword);

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(delete_account({ currentPassword }));
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })




    }
    return (
        <>


            <section className=" bg-[url('https://shorturl.at/mpqI1')] bg-gray-700 bg-blend-multiply ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Delete My Account , (Firebase)</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <a target="_blank" rel="noreferrer" href="https://gist.github.com/katowulf/da4e3d461e19a4795d6c43ac59dc5d08" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our app
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8">

                            <form onSubmit={handelDeleteAccount} className="w-full max-w-md mx-auto">
                                <label for="default-email" htmlFor="" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="email" name="email" defaultValue={email} id="default-email" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email here..." required />


                                    <input type="password" name="currentPassword" id="default-email" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your current Password here..." required />

                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">DELETE ACCOUNT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <img className='w-full' src="https://shorturl.at/ejps1" alt="" />
            </div>






        </>
    );
};

export default DeleteAccount;