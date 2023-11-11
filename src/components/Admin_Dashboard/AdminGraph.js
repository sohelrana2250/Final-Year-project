import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, CartesianGrid, Legend, Bar } from 'recharts';
import { FcOrganization } from 'react-icons/fc';
import { BiBookContent } from 'react-icons/bi';
import { useGetjobsQuery } from '../../features/api/apiSlice';
import { useOrginazationJobsListQuery } from '../../features/api/apiCategoriSlice';
import { useContentDisplayQuery } from '../../features/api/apiDevicesSlice';


const AdminGraph = () => {
    const { data: non_orgJobs } = useGetjobsQuery(null, { refetchOnMountOrArgChange: true })
    const { data: orgJobs } = useOrginazationJobsListQuery(null, { refetchOnMountOrArgChange: true })
    const { data: content } = useContentDisplayQuery("", { refetchOnMountOrArgChange: true })


    return (
        <>
            <div className="m-1 w-full lg:w-full">
                <div className="container mx-auto">
                    <div className="grid gap-2 lg:grid-cols-3">
                        <div className="flex items-center px-8 py-6 bg-[#2e1065] rounded-md shadow-md">
                            <div className="p-3 bg-[#a686e0] rounded">
                                <button><FcOrganization className="text-white text-2xl"></FcOrganization></button>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-white">{non_orgJobs?.data?.length}</h4>
                                <div className="text-white">Non Organization  JOBS</div>
                            </div>
                        </div>
                        <div className="flex items-center px-8 py-6 bg-[#4a044e] rounded-md shadow-md">
                            <div className="p-3 bg-[#a686e0] rounded">
                                <button><FcOrganization className="text-white text-2xl"></FcOrganization></button>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-white">{orgJobs?.data?.length}</h4>
                                <div className="text-gray-500">Organization  JOBS</div>
                            </div>
                        </div>
                        <div className="flex items-center px-8 py-6 bg-[#fbbf24]  rounded-md shadow-md">
                            <div className="p-3 bg-[#7a33b4] rounded">
                                <button>< BiBookContent className="text-white text-2xl"></ BiBookContent></button>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">{content?.data?.length}</h4>
                                <div className="text-gray-500">Contents</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*grapgh chat started  Non Orginazition */}
            <div className=" mt-3">
                <div className="w-full flex items-center justify-center">
                    <ResponsiveContainer width="80%" height={400}>
                        <BarChart data={non_orgJobs?.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="experience" />
                            <YAxis />

                            <Tooltip />
                            <Legend />
                            <Bar dataKey="salaryRange" fill="#082f49" />
                            <Bar dataKey="position" fill="#082f49" />
                            <Bar dataKey="companyName" fill="#082f49" />
                            <Bar dataKey="c_email" fill="#082f49" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/*grapgh chat started   Orginazition */}
                <div className="w-full flex items-center justify-center">

                    <ResponsiveContainer width="80%" height={400}>


                        <LineChart
                            data={orgJobs?.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="experience" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="salaryRange" stroke="#8884d8" activeDot={{ r: 10 }} />
                            <Line type="monotone" dataKey="position" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="companyName" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="c_email" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                </div>

                {/*grapgh chat started  contentbase jobs */}
                <div className="w-full flex items-center justify-center">

                    <ResponsiveContainer width="80%" height={400}>
                        <BarChart data={content?.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="count" />
                            <YAxis />

                            <Tooltip />
                            <Legend />
                            <Bar dataKey="rating" fill="#082f49" />
                            <Bar dataKey="Avg_rating" fill="#082f49" />
                            <Bar dataKey="job_catagories" fill="#082f49" />
                            <Bar dataKey="email" fill="#082f49" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>





            </div>
        </>
    );
};

export default AdminGraph;