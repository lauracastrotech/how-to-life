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