import './styles/CardJob.css';
import { Link } from 'react-router-dom';

const CardJob = ({id, company, logo, logoBackground, position, postedAt, contract, location, optionTime}) => {

    return (

        <>

            <div className={contract !== 'Full Time' && optionTime === true ? 'card__c hidden' : 'card__c'}>

                <div className="card__logo" style={{backgroundColor: `${logoBackground}`}}>

                    <img src={logo} alt={`${'logo for '}${company}`} />

                </div>

                <div className="card__time">

                    <h3>{postedAt}</h3>
                    <span className='card__separator'>●</span>
                    <h3>{contract}</h3>

                </div>

                <div className="card__job">

                    <Link to={`/job/${id}`} className='card__link'>

                        <h2>{position}</h2>

                    </Link>

                </div>

                <p className='card__company'>{company}</p>

                <h3 className="card__location">{location}</h3>

            </div>

        </>

    )

}

export default CardJob;