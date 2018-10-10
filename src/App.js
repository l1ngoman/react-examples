import React, { Component } from 'react'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import Footer from './components/Footer'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0,
			current_user: {
				name: "Mal",
				age: "40"
			}
		}
	}

	render() {
		console.log(this);
		console.log("THIS IS APP!");
		let { name, age } = this.state.current_user
		let { count } = this.state
		return (
			<div>
				<Header name={name} age={age} count={count} />

				<Welcome count={count} incrementCounter={this.incrementCounter} />

				<Footer />
			</div>
		);
	}

	incrementCounter = () => {
		let { count } = this.state
		this.setState({count: count+1})
	}

	renameUser() {
		// this.state.current_user.name = "Wash"

		// make a copy of current user from state
		let { current_user: updated_user } = this.state
		// make edits to the copy
		updated_user.name = "Wash"
		// update state with copied version
		this.setState({current_user: updated_user})
	}
}

export default App
