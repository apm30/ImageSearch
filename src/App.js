import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
	state = { images: [] };
	onSearchSumbit = async term => {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization:
					'Client-ID 6eb2ab95c187d662a364a08023e6118a6dc7d077f9632b393917b5cdba3a1d9c'
			}
		});
		this.setState({ images: response.data.results });
		console.log('response.data.results', response.data.results);
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSumbit} />
				Found {this.state.images.length} images
			</div>
		);
	}
}

export default App;
