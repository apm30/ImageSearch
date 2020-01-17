import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
	onSearchSumbit(term) {
		console.log('term', term);
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSumbit} />
			</div>
		);
	}
}

export default App;
