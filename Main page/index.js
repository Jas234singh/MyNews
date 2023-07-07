const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://random-words-with-pronunciation.p.rapidapi.com/word',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'b5be5e1e15msha135363ed5224c2p1ecf3fjsna641b4ee1248',
    'X-RapidAPI-Host': 'random-words-with-pronunciation.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}