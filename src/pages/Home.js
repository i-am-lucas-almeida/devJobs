import { useState } from 'react';
import useFetch from '../hook/useFetch';
import useFilter from '../components/layouts/useFilter';

import CardJob from '../components/layouts/CardJob';
import SearchBar from '../components/layouts/SearchBar';
import ErrorMessage from '../components/layouts/ErrorMessage';

const Home = () => {

    const moreItens = 6;

    const [itensPage, setItensPage] = useState(moreItens);

    const { error, jobs } = useFetch();

    console.log(jobs.length)

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

            {error && <ErrorMessage text='Oops! An error has occurred.' />}

            <div className="container__jobs">

                {userSearch(jobs).length > 0
                    ? userSearch(jobs).map((item, index) => (

                        index < itensPage && (

                            <CardJob
                                key={item.id}
                                {...item}
                                optionTime={optionTime}
                            />

                        )

                    )) :

                    <ErrorMessage text='Oops! No job has found.' />

                }

            </div>

            <div className="button__c">

                {(userSearch(jobs).length > 0 &&
                    itensPage <= jobs.length) &&

                    <button
                        onClick={() => setItensPage(itensPage + moreItens)} className='button__loader'>
                        Load More
                    </button>

                }

            </div>

        </div>

    )

}

export default Home;
