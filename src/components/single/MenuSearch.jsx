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
		}

	toggleSearch() {
			let currentState = this.state.activeMenu
			this.setState({ activeMenu : !currentState })
	}

	handleSubmit(e) {
			if(e.keyCode === 13 || e.which === 13){
					let currentState = this.state.activeMenu
					this.setState({ activeMenu: !currentState})
			}
	}

	handleClick = event => {
		const box = document.getElementsByClassName('menu-search-box')
		const icon = document.getElementsByClassName('menu-search-icon')
		const inputBox = document.getElementsByClassName('mr-sm-2')
		if(event.target !== box[0] && event.target !== icon[0] && event.target !== inputBox[0]){
				if(this.state.activeMenu){
						this.setState({ activeMenu: false })
				}
		}
	}

	componentDidMount(){
				document.addEventListener('click', this.handleClick, true)
		}

		componentWillUnmount(){
				document.removeEventListener('click', this.handleClick, true)
		}

  render() {
    return (
			<div className="menu-search">
				<Form onClick={this.toggleSearch} inline className="menu-search-icon fa fa-search">
				</Form>
				<Form inline className={this.state.activeMenu ? "menu-search-box search-box" : "menu-search-box"}>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyPress={this.handleSubmit}/>
					<Button variant="outline-info">Search</Button>
				</Form>
			</div>
    );
	}

}

export default MenuSearch;