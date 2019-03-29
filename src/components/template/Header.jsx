import React, { Component } from 'react'

import Menu from './Menu.jsx'

import '../../css/Header.css'

class Header extends Component {
	render() {
		return (
			<header id="header">
				<Menu toggled={false}/>
			</header>
		)
	}
}

export default Header