import { useEffect, useState } from "react"

const StatusChecked = () => {

    const [allCountry, setAllCountry] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => {
            setLoading(false);
            setAllCountry(data);
            setError("");

        }).catch((error) => {
            setError(error?.message);
        })

    }, [])

    return [allCountry, isLoading, error];

}
export default StatusChecked;



