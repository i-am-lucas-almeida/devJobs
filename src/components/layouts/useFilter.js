import { useState } from 'react';

const useFilter = () => {

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

        if (searchLocal && !searchTag) {

            return items.filter(

                (item) =>
                    item.location.toLowerCase().includes(lowerLocal)

            );

        } else if (searchTag && searchLocal) {

            return items.filter(

                (item) =>
                    item.position.toLowerCase().includes(lowerSearch) &&
                    item.location.toLowerCase().includes(lowerLocal)

            );

        } else {

            return items.filter(

                (item) =>
                    item.position.toLowerCase().includes(lowerSearch) ||
                    item.company.toLowerCase().includes(lowerSearch) ||
                    item.contract.toLowerCase().includes(lowerSearch)

            );

        }

    }

    const [optionTime, setOptionTime] = useState(false);

    function optionFullTime(e) {

        e.preventDefault();
        setOptionTime(!optionTime);

    }

    return { handleSearchJob, handleSearchLocal, userSearch, searchTag, searchLocal, optionTime, optionFullTime }

}

export default useFilter;