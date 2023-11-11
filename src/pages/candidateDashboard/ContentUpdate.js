import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSpecific_ContentupdateQuery, usePut_specific_contentUpdateMutation } from '../../features/api/apiDevicesSlice';
import ReactPlayer from 'react-player';
import { toast } from 'react-hot-toast';

const ContentUpdate = () => {

    const { id } = useParams();
    const { data } = useGetSpecific_ContentupdateQuery(id, { refetchOnMountOrArgChange: true })
    const [updatePost, { data: serverRespone, isSuccess, error }] = usePut_specific_contentUpdateMutation();
    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const { floating_first_name, floating_last_name, floating_first_city, floating_gender,
        floating_country, floating_Postal_Code, floating_Address, job_catagories, date, constent_data

    } = (data?.status && data?.data) || {};

    const internship = "In123456";
    const fresher = "Fr123456";
    const semiExperience = "SeE123456";
    const experience = "Ex123456";
    const selectedCatagories = job_catagories === internship ? "Internship" : job_catagories === fresher ? "Fresher" : job_catagories === semiExperience ? "Semi-Experience" : job_catagories === experience ? "Experience" : "poor coooding issues";



    const handelUpdatesubmit = (event) => {

        const element = event.target;

        const floating_first_name = element.floating_first_name.value;
        const floating_last_name = element.floating_last_name.value;
        const floating_first_city = element.floating_first_city.value;
        const floating_gender = element.floating_gender.value;
        const floating_country = element.floating_country.value;
        const floating_Postal_Code = parseInt(element.floating_Postal_Code.value);
        const floating_Address = element.floating_Address.value;
        const floating_tittle = element.floating_tittle.value;
        const job_catagories = element.job_catagories.value;
        const floating_content_url = element.floating_content_url.value;
        const discription = element.discription.value;

        const updateData = {
            floating_first_name,
            floating_last_name,
            floating_first_city,
            floating_gender,
            floating_country,
            floating_Postal_Code,
            floating_Address,
            date: new Date().toString().slice(0, 16),
            job_catagories,
            constent_data: {
                floating_tittle,
                floating_content_url,
                discription
            }
        }

        const checked = floating_content_url.match(regExp) && typeof (updateData) === "object" ? updateData : toast.success("Not Validate Url");
        updatePost({ id, ...checked });
        event.preventDefault();

    }

    useEffect(() => {

        if (serverRespone?.data.acknowledged && isSuccess) {
            toast.success("Successdully-Modifyed");

        }
        else {
            error && toast.error(`Server-Error -401 ${error?.message}`);
        }

    }, [serverRespone, isSuccess, error]);


    return (
        <>
            <br />
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure>

                    <ReactPlayer url={constent_data?.floating_content_url}
                        width="100%"
                        height="350px"
                        controls
                    />
                </figure>
                <div className="card-body bg-white border border-gray-200  shadow dark:bg-[#082f49] dark:border-gray-700 hover:bg-[#042f2e]">



                    <form onSubmit={handelUpdatesubmit} >



                        <div className="grid md:grid-cols-3 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" defaultValue={constent_data?.floating_tittle
                                } name="floating_tittle" id=" floating_tittle" className="card-title  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_tittle" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Tittle</label>
                            </div>


                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_content_url" defaultValue={constent_data?.floating_content_url
                                } id="floating_content_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_content_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content URL</label>


                            </div>

                            <div className="relative z-0 w-full mb-6 group">

                                <time className="text-xs text-white flex justify-end">{date}</time>
                            </div>

                        </div>

                        <div className="relative z-0 w-full mb-6 group">

                            <textarea name='discription' defaultValue={constent_data?.discription
                            } id="discription" maxLength={150} rows="2" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#082f49] dark:border-gray-700 hover:bg-[#042f2e] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Career Objective maximun 150 word" required ></textarea>
                        </div>

                        <div className="grid md:grid-cols-3 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" id="floating_first_name" defaultValue={floating_first_name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" id="floating_last_name" defaultValue={floating_last_name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_city" id="floating_first_city" defaultValue={floating_first_city} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_first_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 md:gap-6">


                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_gender" id="floating_gender" defaultValue={floating_gender} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_country" id="floating_country" defaultValue={floating_country} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_Postal_Code" id="floating_Postal_Code " defaultValue={floating_Postal_Code} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_Postal_Code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal-Code</label>
                            </div>


                        </div>

                        <div className="grid md:grid-cols-3 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_Address" id="floating_Address" defaultValue={floating_Address} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_Address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">


                                <select name='job_catagories' id="job_catagories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                    <option disabled>Your Selected Job Catagories {selectedCatagories}</option>
                                    <option value="In123456">Internship</option>
                                    <option value="Fr123456">Fresher</option>
                                    <option value="SeE123456">Semi-Experience</option>
                                    <option value="Ex123456">Experience</option>
                                </select>

                            </div>

                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-sm">update</button>
                        </div>
                    </form>




                </div>

            </div>

        </>
    );
};

export default ContentUpdate;