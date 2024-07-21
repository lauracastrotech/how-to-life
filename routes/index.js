var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const { OpenAI } = require('openai');
const { TextToSpeechClient } = require('@google-cloud/text-to-speech');
const axios = require('axios');


const openai = new OpenAI ({
  apiKey:"sk-proj-0QmeEPXo2fy0186I8kj0T3BlbkFJEYY3Z3X8GaQ6Wxgsa7GG",
  // dangerouslyAllowBrowser: true 
})

const textToSpeechClient = new TextToSpeechClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

/* GET history entries */
router.get("/history", async function(req, res) {
  try {
    const results = await db("SELECT * FROM history"); 
    res.status(200).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
})

/*POST ai answers*/
router.post("/ai-answer", async function(req, res) { // this api send prompt from frontend - prompt should be string datatype that includes category name, custom skill or popular question, objective with more context, this string will be stored in history table
  // console.log('beginning of backend api');
  console.log(req.body);

  // Removed user_id destructure for testing purposes
  const {prompt} = req.body;
  console.log(req.body);
  if(!prompt) {
    return res.status(400).send({ error: "Prompt is required!" });
  }
  const messages = [
    {
        role: 'system',
        content: 'You are assisting users with practical and helpful life advice. Max 200 words. Give step by step instructions/guidance.'
    },
    {
        role: 'user',
        content: prompt,
    }
];

try {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
  });

  let answer = response.choices[0].message.content;

 const lines = answer.split('\n').filter(line => line.trim() !== ''); //Split the answer into lines and remove empty lines.
    const formattedAnswer = lines.map((line, index) => `${index + 1}. ${line}`).join('\n'); //Add numbering to each line.

  await db(`INSERT INTO history (question, answer) VALUES (?, ?)`, [prompt, formattedAnswer]); //// Send the formatted answer back to the client

  res.status(200).send({ answer });
} catch (e) {
  console.log(e);
  res.status(500).send({ error: e.message });
}
});

// * POST text-to-speech */
router.post('/text-to-speech', async (req, res) => {
  const { text } = req.body;
  const apiKey = 'AIzaSyAr-IGSv9UKP9-aLu-WXO50E-uZVKmE8gM';
  const endpoint = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

  const payload = 
  {
    input: { text },
    voice: { languageCode: 'en-US', name: 'en-US-Journey-O' },
    audioConfig: { audioEncoding: 'MP3', pitch: 0, speakingRate: 1 }
  };

  try {
    const response = await axios.post(endpoint, payload);
    res.json({ audioContent: response.data.audioContent });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
});


module.exports = router;