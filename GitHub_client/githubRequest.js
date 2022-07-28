// Load the `got` function.
const got = require('got');

// Create a "handler" callback function.
const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body)
  console.log(responseObject);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call `got` and provide the handler callback function.
// This will get called by `got` when the response is received.
got(url).then(handleReceivedResponse);
