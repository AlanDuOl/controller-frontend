import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap'
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
						<NavDropdown title="Usuário" id="basic-nav-dropdown">
						</NavDropdown>
						<NavDropdown title="Operações" id="basic-nav-dropdown">
							<ul className="menu-items" onClick={this.toggleMenu}>
								<Link className="link-item" to="/transactions/insert">Inserir</Link>
								<Link className="link-item" to="/transactions/view">Visualizar</Link>
							</ul>
						</NavDropdown>
						<NavDropdown title="Relatórios" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1" onClick={this.toggleMenu}>Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2" onClick={this.toggleMenu}>Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3" onClick={this.toggleMenu}>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4" onClick={this.toggleMenu}>Separated link</NavDropdown.Item>
						</NavDropdown>
					</div>
				</Nav>
			</div>
		)
	}
}

export default MenuDropdown;