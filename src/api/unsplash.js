import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 6eb2ab95c187d662a364a08023e6118a6dc7d077f9632b393917b5cdba3a1d9c'
	}
});
