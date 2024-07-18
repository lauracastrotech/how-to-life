/* eslint-disable no-unused-vars */
// This is the component where chatGpt response renders
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { FormStateContext } from '../helpers/FormContext';
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
        {/* This div will be boiler plate */}
        <div className="row">
            <h2>[What do we put here]</h2>
        </div>
        {/* This div is where to render renspone */}
        <div className="row">
            <h2>To be added later</h2>
        </div>
        <div className='row m-2'>
          <button className='col-4'>
            <img className = "icon-group" src="/regenerate.png" alt="regenrate button" />
          </button>
          <button className='col-4' onClick={() => handleTextToSpeech(answer)}>
            <img className = "icon-group" src="/text_to_speech.png" alt="text to speech button" />
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