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
			closeDropdowns: false,
		}
	}

	toggleMenu = () => {
		let currentState = this.state.isMenuOpen
		this.setState({ isMenuOpen: !currentState })
	}

	handleClick = event => {
		const dropdown = document.getElementsByClassName('dropdown-group')
		const btn = document.getElementsByClassName('menu-btn')
		console.log(btn[0])
        if(event.target !== dropdown[0] && event.target !== dropdown[1] && event.target !== btn[0]){
            if(this.state.isMenuOpen){
                this.setState({ isMenuOpen: false, closeDropdowns: true })
            } else {
				if(btn[0].style.display === 'none'){
					console.log('abc')
					this.setState({ closeDropdowns: true })
				} else {
					this.setState({ closeDropdowns: false })
				}
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
				<Nav onClick={this.toggleMenu} className="mr-auto menu-btn"></Nav>
				<Nav className={this.state.isMenuOpen ? "mr-auto show-menu" : "mr-auto hide-menu"}>
						<Link className="link-home" to="/">Home</Link>
						<Dropdown closeDropdowns={this.state.closeDropdowns} title="Usuário" links={[{name: "Perfil", path: "/user/:id"}, {name: "Sign-out", path:"/auth"}]} />
						<Dropdown closeDropdowns={this.state.closeDropdowns} title="Operações" links={[{name: "Inserir", path: "/transactions/insert"}, {name: "Visualizar", path: "/transactions/view"}]}/>
				</Nav>
			</div>
		)
	}
}

export default MenuDropdown;