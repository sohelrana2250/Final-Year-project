import React, { useEffect, useState } from 'react';
import { useContentDisplayQuery, useRating_countMutation, useSpecific_contactMutation } from '../../features/api/apiDevicesSlice';
import ReactPlayer from 'react-player'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import "./style.module.css";
import { useContent_InterviewJobMutation } from '../../features/api/apiSlice';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';

const ContentDisplay = () => {

    const { user } = useSelector((state) => state.auth);
    const { email, role, displayName } = user;
    const dispatch = useDispatch();

    const [job_Catagories, setJobcatagorie] = useState("");

    const { data, isLoading, error } = useContentDisplayQuery(job_Catagories, { refetchOnMountOrArgChange: true });
    const [rating_store, { data: server_response, isSuccess, error: server_error }] = useRating_countMutation();
    const [contact_post, { data: contact_response, error: contact_error }] = useSpecific_contactMutation();
    const [interviewData, { data: interview_respone, isSuccess: interviewSuccess, error: interviewServerError }] = useContent_InterviewJobMutation();
    const [profileId, setProfileId] = useState("");






    //product rating count 

    const [productRating, setProductRating] = useState(0);
    const handleRatingChange = (event, productId, rating, ratingCount) => {
        const newRating = parseInt(event.target.value);

        // setProductRating({ ...productRating, [productId]: newRating });
        let sum = rating + newRating;
        let count = ratingCount + 5;
        let Avg_percent = ((sum / count) * 100).toFixed(2);
        const ratingData = { productId, sum, count, Avg_percent };
        rating_store(ratingData);

        setProductRating({ ...productRating, [productId]: newRating })

    };



    const handelContract = (event) => {
        const element = event.target;
        const contact_email = element.contact_email.value;
        const phone_number = element.phone_number.value;
        const contact_message = element.contact_message.value;

        const contact_data = {
            contact_id: uuid(),
            contact_email,
            phone_number,
            contact_message
        }

        contact_post({ id: profileId, ...contact_data });

        element.reset();
        event.preventDefault();

    }

    //console.log(data);
    //{status: 403, message: 'unauthorized-User'}

    //rating count server response activity 

    if (data?.status === 401 || data?.status === 403) {

        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }

    useEffect(() => {

        if (server_response?.data?.acknowledged && isSuccess) {
            toast.success("Rating-recorded");
        }
        else {
            server_error && toast.error(`Server-Error 404 ${server_error?.message}`)
        }

    }, [server_response, isSuccess, server_error]);


    useEffect(() => {
        if (contact_response?.status && contact_response?.data.acknowledged) {
            toast.success("Successfully-recorded");
        }
        else {
            contact_error && toast.error(`server-Error -->403 ${contact_error?.message}`)
        }


    }, [contact_response, contact_error]);

    //onlay employeer can be send Intervier call and server reply can be access 
    //server respone part 
    useEffect(() => {

        if (interviewSuccess && interview_respone?.status && interview_respone?.data?.acknowledged) {
            toast.success("Successfully Email Send ");

        }
        else if (interview_respone?.status === false) {
            toast.error(interview_respone?.message);

        }
        else {
            interviewServerError && toast.error(interviewServerError?.message);
        }
    }, [interviewSuccess, interview_respone, interviewServerError]);

    const handelInterviewCalled = (candidate_Id, candate_email) => {

        const I_data = { candidate_Id, name: displayName, candate_email, emp_email: email }
        interviewData(I_data);

    }

    return (
        <div>
            <br />
            {
                isLoading && <>

                    <div className="flex justify-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            }

            {
                error && toast.error(`Server-Error 401 -> ${error?.message}`)
            }
            <div>
                <div className="sm:hidden">
                    <label for="tabs" className="sr-only">Select your country</label>
                    <select onChange={(e) => setJobcatagorie(e.target.value)} id="tabs" name="selectedJob" className="border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5  bg-[#082f49] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="In123456">Internship</option>
                        <option value="Fr123456">Fresher</option>
                        <option value="SeE123456">Semi-Experience</option>
                        <option value="Ex123456">Experience</option>
                    </select>
                </div>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full">
                        <button onClick={() => setJobcatagorie("In123456")} className="inline-block w-full p-4 text-gray-900  rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none  bg-[#082f49] dark:text-white hover:bg-primary" aria-current="page">Internship</button>
                    </li>
                    <li className="w-full">
                        < button onClick={() => setJobcatagorie("Fr123456")} className="inline-block w-full p-4 text-gray-900   focus:ring-4 focus:ring-blue-300 active focus:outline-none  bg-[#082f49] dark:text-white hover:bg-primary">Fresher</button>
                    </li>
                    <li className="w-full">
                        <button onClick={() => setJobcatagorie("SeE123456")} className="inline-block w-full p-4 text-gray-900   focus:ring-4 focus:ring-blue-300 active focus:outline-none  bg-[#082f49] dark:text-white hover:bg-primary">Semi-Experience</button>
                    </li>
                    <li className="w-full">
                        <button onClick={() => setJobcatagorie("Ex123456")} className="inline-block w-full p-4 text-gray-900 rounded-r-lg   focus:ring-4 focus:ring-blue-300 active focus:outline-none  bg-[#082f49] dark:text-white hover:bg-primary">Experience</button>
                    </li>
                </ul>
            </div>



            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-3">

                {
                    data?.status && data?.data?.map((v, index) => <div key={index} className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure>

                            <ReactPlayer url={v?.constent_data?.floating_content_url}
                                width="100%"
                                height="350px"
                                controls
                            />
                        </figure>
                        <div className="card-body  dark:bg-[#082f49] dark:border-gray-700 hover:bg-[#042f2e]">

                            <h2 className="card-title text-white">{v?.constent_data?.floating_tittle}</h2>
                            <p className="mb-3 text-white">{v?.constent_data?.discription}  <time className="text-xs opacity-50">{v?.date}</time></p>


                            {
                                role === process.env.REACT_APP_EMPLOYEER_USER && <p className="text-white text-sm">
                                    Hello, my name is <b>{v?.floating_first_name}</b> and my Nick Name is  <b>{v?.floating_last_name
                                    }  </b>and I am  from <b>{v?.floating_first_city
                                    }</b>,{v?.floating_country
                                    }. My postal code is <b> {v?.floating_Postal_Code}</b>, and I currently reside in <b> {v?.floating_Address
                                    }</b> . I have attached my CV for your reference <a target="_blank" rel="noreferrer" href={v?.floating_cv_url} className="btn btn-outline btn-primary btn-xs">CV-URL</a>,
                                    which provides detailed information about my background, qualifications, and experiences.
                                </p>

                            }



                            <div className="card-actions justify-start">
                                <div className="flex items-center mt-4">
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                                    <div className="w-32 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-400 rounded" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{v?.Avg_rating} %</span>
                                </div>
                            </div>



                            {
                                role === process.env.REACT_APP_EMPLOYEER_USER && <div className="card-actions justify-end">



                                    <div className="flex items-center">

                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label key={value} className="rating-star">
                                                <input
                                                    type="radio"
                                                    value={value}
                                                    checked={productRating[v._id] === value}
                                                    onChange={(event) => handleRatingChange(event, v._id, v?.rating, v?.count)}
                                                    className="sr-only"
                                                />

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-6 w-6 mr-3 text-yellow-400 group-hover:text-yellow-600 ${productRating[v._id] >= value ? 'fill-current' : 'fill-none'
                                                        }`}
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 2L6 10h12L12 2z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 10l6 6 6-6"
                                                    />
                                                </svg>
                                            </label>
                                        ))}
                                    </div>


                                    <button onClick={() => handelInterviewCalled(v._id, v.email)} className="text-white btn btn-outline btn-sm">Interview-Call</button>

                                </div>
                            }
                            {
                                role === process.env.REACT_APP_CANDIDATE_USER && <div className="card-actions justify-end">

                                    <div className="card-actions justify-end mt-6 w-[75%]">
                                        <label onClick={() => setProfileId(v?._id)} htmlFor="my-modal-3" className="btn btn-outline btn-sm text-white">Contact</label>

                                    </div>


                                    <input type="checkbox" id="my-modal-3" className="modal-toggle " />
                                    <div className="modal">
                                        <div className="modal-box relative bg-slate-700">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-4">✕</label>

                                            <form onSubmit={handelContract} className="mb-6 mt-2">


                                                <div class="mb-6">
                                                    <input type="email" id="email"
                                                        name="contact_email" readOnly defaultValue={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                                                </div>
                                                <div className="mb-6">
                                                    <input type="number" id="subject" name="phone_number" maxLength="11" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
                                                </div>
                                                <div className="mb-6">

                                                    <textarea id="message" rows="4" name="contact_message" maxLength={150} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required ></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-outline btn-success btn-sm"> Message</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                    )
                }

            </div>





            {/* https://www.kapwing.com/videos/6493288db88a8706e2d5c2ca */}
            {/* <video width="100%" height="100%" controls>
                                <source src="https://www.google.com/url?q=https://drive.google.com/file/d/1fzi51Wh1EibvHnrNpjT0P8UCGO1_0rrK/view?usp%3Dshare_link&sa=D&source=editors&ust=1687434658297920&usg=AOvVaw1qKatc8rSZ5VcXTLsdS3Mr" type="video/mp4" />
                            </video> */}
            {/* https://www.youtube.com/watch?v=ysz5S6PUM-U */}

            {/* <a href="..">
                                <ReactPlayer
                                    url=" https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                    width="100%"
                                    height="50%"
                                    controls
                                />

                            </a> */}
            {/*  <div key={index} className="max-w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


<ReactPlayer url=" https://www.youtube.com/watch?v=ysz5S6PUM-U "
                                width="100%"
                                height="50%"
                                controls
                            />


                            <div className="p-5">
                                <a href="...">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v?.constent_data?.floating_tittle}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{v?.constent_data?.discription}  <time className="text-xs opacity-50">{v?.date}</time></p>



                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_first_name" defaultValue={v?.floating_first_name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_last_name" defaultValue={v?.floating_last_name
                                        } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_first_name" defaultValue={v?.floating_first_city
                                        } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 md:gap-6">


                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_last_name" defaultValue={v?.floating_gender
                                        } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_first_name" defaultValue={v?.floating_country
                                        } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country Name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_last_name" defaultValue={v?.floating_Postal_Code

                                        } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal-Code</label>
                                    </div>


                                </div>

                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" id="floating_first_name" defaultValue={v?.floating_Address
                                        } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">

                                        <a target="_blank" rel="noreferrer" className="btn btn-outline btn-primary btn-sm" href={v?.floating_cv_url}>CV-URL</a>

                                    </div>

                                </div>

                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <br /><br /><br /><br /><br /><br />
                                </div>
                            </div>


                        </div> */}











            {
                /*   data?.status && data?.data?.map((v, index) => <video key={index}
                       className="VideoInput_video"
                       width={frameSize.width}
                       height={frameSize.height}
                       controls
   
   
                   >
   
                       <source src={v.vedio} type="video/mp4" />
                   </video>)*/

            }
            {/* {source && (
                    <video
                        className="VideoInput_video"
                        width={frameSize.width}
                        height={frameSize.height}
                        controls
                        src={source}
                    />
                )} */}

        </div>
    );
};

export default ContentDisplay;