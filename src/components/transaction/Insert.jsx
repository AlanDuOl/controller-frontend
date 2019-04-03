import React, { Component } from 'react'
import '../../css/Insert.css'
import MyForm from '../widget/MyForm'
import { connect } from 'react-redux'
import Table from '../widget/Table'

class Insert extends Component {

    table = {
        head: ['Natureza', 'Tipo', 'Descrição', 'Valor', 'Data'],
        data: {}
    }

    render() {
        return (
            <div id="insert-container">   
                <MyForm user={this.props.user}/>
                <hr/>
                <label id="tr-header">Transações recentes</label>
                <Table table={this.table} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(Insert)