import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavbar.css';

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <div className="container">
            <a className="navbar-brand text-info" href="/">GetHome.com</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Contact Us</a>
                    </li>
                    <li> 
                    <button type="button" class="btn btn-light">Log In</button>
                    <button type="button" class="btn btn-light">Sign Up</button>
                    </li>
                </ul>
            </div>

    </nav>
)
}


export default MainNavbar;