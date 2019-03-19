import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { connect } from 'react-redux'
import { userKey } from '../global'

class Routing extends Component {
	constructor(props){
		super(props)
		this.user = JSON.parse(localStorage.getItem(userKey))
	}

	render(){
		return (
			<BrowserRouter>
				{this.user.id ? <PrivateRoutes /> : <PublicRoutes />}
			</BrowserRouter>
		)
	}
}
	
const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(Routing)
