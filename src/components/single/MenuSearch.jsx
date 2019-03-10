import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import '../../css/MenuSearch.css'

class MenuSearch extends Component {
    constructor(props){
				super(props)
				
				this.state = {
				    menuActice: false
				}

				this.toggleSearch = this.toggleSearch.bind(this)
				this.handleSubmit = this.handleSubmit.bind(this)
		}

	toggleSearch() {
			let currentState = this.state.menuActice
			this.setState({ menuActice : !currentState })
	}

	handleSubmit(e) {
			if(e.keyCode === 13 || e.which === 13){
					let currentState = this.state.menuActice
					this.setState({ menuActice: !currentState})
			}
	}

  render() {
    return (
			<div className="menu-search">
				<Form onClick={this.toggleSearch} inline className="menu-search-icon fa fa-search">
				</Form>
				<Form inline className="menu-search-box" className={this.state.menuActice ? "menu-search-box search-box" : "menu-search-box"}>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyPress={this.handleSubmit}/>
					<Button variant="outline-info" onClick={this.toggleSearch}>Search</Button>
				</Form>
			</div>
    );
	}

}

export default MenuSearch;