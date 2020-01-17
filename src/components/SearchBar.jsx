import React, { Component } from 'react';

export class SearchBar extends Component {
	state = { term: '' };
	onFormSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
		//console.log('this.state.term', this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} action="" className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							className="ui form"
							type="text"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
