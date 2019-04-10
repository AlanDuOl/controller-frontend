import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import Dropdown from '../widget/Dropdown'
import { Link } from 'react-router-dom'
import '../../css/MenuDropdown.css'

class MenuDropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isMenuOpen: false,
		}
	}

	toggleMenu = () => {
		let currentState = this.state.isMenuOpen
		this.setState({ isMenuOpen: !currentState })
	}
	
	closeMenu = () => {
		this.setState({ isMenuOpen: false })
	}

	render() {
		return (
			<div className="menu-dropdown">
				<Nav onClick={this.toggleMenu} className="mr-auto menu-btn"></Nav>
				<Nav className={this.state.isMenuOpen ? "mr-auto show-menu" : "mr-auto hide-menu"}>
						<Link className="link-home" to="/">Home</Link>
						<Dropdown closeMenu={this.closeMenu} isMenuOpen={this.state.isMenuOpen} title="Usuário" links={[{name: "Perfil", path: "/user/:id"}, {name: "Sign-out", path:"/auth"}]} />
						<Dropdown closeMenu={this.closeMenu} isMenuOpen={this.state.isMenuOpen} title="Operações" links={[{name: "Inserir", path: "/transactions/insert"}, {name: "Visualizar", path: "/transactions/view"}]}/>
				</Nav>
			</div>
		)
	}
}

export default MenuDropdown;