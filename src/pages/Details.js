import { useParams } from "react-router-dom";
import DetailsJob from "../components/layouts/DetailsJob";

import dataJobs from '../data.json';

const Details = () => {

    const { id } = useParams();

    const { jobs } = dataJobs;
    const data = jobs[id - 1];

    return (

        <>

            {data && <DetailsJob key={data.id} {...data} />}

        </>

    );

}

export default Details;