import React, { Component } from 'react';
import Table from '../widget/Table'
import '../../css/Home.css'
import Filter from '../widget/Filter'
import { connect } from 'react-redux'
import homeFilterAction from '../../actions/homeFilterAction'

class Home extends Component {
	
	table = {
        head: ['Natureza', 'Tipo', 'Descrição', 'Data', 'Valor'],
		hasTotal: true
    }
	
	setFilterData = filter => {
		this.props.homeFilterAction(filter)
	}
	
    render() {
        return (
            <div className="home-table">
				<Filter storeFilter={this.setFilterData} filters={[{name: "dias"}, {name: "meses"}, {name: "anos"}]}/>
				<Table table={this.table} filter={this.props.filter} />
			</div>
        );
    }
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	homeFilterAction: (filter) => dispatch(homeFilterAction(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)