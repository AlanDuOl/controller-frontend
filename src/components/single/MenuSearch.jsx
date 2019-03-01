import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import '../../css/MenuSearch.css'

class MenuSearch extends Component {
  render() {
    return (
		<>
		<Form inline className="menu-search-collapsed fa fa-search">
		</Form>
		<Form inline className="menu-search">
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-info">Search</Button>
		</Form>
		</>
    );
  }
}

export default MenuSearch;