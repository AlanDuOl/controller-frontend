import React, { Component } from 'react';
import Table from '../widget/Table'
import '../../css/Home.css'
import Filter from '../widget/Filter'

class Home extends Component {
	
	table = {
        head: ['Natureza', 'Tipo', 'Descrição', 'Data', 'Valor'],
		hosTotal: true
    }
	
    render() {
        return (
            <div className="home-table">
				<Filter filters={[{name: "dias"}, {name: "meses"}, {name: "anos"}]}/>
				<Table table={this.table} />
			</div>
        );
    }
}

export default Home;