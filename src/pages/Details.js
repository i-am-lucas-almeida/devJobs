import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import DetailsJob from "../components/DetailsJob";

const Details = () => {

    const { id } = useParams();

    const API_URL = process.env.REACT_APP_API_URL;

    const [jobs, setJobs] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {

        try {

            fetch(`${API_URL}/${id}`)

                .then((resp) => resp.json())
                .then((data) => (

                    setJobs(data)

                ))

        } catch (error) {

            console.log(error.message);
            setError(true);

        }

    }, [API_URL, id]);

    return (

        <>

            {error && <p className="alert-message">Oops! An error has occurred. <br /> Reload the page or go back to the home.</p>}

            {jobs && <DetailsJob key={jobs.id} {...jobs} />}

        </>

    );

}

export default Details;