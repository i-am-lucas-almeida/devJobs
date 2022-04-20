import './styles/DetailsJobs.css';

const DetailsJob = ({ company, logo, logoBackground, position, postedAt, contract, location, website, apply, description, requirements, role }) => {

    return (

        <>

            <div className='details__container'>

                <div className="details__header">

                    <div className="details__logo" style={{ backgroundColor: `${logoBackground}` }}>

                        <img src={process.env.PUBLIC_URL + '/' + logo} alt={`${'logo for '}${company}`} />

                    </div>

                    <div className="details__site">

                        <div>

                            <h2 className='details__name'>{company}</h2>

                            <p>{`${company}${'.com'}`}</p>

                        </div>

                        <a href={website} target='_blank' rel='noreferrer' className='details__button details__website-company'>Company Site</a>

                    </div>

                </div>

                <div className="details__content">

                    <div className='details__content_title'>

                        <div>

                            <div className="details__time">

                                <h3>{postedAt}</h3>
                                <span className='details__separator'>●</span>
                                <h3>{contract}</h3>

                            </div>

                            <h1 className='details__position'>{position}</h1>

                            <h3 className='details__location'>{location}</h3>

                        </div>

                        <aside>

                            <a href={apply} target='_blank' rel='noreferrer' className='details__button details__website-apply'>Apply Now</a>

                        </aside>

                    </div>

                    <p className='details__paragraph'>{description}</p>

                    <div>

                        <h2 className='details__subtitle'>Requirements</h2>

                        <p className='details__paragraph'>{requirements.content}</p>

                        <ul className='details__required'>

                            {requirements.items && requirements.items.map((item, index) => (

                                <li key={index}>
                                    <span>●</span>
                                    {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                    <div>

                        <h2 className='details__subtitle'>What you will do</h2>

                        <p className='details__paragraph'>{role.content}</p>

                        <ol className='details__role'>

                            {role.items && role.items.map((item, index) => (

                                <li key={index}>
                                    <span>{`${index + 1}.`}</span>
                                    {item}
                                </li>

                            ))}

                        </ol>

                    </div>

                </div>

            </div>

            <div className="details__footer_c">

                <div className="details__container details__footer">

                    <div>

                        <h1 className='details__position'>{position}</h1>

                        <p>{company}</p>

                    </div>

                    <aside>

                        <a href={apply} target='_blank' rel='noreferrer' className='details__button details__website-apply'>Apply Now</a>

                    </aside>

                </div>

            </div>

        </>

    );

}

export default DetailsJob;