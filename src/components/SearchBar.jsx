import React, { Component } from 'react';

export class SearchBar extends Component {
	onInputChange() {}
	render() {
		return (
			<div className="ui segment">
				<form action="" className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							className="ui form"
							type="text"
							onChange={this.onInputChange}
						/>
						<button></button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
