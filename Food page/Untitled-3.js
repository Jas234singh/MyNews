const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5be5e1e15msha135363ed5224c2p1ecf3fjsna641b4ee1248',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}