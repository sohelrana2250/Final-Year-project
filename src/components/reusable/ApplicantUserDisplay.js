import React, { useEffect } from 'react';
import { useInterviewCalledMutation } from '../../features/api/apiDevicesSlice';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';

const ApplicantUserDisplay = ({ isLoading, applicantUser, job_Dtails, org_catagories }) => {

    const [InterviewCall, { data: sendMessage, isSuccess, error }] = useInterviewCalledMutation();
    const { position,
        location,
        I_date,
        c_email,

        c_location,

        experience,
        email: employeer_email,
        employmentType, companyName, _id
    } = job_Dtails?.data || {};
    const dispatch = useDispatch();

    if (applicantUser?.status === 401 || applicantUser?.status === 403) {

        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }

    const handelInterviewCall = (firstname, lastname, userid, email) => {


        const emailBody = `Dear ${firstname} - ${lastname}, We are excited to invite you for an interview for the position of ${position} at ${companyName}. Our company is currently looking for a ${employmentType} employee with  ${experience} of experience to join our team. The working  environment  is ${location}, 
        \n
        The interview will take place on ${new Date(I_date).toString()}, at a time that is convenient for you.We look forward to hearing from you soon and discussing this exciting opportunity further.
        Sincerely, 
        ${employeer_email} 
       ${companyName} ,
       \n Company Location ${c_location}  \n Company Email : ${c_email}`

        const emailSend = { userId: userid, email, JobId: _id, email_body: emailBody.trim(), companyName, org_catagories, employeer_email }

        InterviewCall(emailSend);
    }

    // && sendMessage?.data?.acknowledged && !sendMessage?.email_send?.mail_message

    useEffect(() => {

        if (sendMessage?.status && isSuccess && sendMessage?.data?.data?.acknowledged && !sendMessage?.email_send?.mail_message) {
            toast.success('Successfully-Interview-Email Send');
        }
        else if (sendMessage?.status === false) {
            toast.error(sendMessage?.message);
        }


        else {
            error && toast.error(error?.message)
        }

    }, [sendMessage, isSuccess, error]);


    return (
        <>

            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }

            <br /><br />

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-1">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Firts Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last  Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                post Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CV-URL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Interview Call
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applicantUser?.status && applicantUser?.data?.map((v, index) => <tr className="bg-white text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#643264]">




                                <td className="px-6 py-4">
                                    {v?.firstName}
                                </td>
                                <td className="px-6 py-4">
                                    {v?.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {v?.email}
                                </td>
                                <td class="px-6 py-4">
                                    {v?.gender}
                                </td>
                                <td className="px-6 py-4">
                                    {v?.country}
                                </td >
                                <td className="px-6 py-4">
                                    {v?.address}
                                </td>
                                <td className="px-6 py-4">
                                    {v?.city}
                                </td>
                                <td className="px-6 py-4">
                                    {v?.postcode}
                                </td>
                                <td className="px-6 py-4">
                                    <a target='_blank' rel='noreferrer' className="btn btn-outline btn-primary btn-sm" href={v?.cvurl ? v?.cvurl : 'none'}>cv</a>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="btn btn-outline btn-primary btn-sm" onClick={() => handelInterviewCall(v?.firstName, v?.lastName, v?._id, v?.email)} >Interview</button>
                                </td>

                            </tr>)

                        }

                    </tbody>
                </table>
            </div>





            {/* {
                applicantUser?.status && applicantUser?.data?.map((v, index) => <div key={index} className='hero'>
                    <h1>Applicants-User-Info</h1>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card w-[50rem] glass m-5">
                            <figure><img className='w-50 h-25' src={metting} alt="car!" /></figure>
                            <div className="card-body ">

                                <div className="grid grid-cols-4 lg:grid-cols-12 gap-4">
                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">First-Name : </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.firstName
                                    }</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">Last-Name : </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.lastName}</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">Email: </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.email}</div>


                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">Gender : </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.gender}</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">Country : </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.country}</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">Address : </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.address}</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">City:  </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.city}</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">Post-Code </div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold">{v?.postcode}</div>

                                    <div className="col-span-1 lg:col-span-3 text-lg text-orange-700 font-bold">CV-URL</div>
                                    <div className="col-span-1 lg:col-span-3 text-lg font-bold"><a target='_blank' rel='noreferrer' className="btn btn-outline btn-primary btn-sm" href={v?.cvurl ? v?.cvurl : 'none'}>CV-Link</a></div>




                                </div>

                             
                                <div className="card-actions flex justify-between">
                                    <button className="btn btn-primary text-xl" onClick={() => navigate('/dashboard/catagories-applicants')}><FaRegHandPointLeft></FaRegHandPointLeft></button>
                                    <button className="btn btn-primary" >Interview-Call</button>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>)
            } */}

        </>
    );
};

export default ApplicantUserDisplay;