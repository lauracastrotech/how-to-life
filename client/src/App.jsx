// IF YOU NEED LOGIN STATE, YOU CAN ADD THE PROVIDER HERE
/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormStateContext } from './helpers/FormContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

function App() {
  
  return (
    <FormStateContext.Provider>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <LoginModal/>
        <SignUpModal/>

      </div>
    </FormStateContext.Provider>
  );
}

export default App;