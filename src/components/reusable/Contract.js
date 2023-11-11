import React, { useState } from 'react';
import AdvCarousel from '../../layout/main/AdvCarousel';
import CommonContract from './CommonContract';
import { useSelector } from 'react-redux';
import ChangeAuthority from './ChangeAuthority';
import ChangeEmpauthority from './ChangeEmpauthority';
import SystemComplain from './SystemComplain';

const Contract = () => {

    const { user } = useSelector((state) => state.auth);
    // email, role, photoURL, createdAt, lastLoginAt
    const information = {
        email: user?.email,
        role: user?.role,
        photo: user?.photoURL,
        date: new Date().toString(),
        name: user?.displayName,

    }

    const accordionItems = [
        {
            title: ` ${user?.role.toUpperCase()} Complaint Section`,
            content: <CommonContract information={information} ></CommonContract>,
        },


        {
            title: 'System Complaint Section',
            content: <SystemComplain information={information} />,
        }
        ,
        {
            title: "Application FOR Change Authority ( Candidate To Employeer )",
            content: <ChangeAuthority information={information} />

        },
        {
            title: "Application FOR Change Authority (Employeer To Candidate)",
            content: <ChangeEmpauthority information={information} />

        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    };

    return (
        <>
            <AdvCarousel></AdvCarousel>

            <div className="bg-gray-100  p-4">
                <h1 className="text-2xl font-semibold mb-4">Complaint box </h1>
                <div className="max-w-full mx-auto mt-8">
                    {accordionItems.map((item, index) => (
                        <div key={index} className="border rounded-md my-2">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full text-left py-2 px-4 font-semibold ${activeIndex === index
                                    ? 'bg-[#082f49] text-white'
                                    : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {item.title}
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-gray-100">{item.content}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>




        </>
    );
};

export default Contract;