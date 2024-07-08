import React from 'react';
import { useState } from 'react';
import './Home.css'; 
import Question from '../components/Question';


export default function Home () {
  // Initialize context that controls state of how to life progressive form
  const [formStatus, setFormStatus] = useState("home");
    // if formStatus === "home", show home component step 0
    // if formStatus === "question", show question component step 1
    // if formStatus === "skill", show skill component step 2
    // if formStatus === "objective", show objective component step 3
    // if formStatus === "answer", show answer component step 4
  
  // Initialize context that controls the next and back button
    // if stepStatus === 0, show question component
    // if stepStatus === 1, show question component
    // if stepStatus === 2, show question component
    // if stepStatus === 3, show question component

    // if next is clicked, go to the next step
    // if back is clicked, go to the previous step

  // For mobile view, there should be a contatiner 
    // h1
    // paragraph
    // card 1 choose a topic
    // card 2 pick or add a skill
    // card 3 context or objective - this answers the why of what they want to learn
    // button next (no border, text decoration underline)


  return (
    <div className="progressive-form">
      <div className="container bg-warning">
        { formStatus === 'home' && <div className='home row'>
            <div className='col-6'>
              <h1 className='bg-primary'>Welcome!</h1>
              <p className='bg-light'>How to life helps you get the best resources for all those life skills that they didn&apos;t teach you in high school. Here&apos;s how it works</p>
            </div>
            <div className='col-6'>
              {/* Need to add divs for card and card-body then add card-text to <p> elements */}
              <p className='card bg-success'>Step 1: Choose a category. There can be many different ways to learn something. Help us narrow down your search.</p>
              <p className='card bg-success'>Step 2: Select a skill. In a few words, you can tell us the skill that you would like to learn.</p>
              <p className='card bg-success'>Step 3: Share your objective. The more details that you give us, the better your answers will be.</p>
            </div>
            <button onClick = {() => setFormStatus("question")}>Get started</button>
          </div>  
        }

        { formStatus === "question" && <Question />}
        { formStatus === "skill" && <Skill />}
        { formStatus === "objective" && <Objective />}
        { formStatus === "answer" && <Answer />}

        {/* 
          Question component
          Skill component
          Objective component 
          Answer component
        */}
    
      </div>
    </div>
  );
}
