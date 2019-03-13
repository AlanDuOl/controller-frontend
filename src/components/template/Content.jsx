import React, { Component } from 'react'
import Routing from '../../config/Routing.js'
import Footer from './Footer'
import '../../css/Content.css'

class Content extends Component {
	render() {
		return (
			<div className="content">
				<Routing className="routing"/>
				<Footer className="footer"/>
			</div>
		)
	}
}

export default Content