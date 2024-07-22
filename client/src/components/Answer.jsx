import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import axios from 'axios';
import './Answer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export default function Answer() {
  const { formStatus, setFormStatus, step, setStep, prompt, setPrompt, answer, setAnswer } = useContext(FormStateContext);
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

  const handleRegenerate = async () => {
    try {
      const { data } = await axios.post('/api/index/ai-answer', { prompt });
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="answer-container d-flex align-items-center justify-content-center">
      <div className="container mt-5 animate__animated animate__fadeIn">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="title animate__animated animate__bounceIn">Ready to learn?</h1>
            <p className="lead animate__animated animate__fadeIn">Your journey to mastering adulting just got easier. Check out the answer we've prepared for you.</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="card border-primary mb-3 animate__animated animate__fadeInLeft">
              <div className="card-header">Your Question:</div>
              <div className="card-body text-center">
                <p className="card-text prompt-text">{prompt}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="card border-success mb-3 animate__animated animate__fadeInLeft">
              <div className="card-header">Your step-by-step guide:</div>
              <div className="card-body">
                <p className="card-text">{answer}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <button className="btn btn-outline-secondary mx-2" onClick={handleRegenerate}>
            <FontAwesomeIcon icon={faSyncAlt} className="icon" /> Regenerate
          </button>
          <button className="btn btn-outline-secondary mx-2 same-size-btn" onClick={() => handleTextToSpeech(answer)}>
            <FontAwesomeIcon icon={faVolumeUp} className="icon" /> Text to Speech
          </button>
        </div>
        {audioUrl && (
          <div className="row justify-content-center">
            <audio className="audio-player" controls src={audioUrl} />
          </div>
        )}
      </div>
    </div>
  );
}