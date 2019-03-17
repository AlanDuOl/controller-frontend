import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import Dropdown from '../widget/Dropdown'
import { Link } from 'react-router-dom'

import '../../css/MenuDropdown.css'

class MenuDropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeMenu: false
		}
	}

	openMenu = () => {
		let currentState = this.state.activeMenu
		this.setState({ activeMenu: !currentState })
	}

	handleClick = event => {
		const dropdown = document.getElementsByClassName('dropdown-group')
		const btn = document.getElementsByClassName('menu-btn')
        if(event.target !== dropdown[0] && event.target !== btn[0]){
            if(this.state.activeMenu){
                this.setState({ activeMenu: false })
            }
        }
    }

    componentDidMount(){
		document.addEventListener('click', this.handleClick, true)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick, true)
    }

	render() {
		return (
			<div className="menu-dropdown">
				<Nav onClick={this.openMenu} className="mr-auto menu-btn"></Nav>
				<Nav className={this.state.activeMenu ? "mr-auto show-menu" : "mr-auto hide-menu"}>
						<Link className="link-home" to="/">Home</Link>
						<Dropdown title="Operações" links={[{name: "Inserir", path: "/transactions/insert"}, {name: "Visualizar", path: "/transactions/view"}]}/>
				</Nav>
			</div>
		)
	}
}

export default MenuDropdown;