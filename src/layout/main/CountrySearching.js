import { useEffect, useState } from 'react';

const CountrySearching = (search) => {

    const [searchResult, setSearchResult] = useState([]);


    useEffect(() => {

        if (search) {

            fetch(`https://restcountries.com/v3.1/translation/${search}`).then((res) => res.json()).then((data) => {

                setSearchResult(data);

            }).catch((error) => {

            })
        }



    }, [search]);

    return [searchResult];




};

export default CountrySearching;