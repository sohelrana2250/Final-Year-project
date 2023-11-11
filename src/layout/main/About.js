import React from 'react';
import AdvCarousel from './AdvCarousel';

const About = () => {

    const aboutSection = [{
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        title: "Efficient Collaborating",
        discription: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
        name: "Bonnie Green",
        position: "Developer at Open AI"

    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        title: "Efficient Collaborating",
        discription: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
        name: "Bonnie Green",
        position: "Developer at Open AI"

    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        title: "Efficient Collaborating",
        discription: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
        name: "Bonnie Green",
        position: "Developer at Open AI"

    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        title: "Efficient Collaborating",
        discription: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
        name: "Bonnie Green",
        position: "Developer at Open AI"

    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        title: "Efficient Collaborating",
        discription: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
        name: "Bonnie Green",
        position: "Developer at Open AI"

    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        title: "Efficient Collaborating",
        discription: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
        name: "Bonnie Green",
        position: "Developer at Open AI"

    }
    ]
    return (
        <>


            <AdvCarousel />

            <div className="hero min-h-screen bg-[url('https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg')] rounded" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Leading the way to a brighter future. Connecting talent with opportunity. Your partner in workforce excellence. Bridging the gap to your dream career</p>
                        <button className=" btn btn-outline  btn-sm text-white">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Information Section */}

            <div className="relative z-0 w-full  group">


                <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ml-2 hover:bg-gray-900">The Founder Information /And  Developer Information </h1>
            </div>
            <div className="grid mb-8 border border-gray-200  shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                {
                    aboutSection?.map((v, index) => <figure key={index + 1} className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-l-none rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r bg-gray-600 bg-blend-multiply">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{v?.title}</h3>
                            <p className="my-4">{v?.discription}</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center space-x-3">
                            <img className="rounded-full w-9 h-9" src={v?.image} alt="" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>{v?.name}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{v?.position}</div>
                            </div>
                        </figcaption>
                    </figure>)
                }



            </div>






        </>
    );
};

export default About;