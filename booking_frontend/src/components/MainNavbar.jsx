import './MainNavbar.css';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
            <div className="container">
                <a className="navbar-brand text-info" href="/"><font color="#5392f9">Get</font><font color="#00000">Home.com</font></a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Contact Us</a>
                    </li>
                    <li>
                        <Link to="/login" class="btn btn-light" >Log In</Link>
                        <Link to="/register" class="btn btn-light" >Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default MainNavbar;