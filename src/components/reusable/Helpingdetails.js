import React from 'react';
import AdvCarousel from '../../layout/main/AdvCarousel';
import { FaHandPointRight } from "react-icons/fa";
const Helpingdetails = () => {

    const helpingArray = [
        {
            id: 1,
            title: 'How to Post Content Base Job',
            imageUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221209160721/Steps-in-the-Process-of-Posting-a-Job.png',
            discriptions: [
                { id: 1, roles: 'Create a Portfolio' },
                { id: 2, roles: 'Begin Generating Social Proof' },
                { id: 3, roles: ' Establish Authority by Blogging' },
                { id: 4, roles: 'Develop a Pitch' },
                { id: 5, roles: 'Start on Websites for Freelancers' },
                { id: 6, roles: 'Create Your Linkedin Profile' },
                { id: 7, roles: 'Apply to Firms That Have Openings' },
                { id: 8, roles: 'Create a Portfolio' },
            ]
        },
        {
            id: 2,
            title: 'How to Post Non Orginazition Job',
            imageUrl: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/10/22122420/non-profit-2.png',
            discriptions: [
                { id: 1, roles: 'Create a Portfolio' },
                { id: 2, roles: 'Begin Generating Social Proof' },
                { id: 3, roles: ' Establish Authority by Blogging' },
                { id: 4, roles: 'Develop a Pitch' },
                { id: 5, roles: 'Start on Websites for Freelancers' },
                { id: 6, roles: 'Create Your Linkedin Profile' },
                { id: 7, roles: 'Apply to Firms That Have Openings' },
                { id: 8, roles: 'Create a Portfolio' },
            ]
        },
        {
            id: 3,
            title: 'How to Post Orginazition Job',
            imageUrl: 'https://www.apollotechnical.com/wp-content/uploads/2020/08/writing-a-job-positing-1024x555.png',
            discriptions: [
                { id: 1, roles: 'Create a Portfolio' },
                { id: 2, roles: 'Begin Generating Social Proof' },
                { id: 3, roles: ' Establish Authority by Blogging' },
                { id: 4, roles: 'Develop a Pitch' },
                { id: 5, roles: 'Start on Websites for Freelancers' },
                { id: 6, roles: 'Create Your Linkedin Profile' },
                { id: 7, roles: 'Apply to Firms That Have Openings' },
                { id: 8, roles: 'Create a Portfolio' },
            ]
        },
        {
            id: 4,
            title: 'How to Post Orginazition Job',
            imageUrl: 'https://www.apollotechnical.com/wp-content/uploads/2020/08/writing-a-job-positing-1024x555.png',
            discriptions: [
                { id: 1, roles: 'Create a Portfolio' },
                { id: 2, roles: 'Begin Generating Social Proof' },
                { id: 3, roles: ' Establish Authority by Blogging' },
                { id: 4, roles: 'Develop a Pitch' },
                { id: 5, roles: 'Start on Websites for Freelancers' },
                { id: 6, roles: 'Create Your Linkedin Profile' },
                { id: 7, roles: 'Apply to Firms That Have Openings' },
                { id: 8, roles: 'Create a Portfolio' },
            ]
        }
    ]


    return (
        <>

            <AdvCarousel></AdvCarousel>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-3'>
                {
                    helpingArray?.map((v, index) => <div key={index + 1} className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border mt-8">
                        <div className="relative h-full w-full overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                                src={v.imageUrl}
                                alt="img-blur-shadow"
                                layout="fill"
                            />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {v.title}
                            </h5>

                            {
                                v?.discriptions?.map((v) => <li key={v.id} className="flex space-x-3">
                                    <FaHandPointRight className='text-xl' />
                                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{v.roles}</span>
                                </li>)
                            }

                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                Read More
                            </button>
                        </div>

                    </div>)
                }
            </div>


        </>
    );
};

export default Helpingdetails;