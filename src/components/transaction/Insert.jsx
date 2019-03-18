import React, { Component } from 'react'
import '../../css/Insert.css'
import MyForm from '../widget/MyForm'
import Table from '../widget/Table'
import axios from 'axios'

class Insert extends Component {

    save() {
        
    }

    render() {
        return (
            <div id="insert-container">   
                <MyForm />
                <hr/>
                {/* <Table /> */}
            </div>
        )
    }
}

export default Insert