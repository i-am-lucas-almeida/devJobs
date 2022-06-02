import { Link } from 'react-router-dom';
import 'animate.css';
import '../styles/CardJob.css';

const CardJob = ({id, company, logo, logoBackground, position, postedAt, contract, location, optionTime}) => {

    return (

        <>

            <div className={`animate__animated animate__fadeIn ${contract !== 'Full Time' && optionTime === true ? 'card__c hidden' : 'card__c'}`}>

                <div className="card__logo" style={{backgroundColor: `${logoBackground}`}}>

                    <img src={logo && logo} alt={`${'logo for '}${company && company}`} />

                </div>

                <div className="card__time">

                    <h3>{postedAt && postedAt}</h3>
                    <span className='card__separator'>●</span>
                    <h3>{contract && contract}</h3>

                </div>

                <div className="card__job">

                    <Link to={id && `/job/${id}`} className='card__link'>

                        <h2>{position && position}</h2>

                    </Link>

                </div>

                <p className='card__company'>{company && company}</p>

                <h3 className="card__location">{location && location}</h3>

            </div>

        </>

    )

}

export default CardJob;