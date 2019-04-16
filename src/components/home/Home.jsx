import React, { Component } from 'react';
import Table from '../widget/Table'
import '../../css/Home.css'

class Home extends Component {
	
	table = {
        head: ['Natureza', 'Tipo', 'Descrição', 'Data', 'Valor'],
		total: true
    }
	
    render() {
        return (
            <div className="home-table">
				<div id="home-filters-container">
					<button className="home-filter">Ano</button>
					<button className="home-filter">Mês</button>
				</div>
				<Table table={this.table} />
			</div>
        );
    }
}

export default Home;