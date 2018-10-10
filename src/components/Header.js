import React, { Component } from 'react'

class Header extends Component {
	render() {
		console.log("THIS IS HEADER: ", this.props);
		return (
			<header>
				<p>Welcome {this.props.name}! This is our amazing app</p>
				<h1>{this.props.count}</h1>
			</header>
		)
	}
}

export default Header
