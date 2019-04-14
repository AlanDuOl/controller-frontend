import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import '../../css/MenuSearch.css'

class MenuSearch extends Component {
    constructor(props){
			super(props)
			
			this.state = {
				activeMenu: false
			}

			this.toggleSearch = this.toggleSearch.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)

			this.data = ''
		}

	toggleSearch() {
			let currentState = this.state.activeMenu
			this.setState({ activeMenu : !currentState })
	}

	handleSubmit(e) {
		e.preventDefault()
		document.getElementsByClassName('mr-sm-2')[0].value = ''
	}

	handleKeyPressed = e => {
		if(e.keyCode === 13 || e.which === 13){
			e.preventDefault()
			let currentState = this.state.activeMenu
			this.setState({ activeMenu: !currentState})
			e.target.value = ''
		}
	}

	handleChange = event => {
		this.data = event.target.value
	}

	handleResize = () => {
		this.setState({ activeMenu: false })
	}

	handleClick = event => {
		const box = document.getElementsByClassName('search-box')
		const icon = document.getElementsByClassName('search-icon')
		const inputBox = document.getElementsByClassName('mr-sm-2')
		if(event.target !== box[0] && event.target !== icon[0] && event.target !== inputBox[0]){
				if(this.state.activeMenu){
						this.setState({ activeMenu: false })
				}
		}
	}

	componentDidMount(){
		document.addEventListener('click', this.handleClick, true)
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount(){
		document.removeEventListener('click', this.handleClick, true)
		window.removeEventListener('resize', this.handleResize)
	}

	render() {
		return (
				<div className="menu-search">
					<Form onClick={this.toggleSearch} inline className="search-icon">
					</Form>
					<Form inline className={this.state.activeMenu ? "search-box-show" : "search-box search-box-hide"}>
						<FormControl type="text" placeholder="Pesquisa..." className="mr-sm-2" onChange={this.handleChange} onKeyPress={this.handleKeyPressed}/>
						<Button variant="outline-info" onClick={this.handleSubmit}>Buscar</Button>
					</Form>
				</div>
		);
	}

}

export default MenuSearch;