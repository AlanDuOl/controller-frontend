import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import '../../css/MenuSearch.css'

class MenuSearch extends Component {
  render() {
    return (
		<div className="menu-search">
			<Form inline className="menu-search-icon fa fa-search">
			</Form>
			<Form inline className="menu-search-box">
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</div>
    );
  }
}

export default MenuSearch;