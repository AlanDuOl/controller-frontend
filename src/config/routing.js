import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

class Routing extends Component {

	render(){
		return (
			<BrowserRouter>
				<PrivateRoutes />
			</BrowserRouter>
		)
	}

}
// {this.props.user.id ? <PrivateRoutes /> : <PublicRoutes />}
export default Routing
