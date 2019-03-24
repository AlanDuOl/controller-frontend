import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'


class Routing extends Component {

	render(){
		return (
			<BrowserRouter>
				{this.props.user.id ? <PrivateRoutes user={this.props.user} /> : <PublicRoutes user={this.props.user}/>}
			</BrowserRouter>
		)
	}

}

export default Routing
