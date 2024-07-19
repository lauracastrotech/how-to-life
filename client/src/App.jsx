
/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import { FormStateContext } from './helpers/FormContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
// import NavBar from './components/NavBar';
import { Navbar, Nav, Image} from 'react-bootstrap';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

function App() {

  // Initialize states for progressive form
  const [formStatus, setFormStatus] = useState("home");
  const [step, setStep] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

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
      <FormStateContext.Provider value={{ formStatus, setFormStatus, step, setStep, prompt, setPrompt, answer, setAnswer}}>
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:formView/:stepView" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
        <LoginModal/>
        <SignUpModal/>
    </FormStateContext.Provider>
  );
}

export default App;