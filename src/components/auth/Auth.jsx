import React, { Component } from 'react'
import '../../css/Auth.css'
import axios from 'axios'
import { baseApiUrl, userKey } from '../../global'
import { connect } from 'react-redux'
import signinAction from '../../actions/signinAction'
import Alert from 'react-bootstrap/Alert'

class Auth extends Component {
	constructor(props){
		super(props)

		this.state = {
			loginPage: true,
			showAlert: false,
		}
		this.alertMsg = undefined
		this.user = {}

		this.togglePage = this.togglePage.bind(this)
		this.showAlert = this.showAlert.bind(this)
		this.hideAlert = this.hideAlert.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.signup = this.signup.bind(this)
		this.signin = this.signin.bind(this)
	}

	signup(){
		axios.post(`${baseApiUrl}/signup`, this.user)
			.then(() => {
					this.setState({ loginPage: true })
				})
			.catch(e => {
				this.alertMsg = e.response.data
				this.showAlert()
			})
	}

	signin(){
		axios.post(`${baseApiUrl}/signin`, this.user)
			.then(res => {
				this.props.signinAction(res.data)
				localStorage.setItem(userKey, JSON.stringify(res.data))
			})
			.catch(e => {
				this.alertMsg = e.response.data
				this.showAlert()
			})
	}

	togglePage() {
		let currentState = this.state.loginPage
		this.setState({ loginPage: !currentState })
	}

	showAlert() {
		this.setState({ showAlert: true })
	}

	hideAlert() {
		this.setState({ showAlert: false })
	}

	handleSubmit(event){
		event.preventDefault()
		if(this.state.loginPage){
			this.signin()
		} else {
			this.signup()
		}
	}

	handleChange(event){
		this.user[event.target.name] = event.target.value
	}

	render() {
		return (
			<div id="container">
				{ this.state.showAlert ? <Alert variant="warning" onClick={this.hideAlert} dismissible> {this.alertMsg} </Alert> : null }
				<form onSubmit={this.handleSubmit}>
					{this.state.loginPage ? null : <input name="name" type="text" placeholder="Nome" onChange={this.handleChange}/> }
					<input name="email" type="text" placeholder="E-mail" onChange={this.handleChange}/>
					<input name="password" type="password" placeholder="Senha" onChange={this.handleChange}/>
					{this.state.loginPage ? null : <input name="confirmPassword" type="password" placeholder="Confirme a senha!" onChange={this.handleChange}/> }
					{this.state.loginPage ? <button type="submit">Entrar</button> : 
						<button type="submit">Registrar</button>}
					<span onClick={this.togglePage}>						
						{this.state.loginPage ? <span className="auth-link">Não tem cadastro? Registre-se aqui!</span> : <span className="auth-link">Já tem cadastro? Acesse o login!</span> }
					</span>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	signinAction: (user) => dispatch(signinAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth)