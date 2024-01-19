const getCrimeData = async () => {
const url = await 'https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2015&enddate=9%2F25%2F2015&long=-122.5076392&lat=37.757815';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a07011f609msh411042424ad377fp170723jsn690eae111e22',
		'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};

getCrimeData();