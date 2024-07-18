import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar, Nav, Image} from 'react-bootstrap';
import './NavBar.css'; 

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
 // const {isLoggedIn, setIsLoggedIn} = useAuthContext(false);

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
            {/* <Nav.Link as={Link} to="/profile" className='nav-custom'>
                          <Image src="/assets/profileIcon.png" width="30" height="30" alt="profile icon"/>
                          </Nav.Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className='nav-custom' onClick={handleSelect}>Home</Nav.Link>
                <Nav.Link as={Link} to="/login"  className='nav-custom' onClick={handleSelect}>Login</Nav.Link>
                <Nav.Link as={Link} to="/signup"  className='nav-custom' onClick={handleSelect}>Sign Up</Nav.Link>
                {/* <Nav.Link as={Link} to="/profile"  className='nav-custom' onClick={handleSelect}>Profile</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
          </Navbar>
    </div>
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       <img src="/howtolifeb&w.png" alt="Logo" className="logo-img" style={{ height: '50px' }}/> 
    //     </Link>

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <button
    //             type="button"
    //             className="nav-link btn"
    //             data-bs-toggle="modal"
    //             data-bs-target="#loginModal"
    //           >
    //             <svg
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-person-fill"
    //               viewBox="0 0 16 16"
    //             >
    //             </svg>{' '}
    //             Login
    //           </button>
    //         </li>
    //         <li className="nav-item">
    //           <button
    //             type="button"
    //             className="nav-link btn"
    //             data-bs-toggle="modal"
    //             data-bs-target="#signupModal"
    //           >
    //             <svg
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-plus-circle-fill"
    //               viewBox="0 0 16 16"
    //             >
    //             </svg>{' '}
    //             Sign Up
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // </div>
  );
};

export default NavBar;
