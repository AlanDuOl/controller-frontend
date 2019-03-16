import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import Dropdown from '../widget/Dropdown'
import { Link } from 'react-router-dom'

import '../../css/MenuDropdown.css'

class MenuDropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false
		}

		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu() {
		const currentState = this.state.active
		this.setState({ active: !currentState })
	}

	render() {
		return (
			<div className="menu-dropdown">
				<Nav onClick={this.toggleMenu} className="mr-auto fa fa-align-justify menu-dropdown-button"></Nav>
				<Nav className={this.state.active ? "mr-auto menu-dropdown-content toggle-menu" : "mr-auto menu-dropdown-content"}>
					<div className={this.state.active ? "menu-dropdown toggle-menu" : "menu-dropdown"}>
						<Link className="link-home" to="/" onClick={this.toggleMenu}>Home</Link>
						<Dropdown title="Operações" links={[{name: "Inserir", path: "/transactions/insert"}, {name: "Visualizar", path: "/transactions/view"}]}/>
					</div>
				</Nav>
			</div>
		)
	}
}

export default MenuDropdown;