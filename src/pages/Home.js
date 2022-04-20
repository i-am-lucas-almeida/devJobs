import { useEffect, useState } from 'react';
import CardJob from '../components/CardJob';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const API_URL = 'http://localhost:3000/jobs';

    const [jobs, setJobs] = useState([]);
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

    }, [])

    //FILTER EVENTS

    const [searchTag, setSearchTag] = useState('');

    const [searchLocal, setSearchLocal] = useState('');

    function handleSearchJob(e) {

        e.preventDefault();

        setSearchTag(e.target.value);

    }

    function handleSearchLocal(e) {

        e.preventDefault();

        setSearchLocal(e.target.value);

    }

    const lowerSearch = searchTag.toLowerCase();
    const lowerLocal = searchLocal.toLowerCase();

    function userSearch(items) {

        //pesquisar só local

        if(searchLocal !== '' && searchTag === '') {

            return items.filter(
            
                (item) => 
                    item.location.toLowerCase().includes(lowerLocal)
    
            );

            //pesquisar só por tag

        } else if(searchTag !== '' && searchLocal !== '') {

            return items.filter(
            
                (item) => 
                    item.position.toLowerCase().includes(lowerSearch) &&
                    item.location.toLowerCase().includes(lowerLocal)
    
            );

        } else {

            return items.filter(
            
                (item) => 
                    item.position.toLowerCase().includes(lowerSearch) ||
                    item.company.toLowerCase().includes(lowerSearch)
    
            );

        }

    }

    const [optionTime, setOptionTime] = useState(false);

    function optionFullTime(e) {

        e.preventDefault();
        setOptionTime(!optionTime);

    }

    return (

        <div className='container'>

            <SearchBar jobValue={searchTag} jobEvent={handleSearchJob} timeEvent={optionFullTime} optionTime={optionTime} localValue={searchLocal} localEvent={handleSearchLocal} />

            <div className="container__jobs">

                {error && <h2 className='alert-message'>{error}</h2>}

                {userSearch(jobs) && userSearch(jobs).map((item) => (

                    <CardJob key={item.id} {...item} optionTime={optionTime} />

                ))}

            </div>

        </div>

    )

}

export default Home;
