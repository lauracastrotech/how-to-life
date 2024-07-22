import React, { useContext, useState, useEffect } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import axios from 'axios';
import './Answer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export default function Answer() {
  const { prompt, answer, setAnswer } = useContext(FormStateContext);
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

<<<<<<< HEAD
  
  const formatAnswer = (answer) => {
    const cleanText = answer.replace(/^\d+\.\s+/gm, '').replace(/\*\*/g, ''); // Remove existing numbering from each line and remove any astrix.
    const lines = cleanText.split('\n').filter(line => line.trim() !== '');
      // Split the answer into lines and remove empty lines.
    //clean text removes any existing numbering 
    // line is used in the contect to split the answer into individual lines using the split('\n')
    //empty lines filtered out with the filter function
    //return maps the lines into an ordered list (in <li> element)
   
    return (
      <ol>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
    );
  };

||||||| 89fab6f
=======
  
  const formatAnswer = (answer) => {
    const cleanText = answer.replace(/^\d+\.\s+/gm, '').replace(/\*\*/g, ''); // Remove existing numbering from each line and remove any astrix.
    const lines = cleanText.split('\n').filter(line => line.trim() !== '');  // Split the answer into lines and remove empty lines.
    //clean text removes any existing numbering 
    // line is used in the contect to split the answer into individual lines using the split('\n')
    //empty lines filtered out with the filter function
    //return maps the lines into an ordered list (in <li> element)
    
    return (
      <ol>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
    );
  };

>>>>>>> 9353c7fe5265f19e2a393e0ac78f7dc1e04fad93
  return (
    <div className="answer-container d-flex align-items-center">
      <div className="container mt-5 animate__animated animate__fadeIn">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="title animate__animated animate__heartBeat">Ready to learn?</h1>
            <p className="lead animate__animated animate__fadeInUp">Your journey to mastering adulting just got easier. Check out the guide we've prepared for you.</p>
          </div>
        </div>
<<<<<<< HEAD
        {/* <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="card border-primary mb-3 animate__animated animate__fadeIn">
              <div className="card-header">Your Question:</div>
              <div className="card-body text-center">
                <p className="card-text prompt-text">{prompt}</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row mb-2"> */}
          <div className="col-md-10 mx-auto">
            <div className="card mb-3 animate__animated animate__fadeInUp">
              {/* <div className="card-header">Your Step-By-Step Guide:</div> */}
              <div className="card-header">{prompt}</div>
              <div className="card-body">
                <p className="card-text">{formatAnswer(answer)}</p>
              </div>
            </div>
          </div>
        {/* </div> */}
        <div className="row justify-content-center mb-4">
          <button className="btn btn-outline-secondary mx-2" onClick={handleRegenerate}>
            <FontAwesomeIcon icon={faSyncAlt} className="icon" /> Regenerate
||||||| 89fab6f
        <div className="row">
          <h2 className="subtitle">
            You step-by-step guide for mastering [value of category state goes here]
          </h2>
        </div>
        <div className="row">
          <h2 className="subtitle">Your question: <i>{prompt}</i> </h2>
        </div>
        {/* Sylwia working on formatting answer */}
        <div className="row">
          <h3 className="answer">{answer}</h3>
        </div>
        <div className="row m-2">
          <button className="col-4" onClick={handleRegenerate}>
            <img className="icon-group" src="/regenerate.png" alt="regenerate button" />
=======
        <div className="row">
          <h2 className="subtitle">
            Your step-by-step guide for mastering [value of category state goes here]
          </h2>
        </div>
        <div className="row">
          <h2 className="subtitle">Your question: <i>{prompt}</i></h2>
        </div>
        {/* Sylwia working on formatting answer */}
        <div className="row">
          <h3 className="answer">{formatAnswer(answer)}</h3> {/* displays the formatted answer before was just answer */}
        </div>
        <div className="row m-2">
          <button className="col-4" onClick={handleRegenerate}>
            <img className="icon-group" src="/regenerate.png" alt="regenerate button" />
>>>>>>> 9353c7fe5265f19e2a393e0ac78f7dc1e04fad93
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