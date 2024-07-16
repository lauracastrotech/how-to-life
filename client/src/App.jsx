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
import HowTo from './components/HowTo';
import Skill from './components/Skill';
import Objective from './components/Objective';
import NavBar from './components/NavBar';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import Answer from './components/Answer';

function App() {

  const [formStatus, setFormStatus] = useState("home");
  const [step, setStep] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState([]);
  const [answer, setAnswer] = useState("")

  //console.log('in app.jsx', step, formStatus, prompt);

  // sylwia: may need to add handleSelected() when a link is clicked
  // don't worry about conditional rendering at the moment, there will be a context to control that

  return (
    <FormStateContext.Provider value = {{formStatus,setFormStatus,step,setStep,}}>
      <div>
      <NavBar />
  
        { formStatus === "home" && step === 0 && (
          <Routes>
            <Route exact path="/" element={<Home />} /> 
        </Routes>
        )}

{/* //     <FormStateContext.Provider value = {{
//       formStatus,
//       setFormStatus,
//       step,
//       setStep,
//       prompt,
//       setPrompt,
//       category,
//       setCategory, 
//       answer,
//       setAnswer
//     }}> */}
        
        { formStatus === "how-to" && step === 1 && <HowTo />}
        { formStatus === "skill" && step === 2 && <Skill />}
        { formStatus === "objective" && step === 3 && <Objective answer={answer} setAnswer={setAnswer} />} 
        { formStatus === "answer" && <Answer answer={answer} setAnswer={setAnswer} /> }
      <Routes> 
        {/* NEED TO CREATE NAV LINKS TO PATH, HOME COMPONENT RENDERS TWICE */}
        {/* ADD NAVBAR CODE AND LOGIC HERE */}
        {/* <Route exact path="/" element={<Home />} />  */}
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