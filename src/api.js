const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

const getAppleNews = async () => {
const url =  `https://newsapi.org/v2/everything?q=tesla&from=2023-12-19&sortBy=publishedAt&apiKey=${apiKey}`;
const options = {
	method: 'GET',
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    return result;
} catch (error) {
	console.error(error);
}
};

export default getAppleNews;
