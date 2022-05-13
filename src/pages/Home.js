import { useState } from 'react';
import useFetch from '../hook/useFetch';
import useFilter from '../components/useFilter';

import CardJob from '../components/CardJob';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const [itensPage, setItensPage] = useState(6);

    const { error, jobs } = useFetch();

    const {

        handleSearchJob,
        handleSearchLocal,
        userSearch,
        searchLocal,
        searchTag,
        optionTime,
        optionFullTime

    } = useFilter();

    return (

        <div className='container'>

            <SearchBar
                jobValue={searchTag}
                jobEvent={handleSearchJob}
                timeEvent={optionFullTime}
                optionTime={optionTime}
                localValue={searchLocal}
                localEvent={handleSearchLocal}
            />

            {error && <p className="alert-message">Oops! An error has occurred. <br /> Reload the page or go back to the home.</p>}

            <div className="container__jobs">

                {userSearch(jobs) && userSearch(jobs).map((item, index) => (

                    index < itensPage && (

                        <CardJob key={item.id} {...item} optionTime={optionTime} />

                    )

                ))}

            </div>

            <div className="button__c">

                <button onClick={() => setItensPage(itensPage + 6)} className='button__loader'>
                    Load More
                </button>

            </div>

        </div>

    )

}

export default Home;
