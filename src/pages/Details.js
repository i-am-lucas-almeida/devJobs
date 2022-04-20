import { useParams } from "react-router-dom";
import DetailsJob from "../components/DetailsJob";

import { useState, useEffect } from "react";

const Details = () => {

    const { id } = useParams();

    const API_URL = 'http://localhost:3000/jobs/' + id;

    const [jobs, setJobs] = useState('');
    const [error, setError] = useState();

    useEffect(() => {

        try {

            fetch(API_URL)
                .then((resp) => resp.json())
                .then((data) => (

                    setJobs(data)

                ))

        } catch (error) {

            console.log(error.message);
            setError('There was an error loading the data. Return to home page!');

        }

    }, [API_URL])

    return (

        <>

            {error && <h2 className="alert-message">{error}</h2>}

            {jobs && <DetailsJob key={jobs.id} {...jobs} />}

        </>

    );

}

export default Details;