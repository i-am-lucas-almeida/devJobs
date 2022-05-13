import { useState, useEffect } from 'react';

const useFetch = () => {

    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        try {

            fetch('data.json')
                .then((resp) => resp.json())
                .then((data) => (

                    setJobs(data.jobs)

                ))

        } catch (error) {

            console.log(error.message);
            setError(true);

        }

    }, []);

    return { jobs, error }

}

export default useFetch;