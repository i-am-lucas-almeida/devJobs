import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await fetch(url);

                const items = await res.json();

                setData(items);

            } catch(error) {

                console.log(error.message);

                setError('There was an error loading the data. Return to home page!');

            }

        }

        fetchData();

    }, [url]);

    return { data, error };

}