import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

import '../../css/MenuDropdown.css'

class MenuDropdown extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<div className="menu-dropdown">
				<Nav className="mr-auto fa fa-align-justify menu-dropdown-button"></Nav>
				<Nav className="mr-auto menu-dropdown-content">
					<Nav.Link href="#home">Home</Nav.Link>
					<NavDropdown title="Usuário" id="basic-nav-dropdown">
						<NavDropdown.Item href="#users/:id">Perfil</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Operações" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Relatórios" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</div>
		)
	}
}

export default MenuDropdown;