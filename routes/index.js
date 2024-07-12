var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const { OpenAI } = require('openai');

const openai = new OpenAI ({
  apiKey:"sk-proj-0QmeEPXo2fy0186I8kj0T3BlbkFJEYY3Z3X8GaQ6Wxgsa7GG",
  // dangerouslyAllowBrowser: true 
})

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
  console.log('beginning of backend api');
  console.log(req.body);

  // Removed user_id destructure for testing purposes
  const {prompt} = req.body;
  // console.log(prompt);
  if(!prompt) {
    return res.status(400).send({ error: "Prompt is required!" });
  }
  const messages = [
    {
        role: 'system',
        content: 'You are assisting users with practical and helpful life advice. Max 200 words'
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

    const answer = response.choices[0].message.content;
    // This is the response from OpenAI api/chatGPT
    console.log('AI Answer:', answer)

    await db(`INSERT INTO history (question, answer) VALUES ("${prompt}", "${answer}")`);

    res.status(200).send({ answer });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e.message })
  }
  });


module.exports = router;