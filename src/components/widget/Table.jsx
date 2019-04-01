import React, { Component } from 'react'
import { baseApiUrl } from '../../global'
import axios from 'axios'

class Table extends Component {

    transactions = {}

    createHead = () => {
        const heads = []
        const { head } = this.props.table
        for(let index in head){
            heads.push(<th key={index} className="table-head-item">{head[index]}</th>)
        }
        return (
            <thead id="table-head">{heads}</thead>
        )
    }

    createBody() {
        return (
            <tbody id="table-body"></tbody>
        )
    }

    loadData = () => {
        axios.get(`${baseApiUrl}/transactions`)
            .then(res => this.transactions = res.data[0])
            .catch(err => console.log('error with get transactions on table: ', err))
    }

    render(){
        return (
            <table id="table">
                {this.createHead()}
                {this.loadData()}              
            </table>
        )
    }
}

export default Table