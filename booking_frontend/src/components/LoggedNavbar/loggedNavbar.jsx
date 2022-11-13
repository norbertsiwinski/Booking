import './loggedNavbar.css';
import { Link } from 'react-router-dom';
import { logout } from '../../helpers/logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getItemFromLocalStorage } from '../../helpers/localstorage';






const LoggedNavbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
            <div className="container-fluid">
                <a className="navbar-brand text-info" href="/"><font color="#5392f9">Get</font><font color="#00000">Home.com</font></a>
                <ul className="navbar-nav ms-auto">

                    <li>
                        <FontAwesomeIcon className="cointainerUser" icon={faUser} />
                        {getItemFromLocalStorage("name")}
                    </li>
                    <li className="nav-item">

                        <FontAwesomeIcon className="cointainerUser" icon={faEnvelope} />
                        Contact Us
                    </li>
                    {
                        getItemFromLocalStorage("role") == "Manager" ? 
                        <li>
                        <Link to="/addhotel" class="btn btn-light add" >Add property</Link>
                    </li>
                        : null
                    }
                    <li>
                        <a className="nav-link text-dark" href="#"></a>
                    </li>
                    <li>
                        <Link to="/" class="btn btn-light" onClick={() => logout()} >Log out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default LoggedNavbar;