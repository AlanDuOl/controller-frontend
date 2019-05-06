import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

import '../../css/Menu.css'
import MenuDropdown from '../widget/MenuDropdown.jsx'

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = { isToggled: false }
	}
	render() {
		return (
			<Navbar bg="dark" variant="dark" className="menu-bar">
				<MenuDropdown />
			</Navbar>
		)
	}
}

export default Menu