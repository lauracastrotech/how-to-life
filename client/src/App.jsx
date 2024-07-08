/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
import { FormStateContext } from './helpers/FormContext';
import Question from './components/Question';
import Skill from './components/Skill';
// import Objective from './components/Objective';
// import Answer from './components/Answer';

function App() {

  const [formStatus, setFormStatus] = useState("home");
  const [step, setStep] = useState(0);
  console.log('in app.jsx', step, formStatus);

  return (
    <FormStateContext.Provider value = {{
      formStatus,
      setFormStatus,
      step,
      setStep,
    }}>
        { formStatus === "home" && step === 0 && <Home />}
        { formStatus === "question" && step === 1 && <Question />}
        { formStatus === "skill" && step === 2 && <Skill />}
        {/* { formStatus === "objective" && <Objective />} */}
        {/* { formStatus === "answer" && <Answer />}  */}
      {/* <Routes> */}
        {/* NEED TO CREATE NAV LINKS TO PATH, IF I UNCOMMENT BELOW HOME COMPONENT RENDERS TWICE */}
        {/* <Route exact path="/" element={<Home />} /> 
        <Route path="/question" element={<Question />} />  */}
        {/* <Route exact path="/skill" element={<Skill />} /> 
        <Route exact path="/objective" element={<Objective />} /> 
        <Route exact path="/answer" element={<Answer />} />  */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} /> */}
      {/* </Routes> */}
    </FormStateContext.Provider>
  );
}

export default App;