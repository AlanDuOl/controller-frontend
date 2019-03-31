import React, { Component } from 'react'
import '../../css/Insert.css'
import MyForm from '../widget/MyForm'
import { connect } from 'react-redux'
// import Table from '../widget/Table'
// import axios from 'axios'

class Insert extends Component {

    table = {
        head: ['Natureza', 'Tipo', 'Descrição', 'Data', 'Valor'],
        data: {}
    }

    render() {
        return (
            <div id="insert-container">   
                <MyForm user={this.props.user}/>
                <hr/>
                {/* <Table /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(Insert)