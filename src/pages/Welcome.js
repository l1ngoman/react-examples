// Requirements for a react component:
// 1. Import react
// 2. Must be a class that extends react Component
// 3. Must have a render function that returns JSX
// 4. Must export the class

import React, { Component } from 'react'

class Welcome extends Component {
	render() {
		let { count, incrementCounter } = this.props
		console.log("THIS IS THE WELCOME COMPONENT", this.props);
		return (
			<div>
				<div>Current Count: {count}</div>
				<button onClick={incrementCounter}>Increment Counter</button>
			</div>
		)
	}
}

export default Welcome
