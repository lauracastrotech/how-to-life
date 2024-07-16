// This is the component where chatGpt response renders
// GET method for history => this is tied to backend, create list of cards where each card has text that is a question that the user previously asked
// This is where the text-to-speech icon will live

/*
step 1 user sees form instructions
step 2 user selects a category
step 2a once a category is clicked, add category to prompt, send category name to suggestions api, store popular question in state
user clicks next
step 3 render response from suggestions api req, add question/or custom question to prompt state
user clicks next
step 4 user types in objective/more context, add to prompt state
user clicks submit - onClick send prompt to POST api and the reqponse to this request will be rendered in answer component (maybe this call is a useEffect in answer from chatGPT)
*/

import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import regenerate from '../assets/regenerate.png';
import textTospeech from '../assets/text_to_speech.png';
import axios from 'axios';

export default function Answer (){

  // Need a use affect cb that will display the answer to a section/tag to

  const {formStatus, setFormStatus, step, setStep, prompt, setPrompt, answer, setAnswer} = useContext(FormStateContext); 
  const [audioUrl, setAudioUrl] = useState('');


  const handleTextToSpeech = async (text) => {
    try {
      const { data } = await axios.post('/api/index/text-to-speech', { text }, { headers: { 'Content-Type': 'application/json' } });
      const audioUrl = `data:audio/mp3;base64,${data.audioContent}`;
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error('Error generating text to speech:', error);
    }
  };
  // generate text-to-speech when the answer changes
  useEffect(() => {
    if (answer) {
      handleTextToSpeech(answer);
    }
  }, [answer]);


  // const handleRegenerate ()
  // Resend prompt to api

  return (
    <div className="objective">
      <div className="container col">
        <div className="row m-2">
          <h1>Answer</h1>
        </div>
        {/* This div will be boiler plate */}
        <div className="row">
            <h2>Here's your How To Life step-by-step guide in the world of [value of category state goes here] </h2>
        </div>
        {/* This div is where to render renspone */}
        <div className="row">
            <h2>To be added later</h2>
        </div>
        <div className='row m-2'>
          <button className='col-4'>
            <img className = "icon-group" src={regenerate} alt="regenrate button" />
          </button>
          <button className='col-4' onClick={() => handleTextToSpeech(answer)}>
            <img className = "icon-group" src={textTospeech} alt="text to speech button" />
          </button>
        </div>
        {audioUrl && (
                    <div className="row">
                        <audio controls src={audioUrl} />
                    </div>
        )}
      </div>
    </div>
  );
}