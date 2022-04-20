import { Link } from 'react-router-dom';
import './styles/Header.css';

import logoImage from '../images/desktop/logo.svg';

const Header = () => {

    return (

        <>

            <header className='header__c'>

                <div className="container">

                    <Link to='/'>

                        <img src={logoImage} alt='logo icon' className='logo' />

                    </Link>

                </div>

            </header>

        </>

    );

}

export default Header;