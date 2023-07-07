const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5be5e1e15msha135363ed5224c2p1ecf3fjsna641b4ee1248',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}