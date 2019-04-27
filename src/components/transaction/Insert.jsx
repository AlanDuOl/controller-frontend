import React, { Component } from 'react'
import '../../css/Insert.css'
import MyForm from '../widget/MyForm'
import { connect } from 'react-redux'

class Insert extends Component {

    table = {
        head: ['Natureza', 'Tipo', 'Descrição', 'Valor', 'Data'],
        header: 'Transações recentes'
    }

    render() {
        return (
            <div id="insert-container">   
                <MyForm user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(Insert)