import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

const Header = () => {
    return (
        <Navbar bg = "dark" variant = "dark" className='navbar-container'>
        <Container>
            <Navbar.Brand>
                <img
                    alt="React-Bootstrap"
                    src='https://cdn.worldvectorlogo.com/logos/react-1.svg'
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/products" className='nav-link'>Product List</Link>
                    <Link to="/cart" className='nav-link'>Cart</Link>
                </Nav>
        </Container>
      </Navbar >
    )
}
export default Header


    