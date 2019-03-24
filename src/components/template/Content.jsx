import React, { Component } from 'react'
import Routing from '../../config/Routing'
import Footer from './Footer'
import Loading from './Loading'
import '../../css/Content.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { userKey, baseApiUrl } from '../../global'
import signinAction from '../../actions/signinAction'

class Content extends Component {

	constructor(props){
		super(props)

		this.state = {
			readyToRender: false
		}
	}

	validateToken = () => {
		const storeUser = localStorage.getItem(userKey)
		if(storeUser){
			const user = JSON.parse(storeUser)
			axios.post(`${baseApiUrl}/validateToken`, user)
				.then(res => {
					if(res.data){
						this.props.signinAction(user)
						this.setState({ readyToRender: true })
					} else {
						console.log('user null')
					}
				})
		} else {
			this.setState({ readyToRender: true })
			this.props.signinAction({ id: undefined })
		}
	}

	componentDidMount(){
		this.validateToken()
	}

	render() {
		return this.state.readyToRender ?
			( <div className="content">
				<Routing className="routing" user={this.props.user} />
				<Footer className="footer" />
			</div> ) : ( <Loading /> )
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	signinAction: (user) => dispatch(signinAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)