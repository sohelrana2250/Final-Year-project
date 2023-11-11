import React, { useEffect, useState } from 'react';

const Setting = () => {



    const products = [
        {
            id: 1,
            name: "Product 1",
            image: "https://i.ibb.co/J2BtZdg/Rectangle-56-1.png",
            description: "Description of Product 1",

        },
        {
            id: 2,
            name: "Product 2",
            image: "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
            description: "Description of Product 2",

        },
        {
            id: 3,
            name: "Product 3",
            image: "https://w7.pngwing.com/pngs/204/549/png-transparent-apple-watch-smartwatch-wearable-technology-apple-products-electronics-gadget-company.png",
            description: "Description of Product 3",

        },
        {
            id: 4,
            name: "Product 4",
            image: "https://i.ibb.co/J2BtZdg/Rectangle-56-1.png",
            description: "Description of Product 1",

        },
        {
            id: 5,
            name: "Product 5",
            image: "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
            description: "Description of Product 2",

        },
        {
            id: 6,
            name: "Product 3",
            image: "https://w7.pngwing.com/pngs/204/549/png-transparent-apple-watch-smartwatch-wearable-technology-apple-products-electronics-gadget-company.png",
            description: "Description of Product 6",

        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isCarouselActive, setIsCarouselActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isCarouselActive) {
                setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + 1);
            }
        }, 250);

        return () => clearInterval(interval);
    }, [isCarouselActive]);

    const handleProductClick = (product) => {


        setIsCarouselActive(false);
        // Do something with the selected product
        // ...

        // Restart the carousel after 2 seconds
        setTimeout(() => {
            setIsCarouselActive(true);
        }, 2000);
    };


    return (

        <>
            {/* Carousel */}
            <div className="carousel">
                <div className="carousel-inner">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
                        >

                            <div className='flex justify-between'>
                                <img
                                    src={product.image}
                                    className='w-96 full'
                                    alt={product.name}
                                    onClick={() => handleProductClick(product)}
                                />
                                <div className="carousel-caption">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>{ }</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="product-image.jpg" alt="" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Product Name</div>
                        <p className="text-gray-700 text-base">Product description goes here. This is a great product that you should buy now!</p>
                        <p className="text-gray-700 text-base">Price: $19.99</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Category</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Brand</span>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* second card  */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="product-image.jpg" alt="" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Product Name</div>
                        <p className="text-gray-700 text-base">Product description goes here. This is a great product that you should buy now!</p>
                        <p className="text-gray-700 text-base">Price: $19.99</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Category</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Brand</span>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* third card  */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="product-image.jpg" alt="" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Product Name</div>
                        <p className="text-gray-700 text-base">Product description goes here. This is a great product that you should buy now!</p>
                        <p className="text-gray-700 text-base">Price: $19.99</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Category</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Brand</span>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* four cards */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="product-image.jpg" alt="" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Product Name</div>
                        <p className="text-gray-700 text-base">Product description goes here. This is a great product that you should buy now!</p>
                        <p className="text-gray-700 text-base">Price: $19.99</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Category</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Brand</span>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Setting;