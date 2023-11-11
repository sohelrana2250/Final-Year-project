import React, { useState } from 'react';
import StatusChecked from './StatusChecked';
import CountrySearching from './CountrySearching';
import { toast } from 'react-hot-toast';


const Translation = () => {


    const [allCountry, isLoading, error] = StatusChecked();
    const [seletedOption, setSeletedOption] = useState("");
    const [secondSelectedOption, setSecondSelectedOption] = useState("");
    const [searchResult] = CountrySearching(seletedOption);
    const [secondSearchingResult] = CountrySearching(secondSelectedOption);
    const [leftTranslateone, setLeftTranslateone] = useState("");
    const [rightTranslatetwo, setRightTranslatetwo] = useState("");


    console.log(leftTranslateone);
    console.log(rightTranslatetwo);


    const handelSubmit = (event) => {

        const element = event.target;
        if (leftTranslateone === "" && rightTranslatetwo === "") {
            toast.error("You Can,t Selected Language")
        }
        console.log(leftTranslateone);
        console.log(rightTranslatetwo);
        const message = element.message.value;
        console.log(message.trim());
        event.preventDefault();
    }

    // console.log(searchResult);
    // console.log(secondSearchingResult);




    return (
        <>



            {isLoading &&
                <div className='flex justify-center items-center overflow-auto p-10'>
                    <progress className="progress w-56"></progress>

                </div>
            }
            {
                error && <p>{error?.message}</p>
            }



            <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl m-3'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 rounded-sm border-teal-900'>


                    <div>

                        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-1'>

                            {
                                searchResult?.map(({ area, name, capital, capitalInfo, coatOfArms, continents, currencies, fifa, flags,
                                    languages, latlng, maps, population, region, startOfWeek, subregion, }) => <>

                                        <div className="avatar">
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-black"><b>{name.common}</b></label>
                                            <div className="w-14 rounded-full mt-5">
                                                <img src={flags?.png} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <p><b>Area:</b> {area} km</p>
                                            {
                                                capital?.map((v) => <p><b> capital :</b> {v}</p>)
                                            }
                                        </div>

                                        <div>
                                            <b>Latitudes</b>
                                            {
                                                capitalInfo?.latlng?.map((v) => <p>{v}</p>)

                                            }
                                        </div>

                                        <div className="avatar">
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-black"><b>National Coat </b></label>
                                            <div className="w-14 rounded-full mt-5">
                                                <img src={coatOfArms?.png} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <b>Continents</b>
                                            {
                                                continents?.map((v, index) => <p key={index}>{v}</p>)
                                            }
                                        </div>
                                        <div>
                                            <b>Currencies</b>
                                            {
                                                Object.entries(currencies)?.map(([key, value], index) => <>
                                                    <p key={1}>Name : {currencies[key].name}</p>
                                                    <p key={2}> Symbol: {currencies[key].symbol}</p>
                                                </>)
                                            }
                                        </div>

                                        <div>
                                            <b>Football Country</b>
                                            <p>{fifa}</p>
                                        </div>

                                        <div>
                                            <b>LatLng</b>
                                            {
                                                latlng?.map((v, index) => <p key={index}>{v}</p>)

                                            }
                                        </div>

                                        <div>
                                            <b>Population</b>
                                            <p>{population}</p>

                                        </div>

                                        <div>
                                            <b>Region</b>
                                            <p>{region}</p>
                                        </div>

                                        <div>
                                            <b>Start Of Week</b>
                                            <p>{startOfWeek}</p>
                                        </div>
                                        <div>
                                            <b>Sub-Region</b>
                                            <p>{subregion}</p>
                                        </div>
                                        <div>


                                            <a target="_blank" rel="noreferrer" className='btn btn-outline btn-sm' href={maps?.googleMaps
                                            } >Google Map</a>

                                        </div>

                                        <div>
                                            <a target="_blank" rel="noreferrer" className='btn btn-outline btn-sm' href={maps?.openStreetMaps
                                            }>OpenStreet Maps
                                            </a>
                                        </div>
                                        <div>

                                            <select name='labguage' id="language" onClick={(e) => setLeftTranslateone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                                <option disabled>Language List</option>

                                                {
                                                    Object.entries(languages
                                                    )?.map(([key, value], index) => <>
                                                        <option key={index}>{languages[key]}</option>
                                                    </>)
                                                }

                                            </select>
                                        </div>

                                    </>)
                            }

                        </div>

                        <div className="flex mt-3">

                            <select name='selected_country' id="job_catagories"
                                onClick={(e) => setSeletedOption(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option disabled>All Country</option>
                                {
                                    allCountry?.map((v, index) => <option key={index} >{v.name.common}</option>)
                                }

                            </select>

                        </div>

                    </div>
                    {/* ..........second Part */}


                    <div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-1'>

                            {
                                secondSearchingResult?.map(({ area, name, capital, capitalInfo, coatOfArms, continents, currencies, fifa, flags,
                                    languages, latlng, maps, population, region, startOfWeek, subregion, }) => <>

                                        <div className="avatar">
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-black"><b>{name.common}</b></label>
                                            <div className="w-14 rounded-full mt-5">
                                                <img src={flags?.png} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <p><b>Area:</b> {area} km</p>
                                            {
                                                capital?.map((v) => <p><b> capital :</b> {v}</p>)
                                            }
                                        </div>

                                        <div>
                                            <b>Latitudes</b>
                                            {
                                                capitalInfo?.latlng?.map((v) => <p>{v}</p>)

                                            }
                                        </div>

                                        <div className="avatar">
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-black"><b>National Coat </b></label>
                                            <div className="w-14 rounded-full mt-5">
                                                <img src={coatOfArms?.png} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <b>Continents</b>
                                            {
                                                continents?.map((v, index) => <p key={index}>{v}</p>)
                                            }
                                        </div>
                                        <div>
                                            <b>Currencies</b>
                                            {
                                                Object.entries(currencies)?.map(([key, value]) => <>
                                                    <p key={1}>Name : {currencies[key].name}</p>
                                                    <p key={2}> Symbol: {currencies[key].symbol}</p>
                                                </>)
                                            }
                                        </div>

                                        <div>
                                            <b>Football Country</b>
                                            <p>{fifa}</p>
                                        </div>

                                        <div>
                                            <b>LatLng</b>
                                            {
                                                latlng?.map((v, index) => <p key={index}>{v}</p>)

                                            }
                                        </div>

                                        <div>
                                            <b>Population</b>
                                            <p>{population}</p>

                                        </div>

                                        <div>
                                            <b>Region</b>
                                            <p>{region}</p>
                                        </div>

                                        <div>
                                            <b>Start Of Week</b>
                                            <p>{startOfWeek}</p>
                                        </div>
                                        <div>
                                            <b>Sub-Region</b>
                                            <p>{subregion}</p>
                                        </div>
                                        <div>


                                            <a target="_blank" rel="noreferrer" className='btn btn-outline btn-sm' href={maps?.googleMaps
                                            } >Google Map</a>

                                        </div>

                                        <div>
                                            <a target="_blank" rel="noreferrer" className='btn btn-outline btn-sm' href={maps?.openStreetMaps
                                            }>OpenStreet Maps
                                            </a>
                                        </div>
                                        <div>

                                            <select name='labguage' id="language" onClick={(e) => setRightTranslatetwo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                                <option disabled>Language List</option>

                                                {
                                                    Object.entries(languages
                                                    )?.map(([key, value], index) => <>
                                                        <option key={index}>{languages[key]}</option>
                                                    </>)
                                                }

                                            </select>
                                        </div>

                                    </>)
                            }


                        </div>

                        <div className="flex mt-3">

                            <select name='selected_country' id="job_catagories"
                                onClick={(e) => setSecondSelectedOption(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                <option disabled>All Country</option>
                                {
                                    allCountry?.map((v, index) => <option key={index} >{v.name.common}</option>)
                                }

                            </select>

                        </div>

                    </div>
                </div>

                <form onSubmit={handelSubmit} className='mt-3' >


                    <textarea id="message" name='message' rows="4" maxLength={100} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the Text"></textarea>


                    <div className='flex justify-end items-center w-full mt-3'>



                        <button className='btn btn-outline btn-sm' type='submit'>
                            Convater
                        </button>




                    </div>
                </form>

            </div>

            {/* .... */}





        </>
    );
};

export default Translation;