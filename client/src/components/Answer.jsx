import React, { useContext, useState, useEffect } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import axios from 'axios';
import './Answer.css';

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

  return (
    <div className="container">
      <div className="container col">
        <div className="row m-2">
          <h1 className="title">Ready to learn? Here's your answer</h1>
        </div>
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
          </button>
          <button className="col-4" onClick={() => handleTextToSpeech(answer)}>
            <img className="icon-group" src="/text_to_speech.png" alt="text to speech button" />
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
