import { useState } from 'react';

import searchIcon from '../images/desktop/icon-search.svg';
import localIcon from '../images/desktop/icon-location.svg';
import filterIcon from '../images/mobile/icon-filter.svg';
import './styles/SearchBar.css';

const Search = ({ jobValue, jobEvent, timeEvent, optionTime, localValue, localEvent }) => {

    const [modal, setModal] = useState(false);

    function openModal(e) {

        e.preventDefault();
        setModal(true);

    }

    function closeModal(e) {

        e.preventDefault();

        if (e.target === document.querySelector('.modal__filter')) {

            setModal(false);

        }

    }

    return (

        <>

            <form className='form__desktop'>

                <label className="search__c">

                    <img src={searchIcon} alt="search icon" className='search__icon' />

                    <input type="search" name="searchJob" id="searchJob" className='search__input' placeholder="Filter by position, companies, expertise..." value={jobValue} onChange={jobEvent} />

                </label>

                <label className="search__c search__local">

                    <img src={localIcon} alt="local icon" />

                    <input type="search" name="searchLocal" id="searchLocal" className='search__input' placeholder="Filter by location..." value={localValue} onChange={localEvent} />

                </label>

                <div className='search__c search__time'>

                    <input type="button" className={optionTime === true ? 'search__button active' : 'search__button'} onClick={timeEvent} />

                    <p className='search__c-button-title'>Full Time Only</p>

                </div>

                <button className='button__filter' onClick={openModal}>

                    <img src={filterIcon} alt="filter icon" />

                </button>

            </form>

            <div className={modal === true ? 'modal__filter modal-active' : 'modal__filter'} onClick={closeModal}>

                <form className='form__mobile'>

                    <label className="search__local_mobile">

                        <img src={localIcon} alt="local icon" />

                        <input type="search" name="searchLocal" id="searchLocal" className='search__input search__input_mobile' placeholder="Filter by location..." value={localValue} onChange={localEvent} />

                    </label>

                    <div className='search__time_mobile'>

                        <input type="button" className={optionTime === true ? 'search__button active' : 'search__button'} onClick={timeEvent} />

                        <p className='search__c-button-title'>Full Time Only</p>

                    </div>

                </form>

            </div>

        </>

    );

}

export default Search;