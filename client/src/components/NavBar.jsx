import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/howtolifeb&w.png'; 
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo-img" style={{ height: '50px' }} /> 
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                </svg>{' '}
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                </svg>{' '}
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
