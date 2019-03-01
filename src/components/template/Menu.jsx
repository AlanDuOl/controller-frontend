import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

import '../../css/Menu.css'
import MenuSearch from '../single/MenuSearch.jsx'
import MenuDropdown from '../single/MenuDropdown.jsx'

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = { isToggled: false }
	}
	render() {
		return (
			<div className="menu">
				<Navbar bg="dark" variant="dark">
				<MenuDropdown />
				<MenuSearch />
				</Navbar>
			</div>
		)
	}
}

export default Menu