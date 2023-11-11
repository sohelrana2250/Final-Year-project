import React, { useEffect, useState } from 'react';
import Advertisment from "./../../vediocadentails/credentials.json";
import '../../pages/employeeDashboard/Styles.css';
const AdvCarousel = () => {
    //https://www.thesportsdb.com/api.php
    const images = [
        'https://i.ibb.co/5LS0nGL/cer1.png',
        'https://i.ibb.co/grKryTr/emp.png',
        'https://i.ibb.co/HhfC3M9/gpt.png',
        'https://i.ibb.co/5LS0nGL/cer1.png',
        'https://i.ibb.co/grKryTr/emp.png',
        'https://i.ibb.co/HhfC3M9/gpt.png',
        "https://t.ly/bwHV7"

        // Add more image URLs here
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex, images.length]);

    /*  <img key={index}
                            src={image}
                            alt={`img ${index + 1}`}
                            className={`w-64 h-64 object-cover rounded ${index === currentIndex ? 'opacity-100' : 'opacity-50'
                                }`}
                        />*/
    return (
        <>

            {/* <div className=" m-3 grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                {images.map((image, index) => (

                    <div key={index} className={` object-cover rounded ${index === currentIndex ? 'opacity-100' : 'opacity-50'
                        }`} >
                        <div class="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div class="px-5 pb-5">
                                <a href="..">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </a>
                                <div class="flex items-center mt-2.5 mb-5">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <a href=".." class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div> */}




            <div className="carousel">
                <div className="carousel-inner">
                    {
                        Advertisment.Advertisment.map((v, index) => <div key={index + 1} className='carousel-item m-3'>
                            <div className="block w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div className='flex justify-between'>


                                    <img className="w-96 h-full" src={v.advertisement.image_url} alt="" />




                                    <div className='ml-3'>
                                        <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Amazing Product</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Organization Name : Berist Ltd</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-400">Introducing the new Amazing Product - the ultimate solution for all your needs!</p>

                                        <p className="text-sm text-gray-700 dark:text-gray-400">Limited stock available. Order now to avail of the discount!</p>

                                        <div className="flex justify-end m-2">
                                            <div className="price-container">
                                                <button className="btn btn-outline btn-error btn-sm original-price">$100</button>

                                                <button className="btn btn-outline btn-success btn-sm discounted-price">$80</button>

                                            </div>

                                        </div>
                                    </div>




                                </div>




                            </div>
                        </div>)
                    }


                    {/* <div className="carousel-item">Slide 3</div> */}

                </div>
            </div>
            <br />






        </>
    );
};

export default AdvCarousel;