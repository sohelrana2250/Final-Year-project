import React from 'react';
import AdvCarousel from './AdvCarousel';
import './style.css';


const Services = () => {

    const arrayList = [
        {
            id: 1,
            serviceTitle: "Offlice Application Services",
            data: [
                { id: 1, isExist: true, data: "2 team members" },
                { id: 2, isExist: true, data: "20GB Cloud storage" },
                { id: 3, isExist: true, data: "Integration help" },
                { id: 4, isExist: true, data: "Sketch Files" },
                { id: 5, isExist: true, data: "Complete documentation" },
                { id: 6, isExist: false, data: "24×7 phone & email support" },
                { id: 7, isExist: false, data: "Comple Box Sysstem" },
                { id: 8, isExist: false, data: "Account Disable System" }
            ],

        },
        {
            id: 2,
            serviceTitle: "Candidate Account Services",
            data: [
                { id: 1, isExist: true, data: "2 team members" },
                { id: 2, isExist: true, data: "20GB Cloud storage" },
                { id: 3, isExist: true, data: "Integration help" },
                { id: 4, isExist: true, data: "Sketch Files" },
                { id: 5, isExist: true, data: "Complete documentation" },
                { id: 6, isExist: false, data: "24×7 phone & email support" },
                { id: 7, isExist: false, data: "Comple Box Sysstem" },
                { id: 8, isExist: false, data: "Account Disable System" }
            ],
        },
        {
            id: 3,
            serviceTitle: "Employeer Account Services",
            data: [
                { id: 1, isExist: true, data: "2 team members" },
                { id: 2, isExist: true, data: "20GB Cloud storage" },
                { id: 3, isExist: true, data: "Integration help" },
                { id: 4, isExist: true, data: "Sketch Files" },
                { id: 5, isExist: true, data: "Complete documentation" },
                { id: 6, isExist: false, data: "24×7 phone & email support" },
                { id: 7, isExist: false, data: "Comple Box Sysstem" },
                { id: 8, isExist: false, data: "Account Disable System" }
            ],
        }
    ]
    return (
        <>
            <AdvCarousel />

            <div className="flex justify-center items-center bg-[url('https://shorturl.at/cekIW')] bg-gray-600 bg-blend-multiply">
                <div className="partners-intro--thumb aos-init aos-animate bg-[url('https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/bg/partners-circle.png')" >
                    <div className="partners-intro--partners">
                        <div className="partners-intro--partners-item -pos-1">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-1.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-1.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-2">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-2.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-2.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-3">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-3.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-3.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-4">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-4.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-4.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-5">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-5.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-5.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-6">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-6.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-6.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-7">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-7.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-7.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-8">
                            <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-8.png" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-8.png" data-was-processed="true" />
                        </div>

                    </div>
                    <div className="partners-intro--logo">
                        <img className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/logo-vector.svg" alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/logo-vector.svg" data-was-processed="true" />
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen rounded-t-none border-t-neutral-900  bg-[url('https://shorturl.at/cekIW')] bg-gray-600 bg-blend-multiply">
                <div className="hero-content text-center text-white">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold">Hello User</h1>
                        <p className="py-2">We Have a Provided 3 types of Job services and Two Types of User Account Services And Our Appliction Working with Basically Orginaztion Base Job Portal, Our Target is Organization and Non Orgation Both service at a time provide ,And Also provide Content Base Job Services , User Can Uplode his Content /video Base Skills ,  Organization and Non Orgation Employeer can be Access his profile</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis architecto minus voluptatibus voluptas tempora reiciendis, accusamus soluta pariatur rem, voluptatem recusandae quasi nisi, exercitationem porro error! Consequatur, iure sint.</p>
                        <button className="btn btn-outline btn-sm btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-3' >

                {
                    arrayList?.map((v, index) => <div key={index} className="w-full max-w-lg p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-gray-600 bg-blend-multiply">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Our Service Details</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">0.00</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="space-y-5 my-7">

                            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{v?.serviceTitle}</h5>

                            {
                                v?.data?.map((v, index) => <>
                                    {
                                        v.isExist && <li key={index} className="flex space-x-3">
                                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{v.data}</span>
                                        </li>
                                    }

                                    {
                                        v.isExist === false && <li className="flex space-x-3 line-through decoration-gray-500">
                                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span className="text-base font-normal leading-tight text-gray-500">{v.data}</span>
                                        </li>
                                    }
                                </>)
                            }


                        </ul>
                        <div className='flex justify-end'>
                            <button type="button" className="btn btn-outline btn-sm text-white">Choose plan</button>
                        </div>
                    </div>)
                }





            </div>
        </>
    );
};

export default Services;