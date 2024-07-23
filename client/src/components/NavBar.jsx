import { BrowserRouter as Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar, Nav, Image} from 'react-bootstrap';
import './NavBar.css'; 

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  const handleSelect = () => {
    setNavToggle(false);
  };
  return (
      <div>
        <Navbar id="NavBar" expand="lg" expanded={navToggle}>
            <Navbar.Brand as={Link} to="/" className='nav-custom'>
              <Image id="logo" src="/howtolifeb&w.png" alt="how to life logo" style={{ height: '50px' }}/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className='nav-custom' onClick={handleSelect}>Home</Nav.Link>
                <Nav.Link as={Link} to="/login"  className='nav-custom' onClick={handleSelect}>Login</Nav.Link>
                <Nav.Link as={Link} to="/signup"  className='nav-custom' onClick={handleSelect}>Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
      
      </div>
  
  );
};

export default NavBar;
