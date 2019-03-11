import React, { Component } from 'react'
import '../../css/Auth.css'

class Auth extends Component {
	constructor(props){
		super(props)

		this.state = {
			loginPage: true
		}

		this.togglePage = this.togglePage.bind(this)
	}

	togglePage(event) {
		let currentState = this.state.loginPage
		this.setState({ loginPage: !currentState })
	}

	render() {
		return (
			<div className="container">
					{this.state.loginPage ? null : <input type="text" placeholder="Nome"/> }
					<input name="email" type="text" placeholder="E-mail"/>
					<input name="password" type="password" placeholder="Senha"/>
					{this.state.loginPage ? null : <input type="password" placeholder="Confirme a senha!"/> }
					{this.state.loginPage ? <button>Entrar</button> : <button>Registrar</button>}
					<a href onClick={this.togglePage}>						
						{this.state.loginPage ? <span className="auth-link">Não tem cadastro? Registre-se aqui!</span> : <span className="auth-link">Já tem cadastro? Acesse o login!</span> }
					</a>
			</div>
		)
	}
}

export default Auth