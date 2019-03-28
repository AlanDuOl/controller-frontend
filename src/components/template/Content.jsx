import React, { Component } from 'react'
import Routing from '../../config/Routing'
import Footer from './Footer'
import '../../css/Content.css'
import { connect } from 'react-redux'
import signinAction from '../../actions/signinAction'
import axios from 'axios'
import { userKey, baseApiUrl } from '../../global'

class Content extends Component {

	validateUser = () => {
		const storeUser = localStorage.getItem(userKey)
		if(storeUser){
			const user = JSON.parse(storeUser)
			axios.post(`${baseApiUrl}/validateToken`, user)
				.then(res => {
					if(res.data){
						this.props.signinAction(user)
					}
				})
		} else {
			console.log('no user on localStore')
		}
	}

	componentDidMount(){
		this.validateUser()
	}

	render() {
		return ( 
			<div className="content">
				<Routing className="routing" user={this.props.user} />
				<Footer className="footer" />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	signinAction: (user) => dispatch(signinAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)