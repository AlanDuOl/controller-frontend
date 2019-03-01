import React, { Component } from 'react'

import Menu from './Menu.jsx'

import '../../css/Header.css'

class Header extends Component {
	render() {
		return (
			<header className="header">
				<Menu toggled={false}/>
			</header>
		)
	}
}

export default Header