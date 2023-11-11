import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useContent_base_jobpostMutation, useGetcandidateInfoQuery } from '../../features/api/apiDevicesSlice';
import { toast } from "react-hot-toast";
import AdvCarousel from '../../layout/main/AdvCarousel';

const VedioContent = () => {



    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const { user: { email } } = useSelector((state) => state.auth);
    const { data, error } = useGetcandidateInfoQuery(email, { refetchOnMountOrArgChange: true });
    const { firstName, lastName, city, gender, postcode, address, cvurl, country } = data?.data || {};
    const [job_post, { isSuccess, data: serverResponed, error: serverError }] = useContent_base_jobpostMutation();
    const handel_contentbase_jobpost = (event) => {

        const element = event.target;
        const floating_first_name = element.floating_first_name.value;
        const floating_last_name = element.floating_last_name.value;
        const floating_first_city = element.floating_first_city.value;
        const floating_gender = element.floating_gender.value;
        const floating_country = element.floating_country.value;
        const floating_Postal_Code = parseInt(element.floating_Postal_Code.value);
        const floating_Address = element.floating_Address.value;
        const floating_cv_url = element.floating_cv_url.value;
        const floating_tittle = element.floating_tittle.value;
        const job_catagories = element.job_catagories.value;

        const floating_content_url = element.floating_content_url.value;
        const discription = element.discription.value;

        // if (floating_content_url.match(regExp)) {
        //     console.log('match')
        // }
        // else {
        //     console.log('not match')
        // }



        const user_data = {
            floating_first_name,
            floating_last_name,
            floating_first_city,
            floating_gender,
            floating_country,
            floating_Postal_Code,
            floating_Address,
            floating_cv_url,
            email,
            date: new Date().toString().slice(0, 16),
            job_catagories,
            constent_data: {
                floating_tittle,
                floating_content_url,
                discription
            }

        }

        console.log(user_data);

        // const data_validation = floating_content_url.match(regExp) && typeof (user_data) === "object" ? user_data : toast.success("Not Validate Url");

        if (floating_content_url.match(regExp) && typeof (user_data) === "object") {

            job_post(user_data);

        }
        else {
            toast.error("Not Validate Url");
        }


        // job_post(data_validation);

        //youtube video post code





        element.reset();
        event.preventDefault();
    }


    //console.log(isSuccess);
    //console.log(serverResponed);

    useEffect(() => {

        if (isSuccess && serverResponed.status) {
            toast.success("Successfuly-post-uploaded");
        }
        else {
            serverError && toast.error(serverError?.message);
        }


    }, [isSuccess, serverError, serverResponed]);

    //const accessToken = "44aa66638b857c2b0fce2d0bfa9aa6da";
    //const clientId = "77ccb3707aaf6e3c9c5e7b74ae74710ddd94592c";
    // const clientSecret = "Ii4LZEfVb86tLoJTn1xqE/Rw+5kUdfHRJupbA9irlsaxzQOcD3Rd2CICoymnyM/v+D4v8LOW9kslR99nI/Qfg4yMsxMKGokWY13uwaBzSRJpdU8RoQ6KqbBn6b1FV3Bb"

    //https://vimeo.com/manage/videos/837270728
    //https://vimeo.com/837275459
    /*const handelContentSubmit = async (event) => {

        const element = event.target;
        const email = element.email.value;
        // const videoFile = element.videoContent.files[0];
        const url = element.url.value;
        const tittle = element.tittle.value;
        const discription = element.discription.value;



        console.log({
            email, url, tittle, discription
        })

        element.reset();
        event.preventDefault();

        const formData = new FormData();
        formData.append('videoContent', videoFile);
 
        try {
            // Obtain an access token (optional if already authenticated as a user)
            if (!accessToken) {
                const response = await axios.post('https://api.vimeo.com/oauth/authorize/client', {
                    grant_type: 'client_credentials',
                    scope: 'public',
                    client_id: clientId,
                    client_secret: clientSecret
                });
                accessToken = response.data.access_token;
            }
 
            // Upload the video
            const uploadResponse = await axios.post('https://api.vimeo.com/me/videos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`
                },
                params: {
                    name: videoFile.name,
                    upload: {
                        approach: 'tus',
                        size: videoFile.size,
                        tittle:tittle,
                    }
                }
            });
 
            console.log('Video uploaded successfully. URI:', uploadResponse);
        } catch (error) {
            console.error('Failed to upload video:', error);
        }



    }*/








    return (
        <>


            <AdvCarousel></AdvCarousel>

            {
                error && toast.error(error.message)
            }


            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">video presentation </h1>
                        <p className="py-6">Research and select a reputable job portal that caters to your target audience and industry. Some popular job portals include LinkedIn, Indeed, Glassdoor, and Monster.</p>

                        <p className="py-6"><b>Create an Employer Account:</b> Sign up or log in to the job portal using your employer account. If you don't have one, create a new account by providing the required information.</p>

                        <p><b>Craft a Compelling Job Description:</b> Write a detailed and engaging job description that outlines the responsibilities, requirements, and qualifications for the position. Highlight the key skills and experience you're seeking in a candidate.</p>


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-slate-800">
                        <div className="card-body">

                            <form onSubmit={handel_contentbase_jobpost}>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_first_name" defaultValue={firstName} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_last_name" defaultValue={lastName} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_first_city" defaultValue={city} id="floating_first_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_first_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_gender" defaultValue={gender} id="floating_gender" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_country" defaultValue={country} id="floating_country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country Name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_Postal_Code" defaultValue={postcode} id="floating_Postal_Code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_Postal_Code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal Code</label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_Address" defaultValue={address} id="floating_Address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_Address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_cv_url" defaultValue={cvurl} id="floating_cv_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_cv_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CV-URL</label>
                                    </div>
                                </div>


                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_tittle" id="floating_tittle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_tittle" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content Tittle</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">


                                        <select name='job_catagories' id="job_catagories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                            <option disabled>Job Catagories</option>
                                            <option value="In123456">Internship</option>
                                            <option value="Fr123456">Fresher</option>
                                            <option value="SeE123456">Semi-Experience</option>
                                            <option value="Ex123456">Experience</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_content_url" id="floating_content_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_content_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content URL</label>

                                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                    <input name='videoContent' className="block w-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept=".mov,.mp4"
                                        required /> */}

                                </div>

                                <div className="relative z-0 w-full mb-6 group">

                                    <textarea name='discription' id="discription" maxLength={150} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Career Objective maximun 150 word" required ></textarea>
                                </div>





                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default VedioContent;